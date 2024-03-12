import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

const Logout = () => {

    const Token = useSelector((state: any) => state.TOKEN.Token)

    const { mutate: mutate_logout } = useMutation({
        mutationFn: () => {
            let token = localStorage.getItem('token_modares')
            return axios.post("https://learnify.v1r.ir/api/auth/logout", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Token}`,
                }
            })
        },

        onSuccess: (res) => {
            console.log(res)
        }
    })


    return { mutate_logout }
}

export default Logout
