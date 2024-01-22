//@ts-nocheck
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function useTeachingCategory() {

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
    return { data, isLoading }

    const { mutate: mutate_CourseCategoty } = useMutation({

        mutationFn: () => {
            return axios.post(`${server}/api/course/update/1/3`, {
                "category_id": selectedCategory,
                "price": coursePrice
            }, {
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

    return { mutate_CourseCategoty }

}


export default useTeachingCategory