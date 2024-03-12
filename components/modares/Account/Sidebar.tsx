import { color } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Wallet from './Wallet'
import Button_exit from '@/components/button/Button_exit'
import { usePathname } from 'next/navigation'



const Sidebar = () => {

    const prof = [
        { id: 1, title: "دوره ها", pathname: "/modares/profile", icon: "/icon/modares/sidbar/courses.svg", icon_selected: "/icon/modares/sidbar/icon_green/courses.svg" },
        { id: 2, title: "ویرایش دوره", pathname: "/modares/profile/editcourse", icon: "/icon/modares/sidbar/edit.svg", icon_selected: "/icon/modares/sidbar/icon_green/edit.svg" },
        { id: 3, title: "اطلاعات استاد", pathname: "/modares/profile/infoteacher", icon: "/icon/user/account/info_user/user.svg", icon_selected: "/icon/user/account/info_user/user_green.svg" },
        { id: 4, title: "امور مالی", pathname: "/modares/profile/financial", icon: "/icon/modares/sidbar/financial.svg", icon_selected: "/icon/modares/sidbar/icon_green/financial.svg" },
        { id: 5, title: "نظرات", pathname: "/modares/profile/comments", icon: "/icon/modares/sidbar/comments.svg", icon_selected: "/icon/modares/sidbar/icon_green/comments.svg" },
    ]



    const link = usePathname()

    return (
        <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[782px] w-[270px] py-8 justify-between'>

            <div>
                <div className='flex items-center gap-5 pr-4'>
                    <div className='w-[113px] h-[101px] rounded-[11px] mb-11'>
                        <img src='/images/sidebar/prof.png' alt='Prof' />
                    </div>
                    <div className='mb-10'>
                        <p className='font-bold'>محمد نصیری</p>
                        <p className='text-sm font-normal font-Byekan'>09374143663</p>
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

            <Wallet />

        </div>
    )
}

export default Sidebar



