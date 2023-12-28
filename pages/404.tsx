import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
    return (
        <div className='w-[1240px]  h-[700px] flex justify-between bg-[#00F5192B] mx-auto mt-20'>
            <div className=' w-[15%]'>
                <img src="/images/404.png" className='mt-20 mr-8' width={120} alt="" />
            </div>
            <div className=''>
                <img className='mt-16' src="/images/404S.png" alt="" />
            </div>
            <div dir='ltr' className=' pl-8  w-[35%]  '>
                <p className='text-6xl mt-40  font-bold'>Ooops...</p>
                <p className='text-[56px] font-light'>Page Not Found</p>
                <p className='text-xl text-[#2D4642]'>Sorry. the content you’re looking for doesn’t exist.
                    Either it was removed, or you mistyped the link. </p>
                <Link href={'/'}>
                    <button className='bg-[#24C250D9] w-[200px]   text-[20px] font-bold flex justify-center py-2 items-center mt-20'>Go Back</button></Link>
            </div>
        </div>
    )
}
export default PageNotFound