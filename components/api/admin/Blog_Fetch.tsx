import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

const Blog_Fetch = () => {


    const { mutate: mutate_add_image_blog } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post('https://learnify.v1r.ir/api/media/image', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log(res)
            localStorage.setItem('image_id_blog', res.data.id)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const { mutate: mutate_add_blog } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post('https://learnify.v1r.ir/api/blogs', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const { data: data_show_listblog } = useQuery({
        queryKey: ['listBlog'],
        queryFn: async () => {
            let token = localStorage.getItem('token')
            const response = await axios.get('https://learnify.v1r.ir/api/blogs', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            return response
        },

    })




    return { mutate_add_image_blog, mutate_add_blog, data_show_listblog }
}

export default Blog_Fetch
