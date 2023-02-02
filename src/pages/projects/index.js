import useSWR from 'swr'
import axios from '@/lib/axios'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import TableComponent from '@/components/Table'

const Projects = ({ children }) => {
    const { data: projects, error, isLoading } = useSWR('/projects', () =>
        axios.get('/projects').then(res => res.data),
    )
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }>
            <Head>
                <title>Projects</title>
            </Head>
            {isLoading && (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                Loading...
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {error && (
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">
                                Error: {error.message}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {projects && (

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                                    <TableComponent
                                        headers={[
                                            'Name',
                                            'Description',
                                            'Created At',
                                            'Status',
                                        ]}
                                        rows={projects.data}
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div>{children}</div>
        </AppLayout>
    )
}

export default Projects
