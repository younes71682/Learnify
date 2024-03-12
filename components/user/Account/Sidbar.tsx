import Update_Info from '@/components/api/modares/Update_Info'
import Button_exit from '@/components/button/Button_exit'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, useState } from 'react'

type SIDEBAR = {
  id: number
  title: string
  pathname: string
  icon: string
  icon_selected: string
}


const Sidbar = () => {

  const { data_Show_Information } = Update_Info()

  const info = data_Show_Information?.data.data
  const name = info?.name
  const phone_number = info?.phone_number


  const prof: SIDEBAR[] = [
    { id: 1, title: "اطلاعات کاربری", pathname: "/user/profile", icon: "/icon/user/account/info_user/user.svg", icon_selected: "/icon/user/account/info_user/user_green.svg" },
    { id: 2, title: "آموزش‌های من", pathname: "/user/profile/mytraining", icon: "/icon/user/account/info_user/education.svg", icon_selected: "/icon/user/account/info_user/education_green.svg" },
    { id: 3, title: "نظرات شما", pathname: "/user/profile/yourcomments", icon: "/icon/user/account/sidebar/comments.svg", icon_selected: "/icon/user/account/sidebar/icon_green/comments.svg" },
    { id: 4, title: "تاریخچه سفارش‌ها", pathname: "/user/profile/orderhistory", icon: "/icon/user/account/sidebar/history.svg", icon_selected: "/icon/user/account/sidebar/icon_green/history.svg" },
    { id: 5, title: "اعلان ها", pathname: "/user/profile/notification", icon: "/icon/user/account/sidebar/notification.svg", icon_selected: "/icon/user/account/sidebar/icon_green/notification.svg" },
  ]

  const link = usePathname()


  return (

    <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[782px] w-[270px] pt-8 max-lg:hidden '>

      <div className='flex items-center gap-5 pr-4'>
        <div className='w-[113px] h-[101px] rounded-[11px] mb-11'>
          <img src='/images/sidebar/prof.png' alt='Prof' />
        </div>
        <div className='mb-10'>
          <p className='font-bold'>{name}</p>
          <p className='text-sm font-normal'>{phone_number}</p>
        </div>
      </div>

      <div>
        {prof.map((item) => {
          return (
            <div key={item.id} className=''>
              <ul className='text-[#404040]'>

                <li className='h-11'>

                  <Link href={`${item.pathname}`} className='flex items-center gap-2 '>
                    <div className='flex items-center gap-4 '>
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

export default Sidbar


