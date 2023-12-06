import { StaticImageData } from 'next/image'
import React from 'react'

const CourseComponent = (props: any) => {
    const { name, title, detail, seasons, duration, price, image } = props
    console.log("props", props)

    return (
        <div >
            <div className='w-[274px] box-border bg-white shadow-[0_0px_20px_rgb(0,0,0,0.1)] rounded-[10px] pt-3 pl-3 pr-3 h-[469px] flex flex-col '>
                {image}
                <div className='text-[#212121] mt-4 font-bold'>{title}</div>
                <div className='text-xs mt-2 mb-4 '>{name}</div>
                <div className='text-[#4F4F4F] text-sm font-normal leading-6'>{detail}</div>
                <div className=' mt-auto mb-6 flex justify-between items-center'>
                    <div className='flex gap-[6px]'>
                        <div className='h-[24px] w-[42px] bg-[#F6FFF6] px-1 py-[5px] border border-[#158212] rounded flex justify-center items-center font-normal text-xs text-[#158212]'>
                            {seasons} فصل
                        </div>
                        <div className='h-[24px] w-[55px] px-1 py-[5px] border border-[#DEB509] rounded flex justify-center bg-[#FFFDED] font-normal text-xs text-[#DEB509]'>
                            {duration} ساعت
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='font-bold'>
                            {price}
                        </div>
                        <div className='text-[#4F4F4F] mr-1 text-[10px]'>
                            <p className='relative top-[2px]'>تو</p>
                            <p className='relative bottom-[2px]'>مان</p>
                        </div>
                    </div>
                </div>
                <div className='border-t'>
                    <div className=' mt-0 h-[56px] flex gap-1 justify-center items-center hover:scale-[1.15] hover:text-[#4e914e] transition duration-150 ease-in-out hover:cursor-pointer text-[#484848] text-sm font-bold'>
                        <p>مشاهده اطلاعات دوره</p>
                        <img src="/icon/user/home_page/course/leftArrow.svg" alt="left arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseComponent