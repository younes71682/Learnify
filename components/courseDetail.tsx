import React from 'react'
import CourseComponent from './CourseComponent'

const CourseDetail = () => {
    const Courses = [
        { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 5, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 6, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 7, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
        { id: 8, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/courses/monitor.png' alt='' /> },
    ];

    return (
        <div className='flex flex-wrap w-[870px] bg-[#FBFBFB] mr-5 justify-start gap-6'>
            {Courses.map((item) => (
                <div key={item.id}>
                    <CourseComponent
                        {...item}
                    />
                </div>
            ))}
        </div>
    )
}
export default CourseDetail






















// const CourseComponent = () => {
//     const Courses = [
//         { id: 1, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 2, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 3, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 4, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 5, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 6, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 7, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },
//         { id: 8, title: "یافتن و انتخاب ایده کسب و کار", name: "سلمان طاهری", detail: "در این دوره آموزشی ایرانی، راه یافتن ایده مناسب را یادمی‌گیریم و با چند ابزار کاربردی در این مسیر آشنا می‌شویم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/courses/monitor.png' alt='' /> },

//     ]

//     return (
//         <div className='flex flex-wrap w-[870px] bg-[#FBFBFB] mr-5 justify-start gap-6'>
//             {Courses.map((item) => (
// <div className='w-[274px] box-border bg-white shadow-[0_0px_20px_rgb(0,0,0,0.1)] rounded-[10px] pt-3 pl-3 pr-3 h-[469px] flex flex-col '>
//     {item.image}
//     <div className='text-[#212121] mt-4 font-bold'>{item.title}</div>
//     <div className='text-xs mt-2 mb-4 '>{item.name}</div>
//     <div className='text-[#4F4F4F] text-sm font-normal leading-6'>{item.detail}</div>
//     <div className=' mt-auto mb-6 flex justify-between items-center'>
//         <div className='flex gap-[6px]'>
//             <div className='h-[24px] w-[42px] bg-[#F6FFF6] px-1 py-[5px] border border-[#158212] rounded flex justify-center items-center font-normal text-xs text-[#158212]'>
//                 {item.seasons} فصل
//             </div>
//             <div className='h-[24px] w-[55px] px-1 py-[5px] border border-[#DEB509] rounded flex justify-center bg-[#FFFDED] font-normal text-xs text-[#DEB509]'>
//                 {item.duration} ساعت
//             </div>
//         </div>
//         <div className='flex items-center'>
//             <div className='font-bold'>
//                 {item.price}
//             </div>
//             <div className='text-[#4F4F4F] mr-1 text-[10px]'>
//                 <p className='relative top-[2px]'>تو</p>
//                 <p className='relative bottom-[2px]'>مان</p>
//             </div>
//         </div>
//     </div>
//     <div className='border-t'>
//         <div className=' mt-0 h-[56px] flex gap-1 justify-center items-center hover:scale-[1.15] hover:text-[#4e914e] transition duration-150 ease-in-out hover:cursor-pointer text-[#484848] text-sm font-bold'>
//             <p>مشاهده اطلاعات دوره</p>
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#484848" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
//                 <path d="M19.9999 12H5.66992" stroke="#484848" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
//             </svg>
//         </div>
//     </div>
// </div>
//             ))}
//         </div>
//     )
// }
// export default CourseComponent

