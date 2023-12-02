import Image from 'next/image';
import React, { useState } from 'react';

const Accordion = () => {
    const question = [
        { id: 1, Question: "آموزش‌ها تا چه زمانی در حساب کاربری اعتبار دارند؟", answer: "مشاهده آموزش‌ها محدودیتی نداشته و هر زمان می‌توانید با مراجعه به حساب کاربری‌تان، به آموزش‌هایتان دسترسی داشته باشید." },
        { id: 2, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
        { id: 2, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
    ]
    const [selected, setSelected] = useState(null)

    const handleclick = (index) => {
        setSelected(selected === index ? null : index)
    }


    return (

        <div className='flex flex-col items-center gap-4 mb-[51px]'>
            {question.map((item, index) => {
                return (
                    <div onClick={() => handleclick(index)} key={index} className='shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[20px] px-4 flex flex-col w-[745px] text-[#484848]'>
                         <div className='flex justify-between h-[82px] items-center text-[1.125rem] font-YekanBakhBold'>
                            {selected === index ? (<h2 className='text-[#339933]'>{item.Question}</h2>) : (<h2>{item.Question}</h2>)}
                            {selected === index ? (<Image src="/icon/user/home_page/according/up.svg" alt='Up' width={24} height={24} />) : <Image src="/icon/user/home_page/according/down.svg" alt='Down' width={24} height={24} />}
                         </div>
                        <div className='flex items-center transition delay-[2000ms]'>
                            {selected === index && <p className='w-[90%]'>{item.answer}</p>}
                        </div>
                    </div>

                )
            })}
        </div >
    )
}

export default Accordion


// import index from '@/pages/landing/Index'
// import React, { useState } from 'react'

// const Accordion = () => {

//     const question = [
//         { id: 1, Question: "آموزش‌ها تا چه زمانی در حساب کاربری اعتبار دارند؟", answer: "مشاهده آموزش‌ها محدودیتی نداشته و هر زمان می‌توانید با مراجعه به حساب کاربری‌تان، به آموزش‌هایتان دسترسی داشته باشید." },
//         { id: 2, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
//         { id: 2, Question: "آیا می‌توان از آموزش‌های فرادرس، به صورت رایگان استفاده کرد؟", answer: "بخشی از آموزش‌های فرادرس به صورت رایگان ارائه می‌شود؛ اما در کنار این بخش، برای دانشجویانی که امکان پرداخت هزینه را ندارند، بسته حمایتی در نظر گرفته شده است." },
//     ]

//     const [selected, setSelected] = useState(null)

//     const handleclick = (index) => {
//         setSelected(selected === index ? null : index)
//     }

//     return (
//         <div>
//             {question.map((item, index) => {
//                 return (
//                     <div id="accordion-arrow-icon" data-accordion=" " onClick={() => handleclick(index)} className='shadow-lg flex flex-col items-center w-[745px]'>
//                         <h2 id="accordion-arrow-icon-heading-1">
//                             <button type="button" className="flex items-center justify-between w-[745px] p-5 font-medium rtl:text-right 200 rounded-[20px] gap-4" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
//                                 <span>{selected === index ? (<p className='text-[#339933]'>{item.Question}</p>) : (<p>{item.Question}</p>)}</span>
//                                 <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
//                                 </svg>
//                             </button>
//                         </h2>
//                         <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
//                             <div className='w-[660px]'>
//                                 {selected === index && <p>{item.answer}</p>}
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }

// export default Accordion
