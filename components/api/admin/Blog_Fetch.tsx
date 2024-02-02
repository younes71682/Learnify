import React from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

type Current_Page = {
    currentPage: number
}

type BlogId = {
    id: number
}

const Blog_Fetch = (currentPage: Current_Page, blogId: BlogId,) => {

    const client = useQueryClient()

    const { mutate: mutate_add_image_blog, isPending: pending_add_image_blog, isSuccess: success__add_image_blog, isError: error_add_image_blog } = useMutation({
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


    const { data: data_show_listblog, isPending: pending_show_listblog } = useQuery({
        queryKey: ['listBlog', currentPage],
        queryFn: async ({ queryKey }) => {
            const page = queryKey[1] as Current_Page
            let queryParams = { page: page }
            let token = localStorage.getItem('token')
            const response = await axios.get('https://learnify.v1r.ir/api/blogs', {
                params: queryParams,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            return response
        },

    })

    const { mutate: mutate_add_blog, isPending: pending_add_blog } = useMutation({
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
            client.invalidateQueries({ queryKey: ['listBlog'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })


    const { mutate: mutate_delete_blog, isPending: pending_delete_blog } = useMutation({
        mutationFn: () => {
            let token = localStorage.getItem('token')
            let id = localStorage.getItem('delete_id_blog')
            console.log('id', id)
            return axios.delete(`https://learnify.v1r.ir/api/blogs/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            client.invalidateQueries({ queryKey: ['listBlog'] })
        },
        onError: (error) => {
            console.log(error)
        }
    })


    const { data: data_show_BlogId, isPending: pending_show_BlogId } = useQuery({
        queryKey: ['ShowBlogId', blogId],
        queryFn: async ({ queryKey }) => {
            let id = queryKey[1]
            console.log('idi', id)
            let token = localStorage.getItem('token')
            const response = await axios.get(`https://learnify.v1r.ir/api/blogs/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })
            return response
        },

    })




    return {
        mutate_add_image_blog,
        pending_add_image_blog,
        success__add_image_blog,
        error_add_image_blog,
        data_show_listblog,
        pending_show_listblog,
        mutate_add_blog,
        pending_add_blog,
        mutate_delete_blog,
        pending_delete_blog,
        data_show_BlogId,
        pending_show_BlogId,
    }
}

export default Blog_Fetch
