import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
 
import { useSelector } from 'react-redux'

export const Teaching_Fetch = () => {

    const Token = useSelector((state: any) => state.TOKEN.Token)
    let server = 'https://learnify.v1r.ir'
    const [CreatedCourseId, setCreatedCouseId] = useState('')


    const { mutate: mutate_CreateCourse, isPending: pending_CreateCourse, isSuccess: success_CreateCourse } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/course/create`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('res', res)
            setCreatedCouseId(res.data.data.id)
        },
        onError: (error) => {
            console.log('error', error)
        }
    })

    const { mutate: mutate_UploadPhotoCourse, isPending: pending_UploadPhotoCourse, isSuccess: success_UploadPhotoCourse, isError: error_UploadPhotoCourse } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/media/image`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedImageId:', res.data.id)
            localStorage.setItem('UploadPhotoCourseId', res.data.id)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })

    const { mutate: mutate_UploadTeaserCourse, isPending: pending_UploadTeaserCourse, isSuccess: success_UploadTeaserCourse, isError: error_UploadTeaserCourse } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/media/video`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedVideoId:', res.data.id)
            localStorage.setItem('UploadTeaserCourseId', res.data.id)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const { mutate: mutate_UploadMediaIdCourse, isPending: pending_UploadMediaIdCourse, isSuccess: success_UploadMediaIdCourse } = useMutation({
        mutationFn: (data) => {
            return axios.put(`${server}/api/course/update/${CreatedCourseId}/1`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }

            })
        },
        onSuccess: (res) => {
            console.log('courseData:', res)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })

    const { mutate: mutate_UploadVideoCourse, isPending: pending_UploadVideoCourse, isSuccess: success_UploadVideoCourse, isError: error_UploadVideoCourse } = useMutation({
        mutationFn: async (data) => {
            const response = await axios.post(`${server}/api/media/video`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            return response
        },
        onSuccess: (res) => {
            console.log('UploadVideoCourseId:', res.data.id);
            localStorage.setItem('UploadVideoCourseId', res.data.id);
        }

    })

    const { mutate: mutate_UploadCourse, isPending: pending_UploadCourse, isSuccess: success_UploadCourse } = useMutation({
        mutationFn: (data) => {
            return axios.put(`${server}/api/course/update/${CreatedCourseId}/2`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('res::', res)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const { data: dataCategory } = useQuery({
        queryKey: ['Category'],
        queryFn: async () => {
            const result = await axios.get(`${server}/api/category/index`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            console.log('def', dataCategory)
            return result
        },
    })

    const { mutate: mutate_CourseCategory, isPending: pending_CourseCategoty } = useMutation({

        mutationFn: (data) => {
            console.log('data', data)
            return axios.put(`https://learnify.v1r.ir/api/course/update/${CreatedCourseId}/3`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
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



    const { data: dataShowCourse } = useQuery({
        queryKey: ['showCourse'],
        queryFn: async () => {
            const response = await axios.get(`${server}/api/course/show/1`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
            return response
        }
    })


    return {
        mutate_CreateCourse,
        pending_CreateCourse,
        success_CreateCourse,
        mutate_UploadPhotoCourse,
        pending_UploadPhotoCourse,
        success_UploadPhotoCourse,
        error_UploadPhotoCourse,
        mutate_UploadTeaserCourse,
        pending_UploadTeaserCourse,
        success_UploadTeaserCourse,
        error_UploadTeaserCourse,
        mutate_UploadMediaIdCourse,
        pending_UploadMediaIdCourse,
        success_UploadMediaIdCourse,
        mutate_UploadVideoCourse,
        pending_UploadVideoCourse,
        success_UploadVideoCourse,
        error_UploadVideoCourse,
        mutate_UploadCourse,
        pending_UploadCourse,
        success_UploadCourse,
        dataCategory,
        mutate_CourseCategory,
        pending_CourseCategoty,
        dataShowCourse
    }
}

