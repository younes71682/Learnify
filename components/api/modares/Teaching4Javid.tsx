//@ts-nocheck
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function Teaching4Javid() {

    let server = 'https://learnify.v1r.ir'


    // let selectedCategory = localStorage.getItem('selectedCategory')
    // let coursePrice = localStorage.getItem('coursePrice')


    const { data, isLoading } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            let token = localStorage.getItem('token')
            const result = await axios.get(`${server}/api/category/index`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return result
        },
    })

    const { mutate: mutate_CourseCategoty } = useMutation({

        mutationFn: (data) => {
            console.log('data',data)
            let token = localStorage.getItem('token')
            return axios.put(`https://learnify.v1r.ir/api/course/update/1/3`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            
        },
        onSuccess: (res) => {
            console.log('res', res)
        },
        onError: (error) => {
            console.log('error', error)
        }
    })


    return { data, isLoading, mutate_CourseCategoty }
}


export default Teaching4Javid