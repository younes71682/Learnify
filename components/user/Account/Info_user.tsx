import Image from 'next/image'
import React from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
const Info_user = () => {
    return (
        <div>
            <div className='flex flex-col'>
                <div className='flex items-center'>
                    <Image src="/icon/user/account/global/user.svg" alt='User' width={24} height={24} />
                    <h2>اطلاعات کاربری</h2>
                </div>
                <div className='flex flex-wrap'>
<input type='' placeholder='نام و نام خانوادگی*'/>
<input type='' placeholder='شماره موبایل*'/>
<input type='' placeholder='*'/>
<input type='' placeholder='*'/>
<input type='' placeholder='*'/>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Info_user
