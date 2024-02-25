import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Best_sellers = () => {

    const seller = [
        { id: 1, title: "next.js", name: "سلمان طاهری", detail: "در طول دوره آموزش redux سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/best_seller/next.png' alt='' /> },
        { id: 2, title: "next.js", name: "سلمان طاهری", detail: "در طول دوره آموزش redux سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/best_seller/redux.png' alt='' /> },
        { id: 3, title: "next.js", name: "سلمان طاهری", detail: "در طول دوره آموزش redux سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/best_seller/w.png' alt='' /> },
        { id: 4, title: "next.js", name: "سلمان طاهری", detail: "در طول دوره آموزش redux سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/best_seller/veu.png' alt='' /> },
        { id: 4, title: "next.js", name: "سلمان طاهری", detail: "در طول دوره آموزش redux سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم.", duration: "47", seasons: "7", price: "790,000", image: <img src='/images/user/best_seller/veu.png' alt='' /> },
    ];


    return (
        <div>
            <div className='flex justify-center items-center h-20 '><h3 className='text-[#212121] text-2xl font-bold'>پرفروش ترین ها</h3></div>
            
            <div className='flex flex-wrap justify-center gap-4'>
                {seller.map((item, i) => {
                    switch (i) {
                        case 0:
                            return (
                                <div className='flex bg-[#F1C40F] w-[572px] [@media(max-width:1165px)]:w-[470px] h-[212px] [@media(max-width:966px)]:w-[85%] [@media(max-width:620px)]:h-[180px] [@media(max-width:620px)]:w-[600px] rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)]'>

                                    <div className='flex w-[210px] [@media(max-width:465px)]:w-[465px] flex-1 h-full rounded-[10px]'>{item.image}</div>

                                    <div className='flex flex-col justify-around w-[390px] [@media(max-width:1165px)]:w-[290px] [@media(max-width:966px)]:w-[73%] px-2 '>
                                        <div className=''>
                                            <div className='flex items-center gap-1 text-[#212121] text-2xl [@media(max-width:465px)]:text-xl font-bold'>
                                                <p>آموزش</p>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <Image src='/icon/user/account/info_user/user.svg' alt='' width={16} height={16} />
                                                <p className='text-xs  text-[#33475F]'>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-sm font-normal [@media(max-width:465px)]:text-xs'>{item.detail}</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center'>
                                                <div className='text-xs font-normal [@media(max-width:465px)]:text-[12px]'>
                                                    <p>تو</p>
                                                    <p>مان</p>
                                                </div>
                                                <p className='text-[22px] [@media(max-width:465px)]:text-lg font-normal font-Byekan'>{item.price}</p>
                                            </div>

                                            <Link href={`user/courses/${item.id}`} className='flex items-center justify-center w-[100px] [@media(max-width:966px)]:w-[80px] h-8 rounded-[5px] bg-[#212121] text-[#FFCC12]'>
                                                <p className='text-sm font-normal [@media(max-width:966px)]:text-[12px] [@media(max-width:465px)]:text-[10px]'>مشاهده دوره</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#000" className='stroke-[#F1C40F]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19.9999 12H5.66992" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" className='stroke-[#F1C40F]' strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        case 1:
                            return (
                                <div className='flex bg-[#1E1E1E] w-[572px] [@media(max-width:1165px)]:w-[470px] h-[212px] [@media(max-width:966px)]:w-[85%] [@media(max-width:620px)]:h-[180px] [@media(max-width:620px)]:w-[600px]  rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)] '>

                                    <div className='flex w-[210px] [@media(max-width:465px)]:w-[465px] flex-1 h-full rounded-[10px]'>{item.image}</div>

                                    <div className='flex flex-col justify-around w-[390px] [@media(max-width:1165px)]:w-[290px] [@media(max-width:966px)]:w-[73%]  px-2 '>
                                        <div className=''>
                                            <div className='flex items-center gap-1 text-[#FBFBFB] text-2xl [@media(max-width:465px)]:text-xl font-bold'>
                                                <p>آموزش</p>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.10573 7.74634C8.08573 7.74634 8.0724 7.74634 8.0524 7.74634C8.01906 7.73967 7.9724 7.73967 7.9324 7.74634C5.99906 7.68634 4.53906 6.16634 4.53906 4.29301C4.53906 2.38634 6.0924 0.833008 7.99906 0.833008C9.90573 0.833008 11.4591 2.38634 11.4591 4.29301C11.4524 6.16634 9.98573 7.68634 8.12573 7.74634C8.11906 7.74634 8.1124 7.74634 8.10573 7.74634ZM7.99906 1.83301C6.64573 1.83301 5.53906 2.93967 5.53906 4.29301C5.53906 5.62634 6.57906 6.69967 7.90573 6.74634C7.93906 6.73967 8.0324 6.73967 8.11906 6.74634C9.42573 6.68634 10.4524 5.61301 10.4591 4.29301C10.4591 2.93967 9.3524 1.83301 7.99906 1.83301Z" fill="#7E4FCB" />
                                                    <path d="M8.11307 15.0337C6.80641 15.0337 5.49307 14.7003 4.49974 14.0337C3.57307 13.4203 3.06641 12.5803 3.06641 11.667C3.06641 10.7537 3.57307 9.90699 4.49974 9.28699C6.49974 7.96033 9.73974 7.96033 11.7264 9.28699C12.6464 9.90033 13.1597 10.7403 13.1597 11.6537C13.1597 12.567 12.6531 13.4137 11.7264 14.0337C10.7264 14.7003 9.41974 15.0337 8.11307 15.0337ZM5.05307 10.127C4.41307 10.5537 4.06641 11.1003 4.06641 11.6737C4.06641 12.2403 4.41974 12.787 5.05307 13.207C6.71307 14.3203 9.51307 14.3203 11.1731 13.207C11.8131 12.7803 12.1597 12.2337 12.1597 11.6603C12.1597 11.0937 11.8064 10.547 11.1731 10.127C9.51307 9.02033 6.71307 9.02033 5.05307 10.127Z" fill="#7E4FCB" />
                                                </svg>
                                                <p className='text-xs text-[#764ABD]'>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-white text-sm font-normal [@media(max-width:465px)]:text-xs'>{item.detail}</p>
                                        </div>
                                        <div className='flex justify-between items-center  text-white'>
                                            <div className='flex items-center'>
                                                <div className='text-xs font-normal [@media(max-width:465px)]:text-[12px]'>
                                                    <p>تو</p>
                                                    <p>مان</p>
                                                </div>
                                                <p className='text-[22px] [@media(max-width:465px)]:text-lg font-normal font-Byekan'>{item.price}</p>
                                            </div>

                                            <Link href={`user/courses/${item.id}`} className='flex items-center justify-center w-[100px] [@media(max-width:966px)]:w-[80px] h-8 rounded-[5px] bg-[#764ABD] text-[#FBFBFB]'>
                                                <p className='text-sm font-normal [@media(max-width:966px)]:text-[12px] [@media(max-width:465px)]:text-[10px]'>مشاهده دوره</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#000" className='stroke-[#FBFBFB]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19.9999 12H5.66992" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" className='stroke-[#FBFBFB]' strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        case 2:
                            return (
                                <div className='flex bg-[#E57722] w-[572px] [@media(max-width:1165px)]:w-[470px] h-[212px] [@media(max-width:966px)]:w-[85%] [@media(max-width:620px)]:h-[180px] [@media(max-width:620px)]:w-[600px] rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)] '>

                                    <div className='flex w-[210px] [@media(max-width:465px)]:w-[465px] flex-1 h-full rounded-[10px]'>{item.image}</div>

                                    <div className='flex flex-col justify-around w-[390px] [@media(max-width:1165px)]:w-[290px] [@media(max-width:966px)]:w-[73%]  px-2 '>
                                        <div className=''>
                                            <div className='flex items-center gap-1 text-[#FBFBFB] text-2xl [@media(max-width:465px)]:text-xl font-bold'>
                                                <p>آموزش</p>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M8.10573 7.74634C8.08573 7.74634 8.0724 7.74634 8.0524 7.74634C8.01906 7.73967 7.9724 7.73967 7.9324 7.74634C5.99906 7.68634 4.53906 6.16634 4.53906 4.29301C4.53906 2.38634 6.0924 0.833008 7.99906 0.833008C9.90573 0.833008 11.4591 2.38634 11.4591 4.29301C11.4524 6.16634 9.98573 7.68634 8.12573 7.74634C8.11906 7.74634 8.1124 7.74634 8.10573 7.74634ZM7.99906 1.83301C6.64573 1.83301 5.53906 2.93967 5.53906 4.29301C5.53906 5.62634 6.57906 6.69967 7.90573 6.74634C7.93906 6.73967 8.0324 6.73967 8.11906 6.74634C9.42573 6.68634 10.4524 5.61301 10.4591 4.29301C10.4591 2.93967 9.3524 1.83301 7.99906 1.83301Z" fill="#212121" />
                                                    <path d="M8.11307 15.0337C6.80641 15.0337 5.49307 14.7003 4.49974 14.0337C3.57307 13.4203 3.06641 12.5803 3.06641 11.667C3.06641 10.7537 3.57307 9.90699 4.49974 9.28699C6.49974 7.96033 9.73974 7.96033 11.7264 9.28699C12.6464 9.90033 13.1597 10.7403 13.1597 11.6537C13.1597 12.567 12.6531 13.4137 11.7264 14.0337C10.7264 14.7003 9.41974 15.0337 8.11307 15.0337ZM5.05307 10.127C4.41307 10.5537 4.06641 11.1003 4.06641 11.6737C4.06641 12.2403 4.41974 12.787 5.05307 13.207C6.71307 14.3203 9.51307 14.3203 11.1731 13.207C11.8131 12.7803 12.1597 12.2337 12.1597 11.6603C12.1597 11.0937 11.8064 10.547 11.1731 10.127C9.51307 9.02033 6.71307 9.02033 5.05307 10.127Z" fill="#212121" />
                                                </svg>
                                                <p className='text-xs text-[#212121]'>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-white text-sm font-normal [@media(max-width:465px)]:text-xs'>{item.detail}</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center  text-white'>
                                                <div className='text-xs font-normal [@media(max-width:465px)]:text-[12px]'>
                                                    <p>تو</p>
                                                    <p>مان</p>
                                                </div>
                                                <p className='text-[22px] [@media(max-width:465px)]:text-lg font-normal font-Byekan'>{item.price}</p>
                                            </div>

                                            <Link href={`user/courses/${item.id}`} className='flex items-center justify-center w-[100px] [@media(max-width:966px)]:w-[80px] h-8 rounded-[5px] bg-[#FBFBFB] text-[#E57722]'>
                                                <p className='text-sm font-normal [@media(max-width:966px)]:text-[12px] [@media(max-width:465px)]:text-[10px]'>مشاهده دوره</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#000" className='stroke-[#E57722]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19.9999 12H5.66992" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" className='stroke-[#E57722]' strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )

                        case 3:
                            return (
                                <div className='flex bg-[#00C180] w-[572px] [@media(max-width:1165px)]:w-[470px] h-[212px] [@media(max-width:966px)]:w-[85%] [@media(max-width:620px)]:h-[180px] [@media(max-width:620px)]:w-[600px] rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)]'>

                                    <div className='flex w-[210px] [@media(max-width:465px)]:w-[465px] flex-1 h-full rounded-[10px]'>{item.image}</div>

                                    <div className='flex flex-col justify-around w-[390px] [@media(max-width:1165px)]:w-[290px] [@media(max-width:966px)]:w-[73%]  px-2 '>
                                        <div className=''>
                                            <div className='flex items-center gap-1 text-[#FBFBFB] text-2xl [@media(max-width:465px)]:text-xl font-bold'>
                                                <p>آموزش</p>
                                                <p>{item.title}</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <Image src='/icon/user/account/info_user/user.svg' alt='' width={16} height={16} />
                                                <p className='text-xs text-[#33475F]'>{item.name}</p>
                                            </div>
                                        </div>
                                        <div className=''>
                                            <p className='text-white text-sm font-normal [@media(max-width:465px)]:text-xs'>{item.detail}</p>
                                        </div>
                                        <div className='flex justify-between items-center'>
                                            <div className='flex items-center text-white'>
                                                <div className='text-xs font-normal [@media(max-width:465px)]:text-[12px]'>
                                                    <p>تو</p>
                                                    <p>مان</p>
                                                </div>
                                                <p className='text-[22px] [@media(max-width:465px)]:text-lg font-normal font-Byekan'>{item.price}</p>
                                            </div>

                                            <Link href={`user/courses/${item.id}`} className='flex items-center justify-center w-[100px] [@media(max-width:966px)]:w-[80px] h-8 rounded-[5px] bg-[#212121] text-[#FBFBFB]'>
                                                <p className='text-sm font-normal [@media(max-width:966px)]:text-[12px] [@media(max-width:465px)]:text-[10px]'>مشاهده دوره</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.57 5.92969L5.5 11.9997L11.57 18.0697" stroke="#000" className='stroke-[#FBFBFB]' strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19.9999 12H5.66992" stroke="#000" strokeWidth="1.5" strokeMiterlimit="10" className='stroke-[#FBFBFB]' strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )


                        default:
                            break;
                    }


                })}
            </div>
        </div>
    )
}

export default Best_sellers
