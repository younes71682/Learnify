import Image from 'next/image';
import React, { useState } from 'react';

const Accordion = () => {
    const question = [
        { id: 1, Question: "آموزش‌ها تا چه زمانی در حساب کاربری اعتبار دارند؟", answer: "مشاهده آموزش‌ها محدودیتی نداشته و هر زمان می‌توانید با مراجعه به حساب کاربری‌تان، به آموزش‌هایتان دسترسی داشته باشید." },
        { id: 2, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
        { id: 3, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
    ]
    const [selected, setSelected] = useState(null)

    const handleclick = (id:any) => {
        setSelected(selected === id ? null : id)
    }
 
    

    return (

        <div className='flex justify-center my-12'>
        <div className='flex flex-col items-center justify-center gap-4 w-[850px]'>
        <div className='mt-16 mb-8 flex justify-center'><h2 className='text-2xl font-bold'>پاسخ به پرسش‌های متداول</h2></div>

            {question.map((item, index) => {
                return (
                    <div onClick={() => handleclick(item.id)} key={index} className='shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[20px] px-4 flex flex-col w-[80%] text-[#484848]'>
                         <div className='flex justify-between h-[82px] items-center text-[1.125rem] font-YekanBakhBold'>
                            {selected === item.id ? (<h2 className='text-[#339933]'>{item.Question}</h2>) : (<h2>{item.Question}</h2>)}
                            {selected === item.id ? (<img src="/icon/user/home_page/according/up.svg" alt='Up'/>) : <img src="/icon/user/home_page/according/down.svg" alt='Down'/>}
                         </div>
                        <div className='flex items-center transition delay-[2000ms]'>
                            {selected === item.id && <p className='w-[90%]'>{item.answer}</p>}
                        </div>
                    </div>

                )
            })}
        </div >
        </div >
    )
}

export default Accordion



