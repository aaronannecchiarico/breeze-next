import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import ContentLayout from '@/components/Layouts/ContentLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Button from '@/components/Button'
import axios from '@/lib/axios'

import { useSWRConfig } from 'swr'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'

const projectById = async (id) => {
    if(id){
        return axios.get(`/projects/${id}`).then(res => res.data);
    }
}

const update = async ({ ...data }) => {
    return axios.put(`/projects/${id}`, data).then(res => res.data);
}

const Project = ({ props }) => {
    const router = useRouter()
    const { id } = router.query

    const {
        data: project,
        error,
        isLoading,
    } = useSWRConfig(`/projects/${id}`, projectById(id))

    const [name, setName] = useState('')
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            await update({ project });
            // await router.push('/projects');
        }catch(error){
            if (error.response.status !== 422) throw error
            setErrors(error.response.data.errors)
        }
    }

    return (
        <AppLayout>
            <Head>
                <title>Project Edit</title>
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
                        {errors.name && (
                            <InputError
                                messages={[errors.name]}
                                className="mt-2"
                            />
                        )}
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="description">Description</Label>
                        <Input
                            id="description"
                            type="textarea"
                            value={description}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                            required
                        />
                        {errors.description && (
                            <InputError
                                messages={[errors.description]}
                                className="mt-2"
                            />
                        )}
                    </div>
                    <div className="flex items-center justify-end">
                        <Button type="submit" className="ml-4">
                            Update
                        </Button>
                    </div>
                </form>
            </ContentLayout>
        </AppLayout>
    )
}

export default Project

