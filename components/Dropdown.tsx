import Link from "next/link";
import React from 'react'

const Dropdown = () => {
    return (
        <div>

            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="300" data-dropdown-trigger="hover" className="inline-flex items-center" type="button">
                <p>دوره ها</p>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[18rem]">
                <ul className="flex flex-col p-6 gap-2" aria-labelledby="dropdownDelayButton">
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/graphic_design.png" alt="Graphic_Design" /><Link className=" py-3" href="#">فیلم و انیمیشن</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/browser.png" alt="Browser.png" />          <Link className=" py-3" href="#">برنامه نویسی</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/cyber_security.png" alt="Cyber_Security" /><Link className=" py-3" href="#">امنیت شبکه</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/monitor.png" alt="Monitor.png" />          <Link className=" py-3" href="#">نرم‌افزارهای کاربردی</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/mobile_coding.png" alt="Mobile_Coding" />  <Link className=" py-3" href="#">توسعه موبایل</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/custom_coding.png" alt="Custom_Coding" />  <Link className=" py-3" href="#">نرم افزارهای مهندسی</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/menu.png" alt="Menu" />                    <Link className=" py-3" href="#">توسعه وب</Link></div></li>
                    <li className="border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><div className="flex items-center mr-3 gap-[6px] text-[1.125rem]"><img src="/images/dropdown/movie.png" alt="Movie" />                  <Link className=" py-3" href="#">طراحی</Link></div></li>
                </ul>
            </div>

        </div>
    )
}

export default Dropdown
