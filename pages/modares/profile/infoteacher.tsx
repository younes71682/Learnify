import Button_info_operation from '@/components/button/Button_info_operation'
import Financial from '@/components/modares/Account/info_teacher/Financial'
import Resume from '@/components/modares/Account/info_teacher/Resume'
import Sidebar from '@/components/modares/Account/Sidebar'
import Education from '@/components/user/Account/Education'
import Location from '@/components/user/Account/Location'
import Layout_User from '@/components/user/layout_user/Layout_User'
import Select_gender from '@/components/user/select/Select_gender'
import Image from 'next/image'
import React from 'react'
import { useFormState } from 'react-dom'
import { FormProvider, useForm } from 'react-hook-form'


type FormValue = {

    username: string,
    phonenumber: string,
    datebirth: string,
    university: string,
    field_of_study: string,
    educational_stage: string,
    numbercard: string,
    numberfinancial: string,

}

const Infoteacher = () => {


    const methods = useForm<FormValue>({
        defaultValues: {
            username: "",
            phonenumber: "",
            datebirth: "",
            university: "",
            field_of_study: "",
            educational_stage: "",
            numbercard: "",
            numberfinancial: "",

        }
    })

    const { register, handleSubmit, formState } = methods

    const { errors } = formState

    const onSubmit = (data: FormValue) => {
        console.log(data)
    }

    return (
        <Layout_User showFooter={false}>
            <div className='flex justify-center gap-6 h-[150vh] pt-24'>
                <Sidebar />

                <div className='flex flex-col gap-6 w-[64%] h-[112vh]'>
                    <FormProvider {...methods}>

                        <div className='flex items-center gap-6 '>
                            <div className='flex items-center w-[69%] h-[224px]'>
                                <div className='flex flex-col items-start gap-6 h-full pr-4 pt-4  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '>
                                    <div className='flex items-center gap-1 text-lg'>
                                        <Image src='/icon/user/account/info_user/user.svg' alt='icon' width={24} height={24} />
                                        <h2>اطلاعات کاربری</h2>
                                    </div>
                                    <form className='flex flex-wrap gap-4 w-[90%]' noValidate>
                                        <div className='flex flex-col'>
                                            <input {...register("username", { required: { value: true, message: "نام خود را وارد کنید" } })} placeholder='* نام و نام خانوادگی' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2  outline-[#008000]  ' required />
                                            <p className='text-red-500 font-normal text-xs'>{errors.username?.message}</p>
                                        </div>
                                        <div className='flex flex-col'>
                                            <input type='tel' {...register("phonenumber", {})} placeholder='*شماره موبایل' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000] placeholder:text-right ' required />
                                            <p className='text-red-500 font-normal text-xs'>{errors.phonenumber?.message}</p>
                                        </div>
                                        <Select_gender />
                                        <div className='flex flex-col'>
                                            <input {...register("datebirth", {})} placeholder='تاریخ تولد' className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[210px] h-[48px] pr-2 mb-2 outline-[#008000]  ' required />
                                            <p className='text-red-500 font-normal text-xs'>{errors.datebirth?.message}</p>
                                        </div>
                                        {/* <DevTool control={control} /> */}
                                    </form>
                                </div>
                            </div>

                            <div className="flex w-[28%] h-[224px]">
                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-full cursor-pointer hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center ">
                                        <Image src="/icon/modares/account/apload_photo.svg" alt='apload' width={70} height={44} className='mb-3' />
                                        <p className="text-[#1F2937] leading-6 tracking-wider mb-1"><span className="text-[#3B82F6] font-semibold ml-1">browse</span>اپلود تصویر خود</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Maximum size: 5MB</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>

                        </div>

                        <div className='flex items-center gap-6 h-[224px]'>
                            <Location />
                            <Education />
                        </div>

                        <div className='flex items-center gap-6 h-[224px]'>
                            <Financial />
                            <Resume />
                        </div>

                        <Button_info_operation handleSubmit={handleSubmit} onSubmit={onSubmit} />
                    </FormProvider>

                </div>
            </div>
        </Layout_User>
    )
}

export default Infoteacher


