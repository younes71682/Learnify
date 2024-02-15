import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'


const Login = () => {

    const [loginRole, setLoginRole] = useState('student')

    const { mutate: mutate_phone_number } = useMutation({
        mutationFn: (data) => {
            return axios.post("https://learnify.v1r.ir/api/auth/verification-code-request", data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        }

    })

    const { mutate: mutate_verification_code, isPending:pending_verification_code , isSuccess:success_verification_code  } = useMutation({
        mutationFn: (data) => {
            return axios.post(`https://learnify.v1r.ir/api/auth/login/${loginRole}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }

            })

        },

        onSuccess: (res) => {
            console.log('token', res)

            localStorage.setItem('token', res.data.token)

        },
    })


    return { mutate_phone_number, mutate_verification_code, setLoginRole,pending_verification_code,success_verification_code }
}

export default Login
