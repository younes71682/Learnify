import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'


const Login = () => {

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

//@ts-ignore
    const { mutate: mutate_verification_code,isLoading } = useMutation({
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
        
        // onError:(res)=>{
        //     localStorage.setItem('error', res.data.message)

        // }
 

    })


    return { mutate_phone_number, mutate_verification_code, setLoginRole,isLoading}
}

export default Login
