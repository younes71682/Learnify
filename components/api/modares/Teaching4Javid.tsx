import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function useTeachingCategory() {

    let server = 'https://learnify.v1r.ir'

    let token = localStorage.getItem('token')

    const { data, isLoading } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            const result = await axios.get(`${server}/api/category/index`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return result
        },
    })
    return { data, isLoading }
}


export default useTeachingCategory