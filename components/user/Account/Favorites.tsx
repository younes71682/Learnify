import React, { useState } from 'react'

const Favorites = () => {

    const favorites = [
        { id: 1, title: "توسعه وب", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 2, title: "توسعه وب", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 3, title: "امنیت و شبکه", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 4, title: "طراحی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 5, title: "فیلم و انیمیشن", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 6, title: "نرم افزارهای کاربردی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 7, title: "نرم افزارهای مهندسی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
        { id: 8, title: "برنامه نویسی", icon: <img src='/icon/user/account/info_user/add.svg' /> },
    ]

    const [add, setAdd] = useState(null)

    const handleAdd = (id: any) => {
        setAdd(add === id ? null : id)
    }


    return (
        <div className='flex flex-col gap-6 pr-4 pt-5 pb-9 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>

            <div className='flex items-center gap-1 text-lg'>
                <img src='/icon/user/account/info_user/like.svg' alt='Education' />
                <h2>علاقه‌مندی‌ها</h2>
            </div>

            <div className='flex flex-wrap gap-6 w-[90%]'>
                {favorites.map((item, i) => {
                    return (
                        <div onClick={() => handleAdd(item.id)} >
                            {add === item.id ?
                                (<div className='flex items-center justify-between bg-[#008000] text-[#fbfbfb] border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] px-2'>
                                    <div>{item.title}</div>
                                    <div className=''><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 52 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1743 4.14173L22.514 39.977L0 21.2131L4.24793 16.1156L21.5582 30.5386L45.9971 0L51.1743 4.14173Z" fill="white" />
                                    </svg></div>
                                </div>)

                                : (<div className='flex items-center justify-between border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] pr-2'>
                                    <div>{item.title}</div>
                                    <div>{item.icon}</div>
                                </div>)}

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites
