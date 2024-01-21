import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

export const Teaching_Fetch = () => {

    let server = 'https://learnify.v1r.ir'


    const { mutate: mutate_CreateCourse } = useMutation({

        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post(`${server}/api/course/create`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('res',res)
        },
        onError: (error) => {
            console.log('error',error)
        }
    })

    const [younes, setYounes] = useState()
    const { mutate: mutate_UploadPhotoCourse } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post(`${server}/api/media/image`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedImageId:', res)
            // localStorage.setItem('UploadPhotoCourse',)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const [javid, setJavid] = useState('')
    const { mutate: mutate_UploadTeaserCourse } = useMutation({

        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post(`${server}/api/media/video`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedVideoId:', res)
            // localStorage.setItem('UploadTeaserCourse',)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const { mutate: mutate_UploadMediaIdCourse } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')

            return axios.put(`${server}/api/course/update/1/1`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
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

    const { mutate: mutate_ } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')

            return axios.put(`${server}/api/course/update/1/3`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log(':', res)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    return { mutate_CreateCourse, mutate_UploadPhotoCourse, mutate_UploadTeaserCourse, mutate_UploadMediaIdCourse }
}

