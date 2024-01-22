import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

export const TeachingLastStep = () => {

    let server = 'https://learnify.v1r.ir'

    const { mutate: mutateCategory } = useMutation({
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


    return { mutateCategory }
}

