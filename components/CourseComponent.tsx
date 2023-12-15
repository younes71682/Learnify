import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseComponent = (props: any) => {
    const { name, title, detail, seasons, duration, price, image } = props

    return (
        <div>
            <div className='w-[274px] box-border bg-white shadow-[0_0px_20px_rgb(0,0,0,0.1)] rounded-[10px] pt-3 px-4 h-[469px] flex flex-col '>
                <div className='w-[242px] h-[144px] rounded-[15px]'>{image}</div>
                <div className='text-[#212121] mt-4 font-bold'>{title}</div>
                <div className='flex items-cente my-3 '>
                    <Image src="/icon/user/account/info_user/user.svg" alt='User' width={16} height={16} />
                    <p className='text-xs'>{name}</p>
                </div>
                <div className='text-[#4F4F4F] text-sm font-normal leading-6'>{detail}</div>

                <div className=' mt-auto mb-6 flex justify-between items-center'>

                    <div className='flex gap-[6px]'>
                        <div className='h-[24px] w-[42px] bg-[#F6FFF6] px-1 py-[5px] border border-[#158212] rounded flex justify-around  items-center font-normal text-xs text-[#158212]'>
                            <p>{seasons}</p>
                            <p>فصل</p>
                        </div>
                        <div className=' h-[24px] w-[55px] px-1 py-[5px] border border-[#DEB509] rounded flex justify-around bg-[#FFFDED] font-normal text-xs text-[#DEB509]'>
                            <p>{duration}</p>
                            <p>ساعت</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <p className='font-bold'>{price}</p>
                        <div className='text-[#4F4F4F] mr-1 text-[10px]'>
                            <p className='relative top-[2px]'>تو</p>
                            <p className='relative bottom-[2px]'>مان</p>
                        </div>
                    </div>

                </div>
                <div className='border-t group  '>
                    <div className='mt-0 h-[56px] flex gap-1 justify-center items-center hover:scale-[1.15] hover:text-[#4e914e] transition duration-150 ease-in-out hover:cursor-pointer text-[#484848] text-sm font-bold'>
                        <Link href="/">مشاهده اطلاعات دوره</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#000" className='group-hover:stroke-[#4e914e]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.9999 12H5.66992" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" className='group-hover:stroke-[#4e914e]' strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseComponent