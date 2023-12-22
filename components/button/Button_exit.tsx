import Image from 'next/image'
import React from 'react'

const Button_exit = () => {
    return (
        <div className='flex items-center gap-4 '>
            <div className='border-solid border-2 border-[#FBFBFB] rounded-full h-10' />
            <div className='flex items-center gap-2'>
                <div><Image src='/icon/user/account/sidebar/exit.svg' alt='exit' width={24} height={24} className="green-icon" /></div>
                <div className='text-[#C93636]'>خروج از حساب کاربری</div>
            </div>
        </div>
    )
}

export default Button_exit
