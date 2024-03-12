import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TOKEN } from '../Redux/TokenSlise'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (loginRole: string, ) => {

    const dispatch = useDispatch()

    const { mutate: mutate_phone_number } = useMutation({
        mutationFn: (data) => {
            return axios.post("https://learnify.v1r.ir/api/auth/verification-code-request", data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        },
        onSuccess: () => {
            toast.success("کد تایید به شماره موبایل وارد شده ارسال شد", {
                position: "bottom-left"
            });

        }

    })

    const { mutate: mutate_verification_code, isPending: pending_verification_code, isSuccess: success_verification_code } = useMutation({
        mutationFn: async (data) => {
            return await axios.post(`https://learnify.v1r.ir/api/auth/login/${loginRole}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

        },

        onSuccess: (res) => {
            console.log('token', res)
            dispatch(ADD_TOKEN(res.data.token))
            if (res.data.token) {
                toast.success("خوش آمدید!", {
                    position: "bottom-left"
                });
                setLoginModalOpen(false)
            } else {
                toast.error("کد وارد شده اشتباه است", {
                    position: "top-left"
                });
            }
        },
    })


    return { mutate_phone_number, mutate_verification_code, pending_verification_code, success_verification_code}
}

export default Login
