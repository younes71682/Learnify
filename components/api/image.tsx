import React from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const image = () => {

    const { mutate:mutate_Uploadimg } = useMutation({
        mutationFn: (data) => {
            let token = localStorage.getItem('token')
            return axios.post('https://learnify.v1r.ir/api/media/image', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
        },
        onSuccess: (res) => {
            console.log('image', res.data)

        },
        onError:(error)=>{
            console.log('errorimage',error)
        }

    })

    return {mutate_Uploadimg}
}

export default image
