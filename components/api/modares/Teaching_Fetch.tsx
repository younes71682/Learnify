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
            console.log('res', res)
        },
        onError: (error) => {
            console.log('error', error)
        }
    })

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
            console.log('upladedImageId:', res.data.id)
            localStorage.setItem('UploadPhotoCourseId', res.data.id)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })

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
            console.log('upladedVideoId:', res.data.id)
            localStorage.setItem('UploadTeaserCourseId', res.data.id)
        },
        onError: (err) => {
            console.log("err:", err)
        }
    })


    const { mutate: mutate_UploadMediaIdCourse } = useMutation({
        mutationFn: (data) => {
            console.log('MediaIdCourssssse:::', data)
            let token = localStorage.getItem('token')

            return axios.put(`${server}/api/course/update/1/1`, data, {
                headers: {
                    'Content-Type': 'application/json',
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

    const mutate_UploadVideoCourse = async (data) => {
        try {
            let token = localStorage.getItem('token');
            const response = await axios.post(`${server}/api/media/video`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log('UploadVideoCourseId:', response.data.id);
            localStorage.setItem('UploadVideoCourseId', response.data.id);

            return response.data; // Return the data or modify as needed
        } catch (error) {
            console.error('Error uploading video:', error);
            throw error; // Re-throw the error for the calling function to handle
        }
    };

    const { mutate: mutate_UploadCourse } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.put(`${server}/api/course/update/1/2`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
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


    return { mutate_CreateCourse, mutate_UploadPhotoCourse, mutate_UploadTeaserCourse, mutate_UploadMediaIdCourse, mutate_UploadVideoCourse, mutate_UploadCourse }
}

