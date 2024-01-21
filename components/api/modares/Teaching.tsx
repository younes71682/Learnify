import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

export const Teaching = () => {

    let server = 'https://learnify.v1r.ir'

    let token = localStorage.getItem('token')

    const { mutate: mutate_Step0 } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/course/create`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        }
    })
    const [younes, setYounes] = useState()
    const { mutate: mutate_Step1Photo } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/media/image`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedImageId:', res)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })

    const { mutate: mutate_Step1Video } = useMutation({
        mutationFn: (data) => {
            return axios.post(`${server}/api/media/video`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('upladedVideoId:', res)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const { mutate: mutate_courseData } = useMutation({
        mutationFn: (data) => {
            return axios.put(`${server}/api/course/update/1/2`, data, {
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


    return { mutate_Step0, mutate_Step1Photo, mutate_Step1Video, mutate_courseData }
}

