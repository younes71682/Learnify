import { color } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Button_exit from '../button/Button_exit'



const Sidebar = () => {

    const prof = [
        { id: 1, title: "نمای کلی", pathname: "/Info_user", icon: "/icon/admin/sidbar/overwiew.svg" },
        { id: 2, title: "آمار", pathname: "/My_training", icon: "/icon/admin/sidbar/statistics.svg" },
        { id: 3, title: "پشتیبانی", pathname: "/Your_comments", icon: "/icon/admin/sidbar/Support.svg" },
        { id: 4, title: "تراکنش مالی", pathname: "/Order_history", icon: "/icon/admin/sidbar/Financial_transactions.svg" },
        { id: 5, title: "وضعیت دوره ها", pathname: "/Notification", icon: "/icon/admin/sidbar/Status_courses.svg" },
        { id: 6, title: "وضعیت واریز ها", pathname: "/Notification", icon: "/icon/admin/sidbar/Status_deposits.svg" },
        { id: 7, title: "وبلاگ", pathname: "/Notification", icon: "/icon/admin/sidbar/weblog.svg" },
    ]

    const [selected, setSelected] = useState(1)

    const showStyle = (id: any) => {
        setSelected(!selected === id ? null : id)
    }

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

                                <li onClick={() => showStyle(item.id)} className='h-11'>
                                    {selected === item.id ?
                                        <div className='flex items-center gap-4 '>
                                            <div className='border-solid border-2 border-[#008000] rounded-full h-10' />
                                            <Link href={`profile/${item.pathname}`} className='flex items-center gap-2'>
                                                <div><Image src={`${item.icon}`} alt='icon' width={24} height={24} className="green-icon" /></div>
                                                <div className='text-[#008000]'>{item.title}</div>
                                            </Link>
                                        </div>
                                        :
                                        <div className='flex items-center gap-4  '>
                                            <div className='border-solid border-2 border-[#FBFBFB] rounded-full h-10' />

                                            <Link href={`profile/${item.pathname}`} className='flex items-center gap-2'>
                                                <div><Image src={`${item.icon}`} alt='icon' width={24} height={24} /></div>
                                                <div>{item.title}</div>
                                            </Link>
                                        </div>
                                    }
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



