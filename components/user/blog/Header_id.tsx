import React from 'react'

type text = {
    title: string
    paragraffirst: []
}

const Header_id = (props: text) => {
    const { title, paragraffirst } = props
    console.log(paragraffirst)

    return (
        <div className='flex justify-center bg-[#D58787] h-[300px]'>
            <div className='flex justify-between items-center w-[70%]'>
                <div className='flex w-[300px] h-[290px]'>
                    <img src='/images/user/blog/f1.png' alt='F1' />
                </div>

                <div className='flex flex-col items-start w-[65%] text-white'>
                    <h2 className=' text-2xl font-bold'>{title}</h2>
                    <p>
                        {paragraffirst}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header_id
