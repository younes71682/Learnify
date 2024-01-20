import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const ImageUploader = () => {

    const { mutate: mutate_Uploadimg } = useMutation({
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
            console.log('image', res.data.id)
            localStorage.setItem('mentorProfilePectureId', res.data.id)
        },
        onError: (error) => {
            console.log('errorimage', error)
        }

    })

    return { mutate_Uploadimg }
}

export default ImageUploader

