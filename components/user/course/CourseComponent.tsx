import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

const CourseComponent = (props: any) => {
    const { name, title, description, seasons, duration, price, image, id, } = props

    const img = image?.media?.[0].original_url

    return (
        <div className='flex flex-col items-center justify-between bg-white shadow-[0_0px_20px_rgb(0,0,0,0.1)] rounded-[10px] w-full h-full'>

            <div className='flex justify-center w-[88%] h-[144px]  mt-3'>
                
                <img className='w-full bg-contain rounded-[15px]' src={img} alt='Medium_Shot_Woman_Presenting' />
            </div>

            <div className='flex flex-col justify-between w-full h-[300px]'>

                <div className='flex flex-col items-center gap-4'>
                    <div className='flex flex-col gap-1 w-[88%]'>
                        <h3 className='text-[#212121] font-bold'>{title}</h3>

                        <div className='flex items-cente gap-1'>
                            <Image src="/icon/user/account/info_user/user.svg" alt='User' width={16} height={16} />
                            <p className='text-xs'>{name}</p>
                        </div>
                    </div>

                    <div className='w-[88%] flex'>
                        <p className=' text-[#4F4F4F] text-sm font-normal leading-6 w-full'>{description}</p>
                    </div>
                </div>

                <div className='flex flex-col justify-between h-[95px] w-full '>

                    <div className='flex flex-wrap justify-around items-center'>

                        <div className='flex items-center justify-between w-[38%]'>
                            <div className='h-[24px] w-[42px] bg-[#F6FFF6] border border-[#158212] rounded-[4px] flex justify-center items-center font-normal text-xs text-[#158212]'>
                                <p>{seasons}</p>
                                <p>فصل</p>
                            </div>
                            <div className=' h-[24px] w-[55px] border border-[#DEB509] rounded-[4px] flex justify-center items-center bg-[#FFFDED] font-normal text-xs text-[#DEB509]'>
                                <p className='font-Byekan'>{duration}</p>
                                <p className='font-Byekan'>ساعت</p>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <p className='font-bold text-xl font-Byekan'>{price}</p>
                            <div className='flex flex-col text-[#4F4F4F] pr-1 text-[10px]'>
                                <p className=''>تو</p>
                                <p className=''>مان</p>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center items-center h-[56px] border-t group w-full  '>
                        <div className='flex items-center justify-center gap-1 w-[80%]  group-hover:scale-[1.15] group-hover:text-[#4e914e] transition duration-150 ease-in-out cursor-pointer text-[#484848] text-sm font-bold'>
                        <Link href={{pathname:`/user/courses/${id}`, query:{title} }}>مشاهده اطلاعات دوره</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#484848" className='group-hover:stroke-[#4e914e]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M19.9999 12H5.66992" stroke="#484848" strokeWidth="1.5" strokeMiterlimit="10" className='group-hover:stroke-[#4e914e]' strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CourseComponent