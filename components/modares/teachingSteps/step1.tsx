//@ts-nocheck
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

export const Step1 = () => {


    const form = useForm()
    const { register, handleSubmit, formState } = form
    const { errors } = formState
    const { mutate_UploadTeaserCourse, mutate_UploadPhotoCourse, teaserPending } = Teaching_Fetch()

    const handleSubmitTisear = (event: any) => {
        const fileTeasser = event.target.files[0]
        console.log('fileTeasser', fileTeasser)
        mutate_UploadTeaserCourse({ video: fileTeasser })
    }


    const handleSubmitImage = (event: any) => {
        const fileIMage = event.target.files[0]
        console.log('fileIMage', fileIMage)
        mutate_UploadPhotoCourse({ image: fileIMage })
    }


    return (

        <div className='flex justify-center h-[295px]'>
            <div className='flex justify-between w-[580px]'>
                {teaserPending && (<div>loading ...</div>)}
                <div className="flex w-[262px] h-[213px]">
                    <label htmlFor="dropzone-file-teasser" className="flex flex-col items-center justify-center rounded-[15px] border-dashed border-2 border-[#3B82F6] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-full cursor-pointer hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center ">
                            <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                            <p className="text-[#1F2937] leading-6 tracking-wider"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>بارگذاری تیزر دوره</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                        </div>
                        <input multiple onChange={handleSubmitTisear} id='dropzone-file-teasser' type="file" className="hidden" />
                        {errors.image?.type === "required" && <p className='text-red-500 font-normal text-xs'>تیزر دوره مورد نظر را انتخاب کنید</p>}
                    </label>
                </div>

                <div className="flex w-[262px] h-[213px]">
                    <label htmlFor="dropzone-file-image" className="flex flex-col items-center justify-center rounded-[15px] border-dashed border-2 border-[#3B82F6] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-full cursor-pointer hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center ">
                            <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                            <p className="text-[#1F2937] leading-6 tracking-wider"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>بارگذاری عکس دوره</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                        </div>
                        <input multiple onChange={handleSubmitImage} id='dropzone-file-image' type="file" className="hidden" />
                        {errors.image?.type === "required" && <p className='text-red-500 font-normal text-xs'>عکس دوره مورد نظر را انتخاب کنید</p>}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Step1;


