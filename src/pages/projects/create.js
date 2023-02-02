import {
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    RequiredIndicator,
    Textarea,
} from '@vechaiui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'

const Create = () => {
    const { user } = useAuth()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([])
    const router = useRouter()

    const create = async ({ setErrors, setLoading, ...props }) => {
        axios.get('/sanctum/csrf-cookie')

        // post to /projects with axios
        return axios
            .post('/projects', props)
            .then(() => router.push('/projects'))
            .catch(error => {
                throw error
            })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        try {
            await create({ name, description })
        } catch (error) {
            setErrors(error.response.data.errors)
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm">
                <h1 className="text-3xl font-bold mb-6">Create a Project</h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <FormControl>
                        <FormLabel>
                            Name
                            <RequiredIndicator />
                        </FormLabel>
                        <Input
                            id="name"
                            color='primary'
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={e => setName(e.target.value)}
                            required
                            autoFocus
                        />
                        {errors.name && (
                            <FormErrorMessage>
                                {errors.name}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl>
                        <FormLabel>
                            Description
                            <RequiredIndicator />
                        </FormLabel>
                        <Textarea
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        {errors.description && (
                            <FormErrorMessage>
                                {errors.description}
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <div className="flex items-center justify-between">
                        <Button
                            color='primary'
                            variant='solid'
                            type="submit"
                            loadingText="Creating..."
                            loading={loading}
                            >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
