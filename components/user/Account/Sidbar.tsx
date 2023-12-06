import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Sidbar = () => {

  const prof = [
    { id: 1, title: "اطلاعات کاربری", pathname: "/Info_user", icon: <Image src="/icon/user/account/info_user/user.svg" alt='User' width={24} height={24} /> },
    { id: 2, title: "آموزش‌های من", pathname: "/My_training", icon: <Image src="/icon/user/account/info_user/education.svg" alt='Education' width={24} height={24} /> },
    { id: 3, title: "نظرات شما", pathname: "/Your_comments", icon: <Image src="/icon/user/account/sidebar/comments.svg" alt='Comments' width={24} height={24} /> },
    { id: 4, title: "تاریخچه سفارش‌ها", pathname: "/Order_history", icon: <Image src="/icon/user/account/sidebar/history.svg" alt='History' width={24} height={24} /> },
    { id: 5, title: "اعلان ها", pathname: "/Notification", icon: <Image src="/icon/user/account/sidebar/notification.svg" alt='Notification' width={24} height={24} /> },
    { id: 6, title: "خروج از حساب کاربری", pathname: "", icon: <Image src="/icon/user/account/" alt='' width={24} height={24} /> }
   ]
 
 

  return (
    <div className='flex flex-col w-[17%] m-3 pr-4 pt-9 shadow-[0px_0px_20px_rgba(0,0,0,0.5)]'>
      <div className='flex items-center gap-5'>
        <div><img  src='/images/sidebar/prof.png' alt='Prof'/></div>
        <div className='mb-10'>
          <p className='font-bold'>محمد نصیری</p>
          <p className='text-sm font-normal'>09374143663</p>
        </div>
      </div>
      {prof.map((item) => {
        return (
          <div key={item.id} >
            <ul className='flex'>
              <li className='flex items-center gap-6 py-3'>{item.icon}<Link href={`/profile/${item.pathname}`}>{item.title}</Link></li>
             </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Sidbar


// import React from 'react'
// import Info_user from './Info_user'
// import My_training from './My_training'
// import Link from 'next/link'

// const Sidbar = () => {
//   return (
//     <div>
      

// <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
//     <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
//         <li className="me-2" role="presentation">
// <Link href="/profile/Info_user">prof</Link>
//         </li>
//         <li className="me-2" role="presentation">
//             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Dashboard</button>
//         </li>
//         <li className="me-2" role="presentation">
//             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
//         </li>
//         <li role="presentation">
//             <button className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Contacts</button>
//         </li>
//     </ul>
// </div>
// <div id="default-tab-content">
//     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
// <Info_user/> 
//    </div>
//     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
// <My_training/>
//     </div>
//     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
//         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
//     </div>
//     <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
//         <p className="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
//     </div>
// </div>

//     </div>
//   )
// }

// export default Sidbar
