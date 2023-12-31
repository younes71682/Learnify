import React from 'react'

const Selling_course = () => {

    const sellcourse = [
        { id: 2, name: "آموزش next.js", number: "325", total: "456,580" },
        { id: 1, name: "آموزش next.js", number: "78", total: "456,203" },
        { id: 3, name: "آموزش next.js", number: "85", total: "1,203" },
        { id: 4, name: "آموزش next.js", number: "96", total: "1,456,400" },
        { id: 5, name: "آموزش next.js", number: "300", total: "1,203" },
        { id: 6, name: "آموزش next.js", number: "187", total: "1,000,203" },
    ]

    return (
        <div className='flex flex-col justify-around py-2 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[50%] h-full'>
            <div className='font-normal flex justify-center font-Byekan'><p>6 دوره پرفروش</p></div>
            <div className='flex justify-around items-center text-[#030229] text-xs'>
                <p className='flex justify-center w-[20%]'>نام دوره</p>
                <p className='flex justify-center w-[20%]'>تعداد فروش</p>
                <p className='flex justify-center w-[20%]'>مجموع فروش</p>
            </div>
            {sellcourse.map((item) => {
                return (
                    <ul className='flex items-center justify-around'>
                        <li className='flex justify-center w-[20%] text-[#484848] text-sm '>{item.name}</li>
                        <li className='flex justify-center w-[20%] text-[#060] text-xs font-bold font-Byekan'>{item.number}</li>
                        <li className='flex justify-end w-[20%] pl-5 text-[#030229] text-xs font-normal font-Byekan'>{item.total}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Selling_course
