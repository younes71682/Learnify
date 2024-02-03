// editblog.js
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Blog_Fetch from '@/components/api/admin/Blog_Fetch';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>, // Add loading indicator if needed
});

type editBlog = {
    title: string,
    description: string
}

const EditBlog = () => {

    const [isClient, setIsClient] = useState(false); // Track if the code is running on the client side


    const router = useRouter();
    const { id } = router.query;
    const blogId = id;

    const { data_show_BlogId, mutateEditBlog } = Blog_Fetch(null, blogId);


    const data = data_show_BlogId?.data;
    const title = data_show_BlogId?.data.blog?.title;
    const description = data_show_BlogId?.data.blog?.description;
    const [value, setValue] = useState(description);


    const submitBlogEdit = () => {
        const newData: editBlog = { title: title, description: value }
        mutateEditBlog(newData);
    };


    const handleBack = () => {
        router.back();
    };


    useEffect(() => {
        setIsClient(true); // Set isClient to true after component mounts on the client side

    }, []);

    useEffect(() => {
        setValue(description);
    }, [description]);


    if (!isClient) {
        return null; // Render nothing on the server side
    }

    return (
        <div className='flex justify-center h-[180vh] mt-28'>
            <div className='flex flex-col justify-between py-8 gap-8  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[90%] h-[100vh] '>
                <div className='flex flex-col gap-8'>
                    <div className='pr-4'>
                        <p className='text-[#404040] font-bold'>ویرایش بلاگ</p>
                        <div className='flex items-center gap-4 mt-3 '>
                            <div className='rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05) w-[134px] h-[114px]'>
                                <img src='/images/admin/editeblog/imag.png' alt='image' />
                            </div>
                            <p className='text-sm'>{title}</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <div className='flex font-YekanBakhRegular text-lg flex-col mx-6'>
                            <p>{description}</p>
                            <ReactQuill
                                theme='snow'
                                className='font-YekanBakhRegular h-56 text-lg'
                                value={value}
                                onChange={setValue}
                                style={{ textAlign: 'right' }}
                            />

                        </div>
                    </div>
                </div>

                <div className='flex justify-end gap-2 ml-8'>
                    <div
                        onClick={handleBack}
                        className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[8%] py-2 flex justify-center items-center cursor-pointer'
                    >
                        انصراف
                    </div>
                    <div onClick={submitBlogEdit} className='text-white bg-[#008000] rounded-[10px] w-[8%] py-2 flex justify-center cursor-pointer items-center'>
                        ویرایش
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBlog;
