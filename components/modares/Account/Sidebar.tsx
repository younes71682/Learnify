import { color } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Wallet from './Wallet'
import Button_exit from '@/components/button/Button_exit'



const Sidebar = () => {

    const prof = [
        { id: 1, title: "دوره ها", pathname: "", icon: "/icon/modares/sidbar/courses.svg" },
        { id: 2, title: "ویرایش دوره", pathname: "edit_course", icon: "/icon/modares/sidbar/edit.svg" },
        { id: 3, title: "اطلاعات استاد", pathname: "info_teacher", icon: "/icon/user/account/info_user/user.svg" },
        { id: 4, title: "امور مالی", pathname: "financial", icon: "/icon/modares/sidbar/financial.svg" },
        { id: 5, title: "نظرات", pathname: "comments", icon: "/icon/modares/sidbar/comments.svg" },
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
                                            <Link href={`${item.pathname}`} className='flex items-center gap-2'>
                                                <div><Image src={`${item.icon}`} alt='icon' width={24} height={24} className="green-icon" /></div>
                                                <div className='text-[#008000]'>{item.title}</div>
                                            </Link>
                                        </div>
                                        :
                                        <div className='flex items-center gap-4  '>
                                            <div className='border-solid border-2 border-[#FBFBFB] rounded-full h-10' />

                                            <Link href={`${item.pathname}`} className='flex items-center gap-2'>
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

<Button_exit/>


            </div>

            <Wallet />

        </div>
    )
}

export default Sidebar



