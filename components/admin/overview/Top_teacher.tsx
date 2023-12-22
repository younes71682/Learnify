import { Avatar } from '@mui/material'
import React from 'react'

const Top_teacher = () => {

    const tteacher = [
        { id: 2, name: "امیرحسام میرصادقی", number: "325", total: "456,580", profile: "/images/admin/overview/profile/prof.png" },
        { id: 1, name: "امیرحسام میرصادقی", number: "78", total: "456,203", profile: "/images/admin/overview/profile/prof.png" },
        { id: 3, name: "امیرحسام میرصادقی", number: "85", total: "1,203", profile: "/images/admin/overview/profile/prof.png" },
        { id: 4, name: "امیرحسام میرصادقی", number: "96", total: "1,456,400", profile: "/images/admin/overview/profile/prof.png" },
        { id: 5, name: "امیرحسام میرصادقی", number: "300", total: "1,203", profile: "/images/admin/overview/profile/prof.png" },
        { id: 6, name: "امیرحسام میرصادقی", number: "187", total: "1,000,203", profile: "/images/admin/overview/profile/prof.png" },
    ]

    return (
        <div className='flex flex-col justify-around py-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[50%] h-[50vh]'>
            <div className='font-normal flex justify-center'><p>6  استاد برتر</p></div>
            <div className='flex justify-around items-center text-[#030229] text-xs'>
                <p className='flex justify-center w-[30%]'>نام دوره</p>
                <p className='flex justify-center w-[20%]'>تعداد فروش</p>
                <p className='flex justify-center w-[20%]'>مجموع فروش</p>
            </div>
            {tteacher.map((item) => {
                return (
                    <ul className='flex items-center justify-around'>
                        <li className='flex justify-around items-center w-[32%]'><Avatar src={item.profile} alt='profile' className='flex rounded-full w-[24px] h-[24px] object-cover' /><p className='text-[#484848] text-sm'>{item.name}</p></li>
                        <li className='flex justify-center w-[20%] text-[#060] text-xs font-bold'>{item.number}</li>
                        <li className='flex justify-end w-[20%] pl-5  text-[#030229] text-xs font-normal'><p>{item.total}</p></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Top_teacher
