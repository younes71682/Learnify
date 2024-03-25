import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TOKEN } from '../Redux/TokenSlise'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (loginRole: string,) => {

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
            toast.success(
                <div className='text-right'>
                    <p className='text-[#484848] font-YekanBakhBold'>موفق!</p>
                    <p className='text-[#484848]'>کد تایید به شماره موبایل وارد شده ارسال گردید</p>
                </div>, {
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
                toast.success(<p className='text-[#484848] text-right'>خوش آمدید!</p>, {
                    position: "bottom-left"
                });

            } else {
                toast.error(<p className='text-[#484848] text-right'>کد وارد شده اشتباه است</p>, {
                    position: "top-left"
                });
            }
        },
    })


    return { mutate_phone_number, mutate_verification_code, pending_verification_code, success_verification_code }
}

export default Login
