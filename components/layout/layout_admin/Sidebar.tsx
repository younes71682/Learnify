import { color } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button_exit from '../../button/Button_exit'
import { usePathname } from 'next/navigation'



const Sidebar = () => {

    const prof = [
        { id: 1, title: "نمای کلی", pathname: "/admin", icon: "/icon/admin/sidbar/overwiew.svg", icon_selected: "/icon/admin/sidbar/icon_green/overwiew.svg" },
        { id: 2, title: "آمار", pathname: "/admin/statistics", icon: "/icon/admin/sidbar/statistics.svg", icon_selected: "/icon/admin/sidbar/icon_green/statistics.svg" },
        { id: 3, title: "پشتیبانی", pathname: "/admin/support", icon: "/icon/admin/sidbar/Support.svg", icon_selected: "/icon/admin/sidbar/icon_green/Support.svg" },
        { id: 4, title: "تراکنش مالی", pathname: "/admin/financial", icon: "/icon/admin/sidbar/Financial_transactions.svg", icon_selected: "/icon/admin/sidbar/icon_green/Financial_transactions.svg" },
        { id: 5, title: "وضعیت دوره ها", pathname: "/admin/courseStatus", icon: "/icon/admin/sidbar/Status_courses.svg", icon_selected: "/icon/admin/sidbar/icon_green/Status_courses.svg" },
        { id: 6, title: "وضعیت واریز ها", pathname: "/admin/depositStatus", icon: "/icon/admin/sidbar/Status_deposits.svg", icon_selected: "/icon/admin/sidbar/icon_green/Status_deposits.svg" },
        { id: 7, title: "وبلاگ", pathname: "/admin/weblog", icon: "/icon/admin/sidbar/weblog.svg", icon_selected: "/icon/admin/sidbar/icon_green/weblog.svg" },
    ]



    const link = usePathname()

    return (
        <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[782px] w-[18%] py-8 justify-between'>

            <div>
                <div className='flex items-center gap-5 pr-4'>
                    <div className='w-[113px] h-[101px] rounded-[11px] mb-11'>
                        <img src='/images/sidebar/prof.png' alt='Prof' />
                    </div>
                    <div className='mb-10'>
                        <p className='font-bold'>محمد نصیری</p>
                        <p className='text-sm font-normal'>09374143663</p>
                    </div>
                </div>


                {prof.map((item) => {
                    return (
                        <div key={item.id} >
                            <ul className='text-[#404040]'>

                                <li className='h-11'>

                                    <Link href={`${item.pathname}`} className='flex items-center gap-2'>
                                        <div className='flex items-center gap-4'>
                                            <div className={`${link === item.pathname ? 'border-solid border-2 border-[#008000] rounded-full h-10' : 'border-solid border-2 border-[#FBFBFB] rounded-full h-10'}`} />
                                            <div className='flex items-center gap-2'>
                                                <div>{link === item.pathname ? <Image src={`${item.icon_selected}`} alt='icon' width={24} height={24} /> : <Image src={`${item.icon}`} alt='icon' width={24} height={24} />}</div>
                                                <div className={`${link === item.pathname ? 'text-[#008000]' : 'text-[#212121]'} `}>{item.title}</div>
                                            </div>
                                        </div>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    )

                })}

                <Button_exit />


            </div>


        </div>
    )
}

export default Sidebar



