import Link from 'next/link'
import React from 'react'

const Start_teaching = () => {
    return (
        <div className='flex justify-center mt-[140px]'>
            <Link className=' flex justify-center items-center rounded-[10px] bg-[#008000] w-[32%] h-[70px]' href="/">
                     <p className='text-2xl font-semibold leading-4 text-[#FFF]'>شروع تدریس</p>
             </Link>
        </div>
    )
}

export default Start_teaching
