import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { Teaching_Fetch } from "../api/modares/Teaching_Fetch";
type Category = {
    category_id: number,
    category: string,
    course_count: number
}


const Dropdown = () => {



    const { dataCategory } = Teaching_Fetch()
    const courses = dataCategory?.data.categories



    return (
        <div>

            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="300" data-dropdown-trigger="hover" className="inline-flex items-center outline-0" type="button">
                <p>دوره ها</p>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownDelay" className="z-10 hidden bg-[#FFF]  py-4  rounded-lg  shadow w-[18rem]">
                {courses?.map((i: Category, ind: number) => {
                    return (
                        <div key={i.category_id} className="">
                            <ul className="flex flex-col px-6 py-1.5  " aria-labelledby="dropdownDelayButton">
                                <li className="border-solid border-white border-[1px]  hover:border-[#008000] rounded-[10px] hover:text-[#008000]">
                                    <div className="flex items-center gap-[6px] text-[1.125rem] p-3">
                                        {ind === 0 && <img src='/images/user/home_page/dropdown/graphic_design.png' alt='Graphic_Design' className="w-[24px]" />}
                                        {ind === 1 && <img src='/images/user/home_page/dropdown/browser.png' alt='Browser' className="w-[24px]" />}
                                        {ind === 2 && <img src='/images/user/home_page/dropdown/cyber_security.png' alt='Cyber_SSecurity' className="w-[24px]" />}
                                        {ind === 3 && <img src='/images/user/home_page/dropdown/monitor.png' alt='Monitor' className="w-[24px]" />}
                                        {ind === 4 && <img src='/images/user/home_page/dropdown/mobile_coding.png' alt='Mobile_Coding' className="w-[24px]" />}
                                        {ind === 5 && <img src='/images/user/home_page/dropdown/custom_coding.png' alt='Custom_Coding' className="w-[24px]" />}
                                        {ind === 6 && <img src='/images/user/home_page/dropdown/menu.png' alt='Meno' className="w-[24px]" />}
                                        {ind === 7 && <img src='/images/user/home_page/dropdown/movie.png' alt='Movie' className="w-[24px]" />}
                                        <Link href="/user/courses">{i.category}</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Dropdown
