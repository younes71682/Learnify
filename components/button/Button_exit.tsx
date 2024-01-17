import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Logout from '@/components/api//modares/Logout'

const Button_exit = () => {

    // const { mutate_logout } = Logout()
    const rout = useRouter()

    const handlerBack = () => {
        rout.replace("/modares/login")
        // localStorage.clear()
        // mutate_logout()
    }

    return (
        <div className='flex items-center gap-4 '>
            <div className='border-solid border-2 border-[#FBFBFB] rounded-full h-10' />
            <div className='flex items-center gap-2 w-full cursor-pointer'>
                <div><Image src='/icon/user/account/sidebar/exit.svg' alt='exit' width={24} height={24} className="green-icon" /></div>
                <div onClick={handlerBack} className='text-[#C93636]'>خروج از حساب کاربری</div>
            </div>
        </div>
    )
}

export default Button_exit
