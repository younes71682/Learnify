import Link from 'next/link'
import React from 'react'

const index = () => {
    const user = [
        { id: 1, name: "اطلاعات کاربری",link:"/courses" },
        { id: 1, name: "آموزش های من",link:"/index" },
        { id: 1, name: "نظرات شما",link:"/landig" },
    ]
    return (
        <div>
            {user.map((item) => {
                return (
                    <div>
                        <li>
                            <Link href=
                                {item.link}
                            >{item.name}</Link>
                        </li>
                     </div>
                )
            })}

        </div>
    )
}

export default index













{/* <div>
<div className="flex mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul className="flex flex-col -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li className="me-2" role="presentation">
            <button className=" p-4 border-r-2" id="info_user-tab" data-tabs-target="#info_user" type="button" role="tab" aria-controls="profile" aria-selected="false">اطلاعات کاربری</button>
        </li>
        <li className="me-2" role="presentation">
            <button className=" p-4 border-r-2" id="my_training-tab" data-tabs-target="#my_training" type="button" role="tab" aria-controls="dashboard" aria-selected="false">آموزش های من</button>
        </li>
        <li className="me-2" role="presentation">
            <button className=" p-4 border-r-2" id="your_comments-tab" data-tabs-target="#your_comments" type="button" role="tab" aria-controls="settings" aria-selected="false">نظرات شما</button>
        </li>
        <li role="presentation">
            <button className=" p-4 border-r-2" id="order_history-tab" data-tabs-target="#order_history" type="button" role="tab" aria-controls="contacts" aria-selected="false">تاریخچه سفارش ها</button>
        </li>
        <li role="presentation">
            <button className=" p-4 border-r-2" id="notification-tab" data-tabs-target="#notification" type="button" role="tab" aria-controls="contacts" aria-selected="false">اعلان ها</button>
        </li>
        <li role="presentation">
            <button className=" p-4 border-r-2" id="exit-tab" data-tabs-target="#exit" type="button" role="tab" aria-controls="contacts" aria-selected="false">خروج از خساب کاربری</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div id="info_user" role="tabpanel" aria-labelledby="profile-tab">
        <p>salam1</p>
    </div>
    <div id="my_training" role="tabpanel" aria-labelledby="dashboard-tab">
        <p>salam2</p>
    </div>
    <div id="your_comments" role="tabpanel" aria-labelledby="settings-tab">
        <p>salam3</p>
    </div>
    <div id="order_history" role="tabpanel" aria-labelledby="contacts-tab">
        <p>salam4</p>
    </div>
    <div id="notification" role="tabpanel" aria-labelledby="contacts-tab">
        <p>salam4</p>
    </div>
    <div id="exit" role="tabpanel" aria-labelledby="contacts-tab">
        <p>salam5</p>
    </div>
</div>

</div> */}