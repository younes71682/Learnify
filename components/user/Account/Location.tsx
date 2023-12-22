import React from 'react'
import Select_province from '../select/Select_province'
import Select_city from '../select/Select_city'
import Image from 'next/image'


const Location = () => {

    return (
        <div className='flex flex-col w-[28%] pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/location.svg' alt='icon' width={24} height={24} />
                <h2>محل سکونت</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <Select_province />
                <Select_city />
            </div>
        </div>
    )
}

export default Location