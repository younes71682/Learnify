import React from 'react'


export const Step1 = () => {



    return (
        <div className='flex justify-center'>
            <form action='' className='border-[2px] mx-[20px] h-[213px] bg-[#EFF6FF] w-[262px] flex justify-center items-center border-dashed rounded-lg border-[#3B82F6]' onClick={() => document.querySelector('.uploadImage').click()}>
                <input type="file" className='uploadImage hidden' />
            </form>
            <form action='' className='border-[2px] mx-[20px] h-[213px]  bg-[#EFF6FF] w-[262px] flex justify-center items-center border-dashed rounded-lg border-[#3B82F6]' onClick={() => document.querySelector('.uploadImage').click()}>
                <input type="file" className='uploadImage hidden' />
            </form>
        </div>
    )
}

export default Step1