//@ts-nocheck
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FadeLoader } from 'react-spinners';

export const Step1 = () => {


    const form = useForm()
    const { register, handleSubmit, formState } = form
    const { errors } = formState
    const { mutate_UploadPhotoCourse, pending_UploadPhotoCourse, success_UploadPhotoCourse, error_UploadPhotoCourse, mutate_UploadTeaserCourse, pending_UploadTeaserCourse, success_UploadTeaserCourse, error_UploadTeaserCourse } = Teaching_Fetch()

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
            <div className='flex justify-between w-[580px] '>
                <div className="flex flex-col gap-1 w-[262px] h-[235px]">
                    <label htmlFor="dropzone-file-teasser" className="flex flex-col items-center justify-center rounded-[15px] border-dashed border-2 border-[#3B82F6] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-[213px] cursor-pointer hover:bg-gray-100">
                        {pending_UploadTeaserCourse ? <div><FadeLoader color="#36d7b7" /></div> :
                            <>
                                <div className="flex flex-col items-center justify-center ">
                                    <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                                    <p className="text-[#1F2937] leading-6 tracking-wider"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>بارگذاری تیزر دوره</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                                </div>
                                <input {...register('teaser_id', { required: true })} multiple onChange={handleSubmitTisear} id='dropzone-file-teasser' type="file" className="hidden" />
                            </>
                        }
                        {errors.image?.type === "teaser_id" && <p className='text-red-500 font-normal text-xs'>تیزر دوره را مشخص کنید</p>}
                    </label>
                    {success_UploadTeaserCourse && <p className='text-green-500 font-normal text-xs'>آپلود تیزر با موفقیت انجام شد.</p>}
                    {error_UploadTeaserCourse && <p className='text-red-500 font-normal text-xs'>آپلود تیزر با مشکل مواجه شد،مجددا آپلود کنید.</p>}
                </div>

                <div className="flex flex-col gap-1 w-[262px] h-[235px]">
                    <label htmlFor="dropzone-file-image" className="flex flex-col items-center justify-center rounded-[15px] border-dashed border-2 border-[#3B82F6] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-[213px] cursor-pointer hover:bg-gray-100">
                        {pending_UploadPhotoCourse ? <div><FadeLoader color="#36d7b7" /></div> :
                            <>
                                <div className="flex flex-col items-center justify-center ">
                                    <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                                    <p className="text-[#1F2937] leading-6 tracking-wider"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>بارگذاری عکس دوره</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                                </div>
                                <input {...register('image_id', { required: true })} multiple onChange={handleSubmitImage} id='dropzone-file-image' type="file" className="hidden" />
                            </>
                        }
                        {errors.image_id?.type === "required" && <p className='text-red-500 font-normal text-xs'>عکس دوره مورد نظر را انتخاب کنید</p>}
                    </label>
                    {success_UploadPhotoCourse && <p className='text-green-500 font-normal text-xs'>آپلود عکس با موفقیت انجام شد.</p>}
                    {error_UploadPhotoCourse && <p className='text-red-500 font-normal text-xs'>آپلود عکس با مشکل مواجه شد،مجددا آپلود کنید.</p>}
                </div>
            </div>
        </div>
    );
};

export default Step1;


