import React, { useState } from 'react'
import Link from 'next/link'
import Layout_admin from '@/components/layout/layout_admin/Layout_admin'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Blog_Fetch from '@/components/api/admin/Blog_Fetch'
import { FadeLoader } from 'react-spinners'
import { CircleLoader } from 'react-spinners'
import { BounceLoader } from 'react-spinners'
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router'

type FormValue = {
    title: string
    description: string
    image_id: string | number | null | void
}

type listBlog = {
    id: number & null
    title: string,
    image: object,
    media: object
}

type Media = {
    original_url: string
}


const index = () => {



    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const [blogId, setBlogId] = React.useState<number>();
    const { mutate_add_image_blog, pending_add_image_blog, success__add_image_blog, error_add_image_blog, data_show_listblog, pending_show_listblog, mutate_add_blog, pending_add_blog, mutate_delete_blog, pending_delete_blog } = Blog_Fetch(currentPage, blogId)
    const [imageUrl, setImageUrl] = React.useState<null>(null)
    const [idClickDeliet, setIdClickDeliet] = useState(null)



    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const fileImage: File | undefined = e.target.files?.[0];
        setImageUrl(URL.createObjectURL(fileImage))
        mutate_add_image_blog({ image: fileImage });

    };


    const form = useForm()

    const { register, handleSubmit, formState, watch } = form
    const { errors } = formState

    const addBlog = (data: void & FormValue) => {
        data.image_id = localStorage.getItem("image_id_blog")
        console.log(data)
        mutate_add_blog(data)
        setImageUrl(null)
    }

    const matn = watch('description')
    console.log(matn)

    //index show listBlog
    const listBlog = data_show_listblog?.data.blogs.data
    //index last_page
    const last_page = data_show_listblog?.data.blogs.last_page
    //change_Page
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log('currentPage', currentPage)
        setCurrentPage(value)
    }



    const deleteBlog = (id: number & null) => {
        localStorage.setItem('delete_id_blog', id)
        mutate_delete_blog()
        setIdClickDeliet(idClickDeliet === id ? null : id)
    }




    return (

        <Layout_admin>

            <div className='flex flex-col w-[65%] gap-6'>
                <form className=''>
                    <div className='flex items-start justify-between h-[48px]'>
                        <p className='font-medium text-base text-[#000]'>افزودن بلاگ</p>
                        <div className='flex items-start cursor-pointer' onClick={handleSubmit(addBlog)}>
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
                            <textarea {...register("description", { required: true })} placeholder='توضیحات' className='border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-full h-[128px] rounded-[10px] focus:ring-[#008000] focus:border-[#008000] resize-none placeholder:pt-10 ' />
                            {errors.description?.type === "required" && <p className='text-red-500 font-normal text-xs'>توضیحات بلاگ را مشخص کنید</p>}
                        </div>
                        <div className='flex flex-col gap-1 h-full w-[22%]'>
                            <label htmlFor="dropzone-file" className="flex flex-col relative items-center justify-center rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-full h-[128px] cursor-pointer hover:bg-gray-100">
                                <input {...register("image_id", { required: true })} onChange={uploadImage} multiple id="dropzone-file" type="file" className="hidden" />
                                {pending_add_image_blog === true ?
                                    <FadeLoader color="#36d7b7" />
                                    :
                                    <>
                                        <div className="flex flex-col items-center justify-center ">
                                            <p className="text-xs rounded-[10px] dark:text-gray-400">آپلود عکس</p>
                                        </div>
                                        <img src={imageUrl} className=' w-full h-full rounded-[15px] absolute' />
                                    </>
                                }
                            </label>
                            {errors.image_id?.type === "required" && <p className='text-red-500 font-normal text-xs'>عکس بلاگ را مشخص کنید</p>}
                            {success__add_image_blog === true && <p className='text-green-500 font-normal text-xs'>آپلود عکس با موفقیت انجام شد</p>}
                            {error_add_image_blog === true && <p className='text-red-500 font-normal text-xs'>آپلود عکس با مشکل مواجه شد،مجددا تلاش کنید</p>}
                        </div>
                    </div>
                </form>


                <div>
                    <div className='h-[48px]'>
                        <p className='font-medium text-lg text-[#404040]'>ویرایش بلاگ</p>
                    </div>

                    {
                        pending_show_listblog || pending_add_blog === true ?
                            <div className='flex justify-center'>
                                <CircleLoader color="#36d7b7" />
                            </div>
                            :
                            <div className='flex flex-col items-center'>
                                <div className='flex flex-wrap justify-between gap-20'>
                                    {listBlog?.map((i: listBlog) => {

                                        return (
                                            <div key={i.id} className='flex justify-between w-[450px] h-[128px] p-3 rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>
                                                <div className='flex w-[96px] h-[106px]'>

                                                    {i.image?.media?.map((item: Media) => {
                                                        return (
                                                            <img src={item.original_url} alt="image" className='rounded-[10px]' />
                                                        )
                                                    })}

                                                </div>
                                                <div className='flex flex-col justify-between w-[290px]'>
                                                    <div className='flex justify-between items-start'>
                                                        <p className='font-normal'>{i.title}</p>
                                                        <p className='text-lg font-normal text-[#008000]'>درست کن</p>
                                                    </div>
                                                    <div className='flex justify-end items-center gap-2'>
                                                        {pending_delete_blog === true && idClickDeliet === i.id ? <BounceLoader color="#FF004D" size={30} /> : <Image src="/icon/admin/delete.svg" alt='Delet' width={24} height={24} className='cursor-pointer' onClick={() => deleteBlog(i.id)} />}
                                                        <Link href={`/admin/weblog/edit/${i.id}`} className='flex justify-center items-center border rounded-md border-[#008000] w-[83px] h-8'><p className='text-[#008000]'>ویرایش</p></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className='flex justify-center items-center h-24'>
                                    <Pagination
                                        style={{ direction: 'ltr' }}
                                        count={last_page}
                                        page={currentPage}
                                        onChange={handleChangePage}
                                        variant="outlined"
                                        color="primary"
                                    />
                                </div>
                            </div>
                    }
                </div>
            </div>

        </Layout_admin>

    )
}
export default index
