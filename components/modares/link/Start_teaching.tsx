import Link from 'next/link'
import React from 'react'

const Start_teaching = () => {
    return (
        <div className='flex justify-center items-center h-[100px] mb-16'>
            <Link className=' flex justify-center items-center rounded-[10px] bg-[#008000] w-[28%] h-[65px] max-sm:w-[150px] max-sm:h-[45px]' href="modares/teaching">
                <p className='text-2xl font-semibold leading-4 text-[#FFF] max-sm:text-lg'>شروع تدریس</p>
            </Link>
        </div>
    )
}

export default Start_teaching
