import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'


const Login_Modares = () => {

    const [loginRole, setLoginRole] = useState('student')

    const { mutate: mutate_phone_number } = useMutation({
        mutationFn: (data) => {
            console.log('1', data)
            return axios.post("https://learnify.v1r.ir/api/auth/verification-code-request", data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }

    })


    const { mutate: mutate_verification_code, } = useMutation({
        mutationFn: (data) => {
            console.log('2', loginRole)
            return axios.post(`https://learnify.v1r.ir/api/auth/login/${loginRole}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }

            })
        },
        onSuccess: (res) => {
            console.log('token', res.data.token)
            localStorage.setItem('token_mentor', res.data.token)

        }

    })


    return { mutate_phone_number, mutate_verification_code,setLoginRole }
}

export default Login_Modares
