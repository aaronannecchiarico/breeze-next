import AppLayout from '@/components/Layouts/AppLayout'
import Input from '@/components/Input';
import Label from '@/components/Label';
import Button from '@/components/Button';
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import axios from '@/lib/axios'
import ContentLayout from '@/components/Layouts/ContentLayout'
import useSWRMutation from 'swr/mutation'
import InputError from '@/components/InputError';

const create = async ({ ...data }) => {
    return axios.post('/projects', data).then(res => res.data);
}

const Create = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const router = useRouter();

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            await create({ name, description });
            await router.push('/projects');
        }catch(error){
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

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
            <ContentLayout>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />
                        {
                        errors.name && (
                            <InputError messages={[errors.name]} className="mt-2" />
                        )}
                    </div>
                    <div className='mt-4'>
                        <Label htmlFor="description">Description</Label>

                        <Input
                            id="description"
                            type="textarea"
                            value={description}
                            className="block mt-1 w-full"
                            onChange={event => setDescription(event.target.value)}
                            required
                        />
                        {errors.description && (
                            <InputError messages={[errors.description]} className="mt-2" />
                        )}
                    </div>
                    <div className="flex items-center justify-end">
                        <Button type="submit" className="ml-4">
                            Create
                        </Button>
                    </div>
                </form>
            </ContentLayout>
        </AppLayout>
    )
}

export default Create
