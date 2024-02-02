import React from 'react'

const Header_id = (props) => {
    const { title, description } = props
    const shortText = description?.substring(0, 100); // نمایش اولین 100 کاراکتر
    const firstHeadingIndex = description?.indexOf("<h1>"); // یافتن اولین تگ <h1>

    // console.log('ti',title)
    return (
        <div className='flex justify-center items-end bg-[#D58787] h-[300px]'>
            <div className='flex flex-col w-[45%] mb-[51px] pr-16 text-white'>
                <h2 className=' text-2xl font-bold'>{title}</h2>
                <p>
                    {firstHeadingIndex}
                </p>
            </div>
        </div>
    )
}

export default Header_id
