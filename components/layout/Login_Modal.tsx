import * as React from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Login from '@/components/api/Login';
import { BeatLoader } from 'react-spinners';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

type FormeValue = {
    phone_number: string,
    verification_code: string
}

type Props = {
    isLoginModalOpen: boolean
    setLoginModalOpen: boolean
}


const Login_Modal = (props: Props) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { isLoginModalOpen, setLoginModalOpen } = props

    const [checkPhoneNumber, setCheckPhoneNumber] = useState(false)

    const [seconds, setSeconds] = useState(0);
    const [loginRole, setLoginRole] = useState<string>('student')

    const { mutate_phone_number, mutate_verification_code, pending_verification_code, success_verification_code } = Login(loginRole)

    const handleCloseModule = () => {
        setLoginModalOpen(false)
        setCheckPhoneNumber(false)
    }

    const handleCheckPhoneNumber = (data: any) => {
        setLoginModalOpen(false)
        setCheckPhoneNumber(true)
        setSeconds(5)
        //Fetch phone_number
        mutate_phone_number(data)
    }


    useEffect(() => {
        //@ts-ignore

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));

        }, 1000);

        return () => clearInterval(interval);
    }, []);


    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return (`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`)
    };

    const handleChangePhoneNumber = () => {
        setLoginModalOpen(true)
        setCheckPhoneNumber(false)
    }

    
    const form = useForm<FormeValue>()
    
    const { register, formState, handleSubmit, control, watch } = form
    const { errors } = formState
    
    const inputvaluephonenumber = watch('phone_number')
    
    const Token = useSelector((state: any) => state.TOKEN.Token)
    //fetch verification_code
    const handleLogin = (data: any) => {
        mutate_verification_code({ ...data })
    }
    const handleResendCode = () => {
        setSeconds(10)
        handleLogin
    }
    
    const handleLoginRole = (event: React.ChangeEvent<unknown>, value: boolean) => {
        if (value === true) {
            setLoginRole('mentor')
        } else {
            setLoginRole('student')
        }
    }


    return (
        <div>
            {
                isLoginModalOpen && (
                    < div onClick={handleCloseModule} className="fixed inset-0 flex z-40 items-center justify-center bg-gray-800 bg-opacity-50">
                        <form onClick={(e) => { e.stopPropagation() }}
                            onSubmit={handleSubmit(handleCheckPhoneNumber)}
                            className="bg-white flex items-center  justify-center w-[450px] h-[333px]  rounded-[15px] shadow-lg mx-12 transform animate transition-colors [@media(max-width:400px)]:mx-6" noValidate>
                            <div className='flex flex-col items-center w-[80%]'>

                                <div className='flex flex-col gap-3 items-center'>
                                    <p className="text-lg font-bold text-center">به لرنیفای خوش اومدی!</p>
                                    <p className="text-sm font-normal text-center ">به لرنیفای خوش اومدی!
                                        برای عضویت شماره موبایل خودت را وارد کن</p>
                                </div>

                                <div className='flex flex-col items-center justify-between w-[179px] mt-4 '>

                                    <div className='flex flex-col items-center justify-between w-full h-[65px]'>
                                        <input type="text" maxLength={11} {...register("phone_number", { pattern: { value: /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g, message: "فرمت کد صحیح نمی باشد" }, required: true, })} className="rounded-lg flex w-full h-[48px] text-sm text-center border focus:ring-[#008000] focus:border-[#008000] [@media(max-width:500px)]:h-[44px]" placeholder="شماره موبایل خود را وارد کنید" />
                                        <p className='text-xs text-red-500 font-normal'>{errors.phone_number?.message}</p>
                                    </div>

                                    <div className='flex flex-col w-full justify-between gap-'>

                                        <button className='flex justify-center items-center cursor-pointer outline-none bg-[#008000] text-white rounded-lg h-[42px] w-full '>
                                            ادامه
                                        </button>

                                        <div className='flex items-center justify-between w-full '>
                                            <p className='font-thin text-sm'>ورود/ثبت نام مدرس</p>
                                            <Checkbox {...label} onChange={handleLoginRole} color="success" size='small' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                )
            }

            {
                checkPhoneNumber && (
                    < div onClick={handleCloseModule} className="fixed inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                        <form onSubmit={handleSubmit(handleLogin)} onClick={(e) => { e.stopPropagation() }} className="bg-white flex flex-col items-center w-[30%] h-[333px] justify-center rounded-[15px] shadow-lg" noValidate>

                            <div className='flex flex-col items-center w-[179px] h-[230px]'>

                                <div className='text-center w-full '>
                                    <p className="text-sm text-[#545454] ">
                                        کد ارسال شده به شماره موبایل <span className="mx-1">{inputvaluephonenumber}</span>را وارد کنید
                                    </p>
                                </div>

                                <div className='flex flex-col items-center justify-between w-[179px]  mt-4   '>

                                    <div className='flex flex-col items-center w-full h-[65px]'>
                                        <input maxLength={6} {...register("verification_code", { pattern: { value: /^[0-9]*$/i, message: "فرمت کد صحیح نمی باشد" }, required: true, })} className="rounded-lg flex w-full h-[48px] text-sm text-center border focus:ring-[#008000] focus:border-[#008000] [@media(max-width:500px)]:h-[44px]" type="text" />
                                        <p className='text-xs text-red-500 font-normal'>{errors.verification_code?.message}</p>
                                        {errors.verification_code?.type === 'required' && (<p className='text-xs text-red-500 font-normal'>کد ارسال شده را وارد کنید</p>)}
                                    </div>

                                    <button onChange={Token && handleCloseModule()} className='flex justify-center items-center cursor-pointer outline-none bg-[#008000] text-white rounded-lg h-[44px] w-[179px]'>
                                        تایید
                                    </button>

                                </div>

                                <p onClick={handleChangePhoneNumber} className="text-[#484848] text-sm mt-3 cursor-pointer w-fit mx-auto">تعویض شماره</p>

                                {seconds != 0 ? (null) : (<div onClick={handleResendCode} className="text-[#484848] text-sm mt-2 cursor-pointer w-fit mx-auto">دریافت مجدد کد</div>)}

                                <div>{seconds != 0 ? (formatTime(seconds)) : (null)} </div>

                            </div>

                        </form>
                    </div>
                )
            }

        </div >
    )
}

export default Login_Modal
