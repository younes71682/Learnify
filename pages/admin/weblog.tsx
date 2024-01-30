import React, { useState } from 'react'
import Link from 'next/link'
import Layout_admin from '@/components/layout/layout_admin/Layout_admin'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Blog_Fetch from '@/components/api/admin/Blog_Fetch'

type FormValue = {
    title: string
    description: string
    image_id: string
}

const Weblog = () => {

    const { mutate_add_image_blog, mutate_add_blog, data_show_listblog } = Blog_Fetch()

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fileImage: File | undefined = e.target.files?.[0];
        mutate_add_image_blog({ image: fileImage });

    };

    const form = useForm<FormValue>()

    const { register, handleSubmit, formState, watch } = form
    const { errors } = formState

    const addBlog = (data: void) => {
        console.log(data)
        data.image_id = localStorage.getItem("image_id_blog")
        mutate_add_blog(data)
    }

    console.log(data_show_listblog?.data.blogs)
    const listBlog = data_show_listblog?.data.blogs.data

    // const listBlog = [
    //     { id: 1, title: "نقشه سایت یا سایت مپ چیست؟", status: "درحال انتشار", deleteIcon: "/icon/admin/delete.svg", image: "/images/user/blog/1.png" },
    //     { id: 2, title: "نقشه سایت یا سایت مپ چیست؟", status: "درحال انتشار", deleteIcon: "/icon/admin/delete.svg", image: "/images/user/blog/2.png" },
    //     { id: 3, title: "نقشه سایت یا سایت مپ چیست؟", status: "درحال انتشار", deleteIcon: "/icon/admin/delete.svg", image: "/images/user/blog/3.png" },
    // ]

    

    return (

        <Layout_admin>

            <div className='flex flex-col w-[65%] gap-6'>
                <form className=''>
                    <div onClick={handleSubmit(addBlog)} className='flex items-start justify-between h-[48px]'>
                        <p className='font-medium text-base text-[#000]'>افزودن بلاگ</p>
                        <div className='flex items-start cursor-pointer'>
                            <Image src="/icon/admin/greenplus.svg" alt="add" width={24} height={24} />
                            <p className='font-medium text-lg text-[#008000] '>افزودن</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 h-[71px]'>
                        <input {...register("title", { required: true })} type="text" placeholder='عنوان بلاگ' className='border-0 h-[51px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-full rounded-[10px] focus:ring-[#008000] focus:border-[#008000]' />
                        {errors.title?.type === "required" && <p className='text-red-500 font-normal text-xs'>عنوان بلاگ را مشخص کنید</p>}
                    </div>
                    <div className='justify-between flex h-[150px]'>
                        <div className='flex flex-col gap-1 h-full w-[73%]'>
                            <input {...register("description", { required: true })} type="text" placeholder='توضیحات' className='border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-full h-[128px] rounded-[10px] focus:ring-[#008000] focus:border-[#008000]' />
                            {errors.description?.type === "required" && <p className='text-red-500 font-normal text-xs'>توضیحات بلاگ را مشخص کنید</p>}
                        </div>
                        <div className='flex flex-col gap-1 h-full w-[22%]'>
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-[128px] cursor-pointer hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center ">
                                    <p className="text-xs rounded-[10px] dark:text-gray-400">آپلود عکس</p>
                                </div>
                                <input {...register("image_id", { required: true })} onChange={uploadImage} multiple id="dropzone-file" type="file" className="hidden" />
                            </label>
                            {errors.image_id?.type === "required" && <p className='text-red-500 font-normal text-xs'>عکس بلاگ را مشخص کنید</p>}
                        </div>
                    </div>
                </form>


                <div>
                    <div className='h-[48px]'>
                        <p className='font-medium text-lg text-[#404040]'>ویرایش بلاگ</p>
                    </div>

                    <div className='flex flex-wrap justify-between gap-6'>
                        {listBlog?.map((i) => {
                            return (
                                <div key={i.id} className='flex justify-between w-[42%] h-[128px] p-3 rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                                    <div className='flex w-[96px] h-[106px]'>
                                        <img src={i.image} alt="image" className='rounded-[10px]' />
                                    </div>
                                    <div className='flex flex-col justify-between w-[290px]'>
                                        <div className='flex justify-between items-start'>
                                            <p className='font-normal'>{i.title}</p>
                                            <p className='text-lg font-normal text-[#008000]'>درست کن</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-2'>
                                            <Image src="/icon/admin/delete.svg" alt='Delet' width={24} height={24} className='cursor-pointer' />
                                            <Link href="/admin/editblog" className='flex justify-center items-center border rounded-md border-[#008000] w-[83px] h-8'><p className='text-[#008000]'>ویرایش</p></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>

        </Layout_admin>

    )
}
export default Weblog
