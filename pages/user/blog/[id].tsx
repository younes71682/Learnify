// @ts-nocheck
import Blog_Fetch from '@/components/api/admin/Blog_Fetch';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Header_id from '@/components/user/blog/Header_id'
import { useRouter } from 'next/router';
import React, { useRef } from 'react'

const A = () => {
  const dataa = [
    { id: 1, title: "نقشه سایت چیست؟", text: "نقشه سایت XML در واقع یک فایل متنی حاوی تمام آدرسهای موجود در سایت است. همچنین نقشه سایت میتواند اطلاعات متا ( توضیحات) هر آدرس از سایت مانند آخرین بروز رسانی، میزان اهمیت و نحوه ارتباط آن با صفحات دیگر را نیز شامل شود. وجود نقشه سایت به موتورهای جستجو کمک می کند تا صفحات سایت را به صورت بهتر شناسایی کرده و همچنین از ایجاد صفحات جدید و تغییرات در صفحات قدیمی مطلع شود." },
    { id: 2, title: "چرا به نقشه سایت نیاز داریم؟", text: "نقشه سایت XML در واقع یک فایل متنی حاوی تمام آدرسهای موجود در سایت است. همچنین نقشه سایت میتواند اطلاعات متا ( توضیحات) هر آدرس از سایت مانند آخرین بروز رسانی، میزان اهمیت و نحوه ارتباط آن با صفحات دیگر را نیز شامل شود. وجود نقشه سایت به موتورهای جستجو کمک می کند تا صفحات سایت را به صورت بهتر شناسایی کرده و همچنین از ایجاد صفحات جدید و تغییرات در صفحات قدیمی مطلع شود." },
    { id: 3, title: "انواع سایت مپ", text: "نقشه سایت XML در واقع یک فایل متنی حاوی تمام آدرسهای موجود در سایت است. همچنین نقشه سایت میتواند اطلاعات متا ( توضیحات) هر آدرس از سایت مانند آخرین بروز رسانی، میزان اهمیت و نحوه ارتباط آن با صفحات دیگر را نیز شامل شود. وجود نقشه سایت به موتورهای جستجو کمک می کند تا صفحات سایت را به صورت بهتر شناسایی کرده و همچنین از ایجاد صفحات جدید و تغییرات در صفحات قدیمی مطلع شود." },
    { id: 4, title: "روش های ساخت سایت مپ", text: "نقشه سایت XML در واقع یک فایل متنی حاوی تمام آدرسهای موجود در سایت است. همچنین نقشه سایت میتواند اطلاعات متا ( توضیحات) هر آدرس از سایت مانند آخرین بروز رسانی، میزان اهمیت و نحوه ارتباط آن با صفحات دیگر را نیز شامل شود. وجود نقشه سایت به موتورهای جستجو کمک می کند تا صفحات سایت را به صورت بهتر شناسایی کرده و همچنین از ایجاد صفحات جدید و تغییرات در صفحات قدیمی مطلع شود." },
  ];

  const router = useRouter()
  const { id } = router.query
  const blogId = id

  const { data_show_BlogId, pending_show_BlogId } = Blog_Fetch(null, blogId)

  const data = data_show_BlogId?.data
  const title = data_show_BlogId?.data.blog?.title
  const description = data_show_BlogId?.data.blog?.description

  
  console.log(data)
  const textRefs = dataa.reduce((acc, item) => {
    acc[item.id] = useRef();
    return acc;
  }, {});

  const scrollToText = (textRef) => {
    textRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>

      <Navbar />

      <Header_id title={title} description={description} />
      <div className='flex justify-center gap-3'>
        <div className='flex flex-col items-start gap-6 relative bottom-56 '>
          <div className='w-[303.47px] h-[290px]'><img src='/images/user/blog/f1.png' alt='F1' /></div>
          <div className='flex flex-col rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] text-[18px] font-normal leading-9 w-full pr-6 py-4'>
            <h3 className='font-bold'>فهرست</h3>
            {dataa.map((item) => (
              <div key={item.id}>
                <ul className=''>
                  <li onClick={() => scrollToText(textRefs[item.id])}>{item.title}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col w-[59.2%] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[20px] text-lg pr-5 pt-9 mt-6 mb-[30px]'>
          <div className='mb-[54px]'>
            <p>همانطور که پیدا کردن یک مکان بدون استفاده از آدرس و نقشه دشوار است...</p>
          </div>
          <div className='flex flex-col gap-8 w-[90%] pt-6'>
            {dataa.map((item) => (
              <div key={item.id} ref={textRefs[item.id]} className='flex flex-col gap-6'>
                <h3 className='font-bold'>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default A;
