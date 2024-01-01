import Image from "next/image";
import Link from "next/link";
import React from 'react'

const Dropdown = () => {

    const courses = [
        { id: 1, title: "فیلم و انیمیشن", img: "/images/user/home_page/dropdown/graphic_design.png", alt: "Graphic_Design" },
        { id: 2, title: "برنامه نویسی", img: "/images/user/home_page/dropdown/browser.png", alt: "Browser" },
        { id: 3, title: "امنیت شبکه", img: "/images/user/home_page/dropdown/cyber_security.png", alt: "Cyber_Security" },
        { id: 4, title: "نرم‌افزارهای کاربردی", img: "/images/user/home_page/dropdown/monitor.png", alt: "Monitor" },
        { id: 5, title: "توسعه موبایل", img: "/images/user/home_page/dropdown/mobile_coding.png", alt: "Mobile_Coding" },
        { id: 6, title: "نرم افزارهای مهندسی", img: "/images/user/home_page/dropdown/custom_coding.png", alt: "Custom_Coding" },
        { id: 7, title: "توسعه وب", img: "/images/user/home_page/dropdown/menu.png", alt: "Menu" },
        { id: 8, title: "طراحی", img: "/images/user/home_page/dropdown/movie.png", alt: "Movie" },
    ]

    return (
        <div>

            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="300" data-dropdown-trigger="hover" className="inline-flex items-center outline-0" type="button">
                <p>دوره ها</p>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownDelay" className="z-10 hidden bg-[#FFF]  py-4  rounded-lg  shadow w-[18rem]">
                {courses.map((i) => {
                    return (
                        <div className="">
                            <ul className="flex flex-col px-6 py-1.5  " aria-labelledby="dropdownDelayButton">
                                <li className="border-solid border-white border-[1px]  hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src={i.img} alt={i.alt} className="w-[24px]" /><Link href="/user/courses">{i.title}</Link></div></li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Dropdown
