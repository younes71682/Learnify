import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-center my-20'>
        <div className='flex flex-col items-center w-[92%] text-center text-4xl text-[#484848] font-bold gap-12  [@media(max-width:500px)]:text-3xl'>
            <h1>خوب <span className='text-[#008000]'>بخوانیم</span> | خوب یاد <span className='text-[#008000]'>بگیریم</span> | خوب به <span className='text-[#008000]'>کار ببندیم</span></h1>
            <p className='text-xl [@media(max-width:500px)]:text-base'>در وبلاگ لرنیفای با هم افزایی یکدیگر اطلاعات خود را افزایش می دهیم .</p>
        </div>
        </div>
    )
}

export default Header
