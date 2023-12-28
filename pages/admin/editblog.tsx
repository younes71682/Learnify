import Toggle_button_edit from '@/components/button/Toggle_button_edit'
import dynamic from 'next/dynamic';
import React from 'react'

const editblog = () => {
    const Toggle_button_edit = dynamic(() => import("@/components/button/Toggle_button_edit"), { ssr: false });

    return (
        <div className=' flex justify-center h-[180vh] mt-28'>
            <div className='flex flex-col justify-between py-8 gap-8  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[90%] h-[100vh] '>

                <div className='flex flex-col gap-8'>
                    <div className='pr-4'>
                        <p className='text-[#404040] font-bold'>ویرایش بلاگ</p>
                        <div className='flex items-center gap-4 mt-3 '>
                            <div className='rounded-[10px] shadow-[0_0_20px_rgba(0,0,0,0.05) w-[134px] h-[114px]'><img src='/images/admin/editeblog/imag.png' alt='image' /></div>
                            <p className='text-sm'>چرا به نقشه سایت نیاز داریم؟</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <Toggle_button_edit
            
                        />


                        <div className='flex flex-col mx-6'>
                            <h3 className='text-sm font-bold'>چرا به نقشه سایت نیاز داریم؟</h3>
                            <p>
                                گوگل محتواهای جدید را توسط ربات‌های خزنده‌ای که وب را بررسی می‌کنند کشف می‌کند. وقتی یک صفحه توسط این ربات‌هابررسی می‌شود، به لینک‌های داخلی و خارجی آن توجه می‌شود. اگر یک آدرس URL پیدا شود که در فهرست
                                جستجوی آن‌ها نیست، محتوای آن آدرس را فراخوانی می‌کنند و در جای مناسب ایندکس می‌کنند.اما گوگل نمی‌تواند تمام محتواهای موجود را به این روش پیدا کند. اگر صفحه‌ای وجود داشته باشد که از صفحات شناخته شده به آن لینک داخلی داده نشده باشد، گوگل قادر به پیدا کردنش نخواهد بود.اینجاست که اهمیت نقشه سایت در سئو مشخص می‌شود. کار سایت مپ این است که به گوگلبگوید که کجا و در چه آدرسی می‌توانند مهم‌ترین صفحات آن سایت را پیدا کنند تا بتوانند این صفحات را ایندکس کنند.
                            </p>
                            <h3>انواع سایت مپ</h3>
                            <p>سایت مپ به دو نوع کلی تقسیم بندی می شود: – Visual Sitemap یا سایت مپ از نوع HTMLاین نوع سایت مپ معمولاً پیش از طراحی سایت ایجاد می‌شود. </p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-end gap-2 ml-8'>
                    <div className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[8%] py-2 flex justify-center items-center'>انصراف</div>
                    <div className='text-white bg-[#008000] rounded-[10px] w-[8%] py-2 flex justify-center items-center'>ویرایش</div>
                </div>

            </div>
        </div>
    )
}

export default editblog
