import { Button, FormControl, FormLabel,  FormHelperText, FormErrorMessage, Input, RequiredIndicator, Textarea } from '@vechaiui/react'
import { useState } from 'react';
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth';
import axios from '@/lib/axios';

const Create = () => {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter()

    const create = async ({ setErrors, setLoading, ...props }) => {
        axios.get('/sanctum/csrf-cookie');

        // post to /projects with axios
        return axios.post('/projects', props)
            .then(() => router.push('/projects'))
            .catch(error => {
                if (error?.response?.status !== 422) throw error
            }
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try{
            await create({ name, description });
        } catch (error) {
            setError(error.response.data.error)
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm">
                <h1 className="text-3xl font-bold mb-6">Create a Project</h1>

                <form onSubmit={handleSubmit}>
                    {
                        error && <FormErrorMessage>{error}</FormErrorMessage>
                    }
                    <FormControl>
                            <FormLabel>
                                Name<RequiredIndicator />
                            </FormLabel>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                className="block mt-1 w-full"
                                onChange={(e) => setName(e.target.value)}
                                required
                                autoFocus
                            />
                            <FormHelperText>Enter a memorable project name</FormHelperText>
                        </FormControl>
                        <FormControl>
                            <FormLabel>
                                Description
                            </FormLabel>
                            <Textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FormControl>
                        <div className="flex items-center justify-between">
                            <Button variant='solid' type='submit' disabled={loading}>
                                {loading ? 'Loading...' : 'Create'}
                            </Button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
