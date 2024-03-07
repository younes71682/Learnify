import React from 'react'

type text = {
    title: string
    paragraffirst: []
}

const Header_id = (props: text) => {
    const { title, paragraffirst } = props

    return (
        <div className='flex justify-center bg-[#D58787] h-[300px]'>
            <div className='flex items-center gap-14 w-[70%]'>

                <div className='flex items-center w-[300px] h-[290px] [@media(max-width:720px)]:hidden'>
                    <img src='/images/user/blog/f1.png' alt='F1' className='h-full w-full' />
                </div>

                <div className='flex flex-col items-start justify-center w-[65%] h-full flex-1 text-white bg-green-400'>
                    <h2 className=' text-2xl font-bold'>{title}</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                </div>
            </div>

        </div>
    )
}

export default Header_id
