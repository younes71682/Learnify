import Link from "next/link";
import React from 'react'

const Dropdown = () => {
    return (
        <div>

            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="300" data-dropdown-trigger="hover" className="inline-flex items-center outline-0" type="button">
                <p>دوره ها</p>
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[18rem]">
                <ul className="flex flex-col p-6 gap-2" aria-labelledby="dropdownDelayButton">
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/graphic_design.png" alt="Graphic_Design" className="w-[24px]" /><Link href="#">فیلم و انیمیشن</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/browser.png" alt="Browser.png" className="w-[24px]" />          <Link href="#">برنامه نویسی</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/cyber_security.png" alt="Cyber_Security" className="w-[24px]" /><Link href="#">امنیت شبکه</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/monitor.png" alt="Monitor.png" className="w-[24px]" />          <Link href="#">نرم‌افزارهای کاربردی</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/mobile_coding.png" alt="Mobile_Coding" className="w-[24px]" />  <Link href="#">توسعه موبایل</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/custom_coding.png" alt="Custom_Coding" className="w-[24px]" />  <Link href="#">نرم افزارهای مهندسی</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/menu.png" alt="Menu" className="w-[24px]" />                    <Link href="#">توسعه وب</Link></div></li>
                    <li className="border-solid border-white border-[1px] hover:border-[#008000] rounded-[10px] hover:text-[#008000]"><div className="flex items-center gap-[6px] text-[1.125rem] p-3"><img src="/images/dropdown/movie.png" alt="Movie" className="w-[24px]" />                  <Link href="#">طراحی</Link></div></li>
                </ul>
            </div>

        </div>
    )
}

export default Dropdown
