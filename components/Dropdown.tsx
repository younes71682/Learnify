import Link from "next/link";
import React from 'react'

const Dropdown = () => {
    return (
        <div>

            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="300" data-dropdown-trigger="hover" className=" bg-stone-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><p>دوره ها</p><svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[17.5rem] dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/graphic_design.png" alt="Graphic_Design" /><Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">فیلم و انیمیشن</Link></li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/browser.png" alt="Browser.png" />          <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">برنامه نویسی</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/cyber_security.png" alt="Cyber_Security" /><Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">امنیت شبکه</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/monitor.png" alt="Monitor.png" />          <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">نرم‌افزارهای کاربردی</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/mobile_coding.png" alt="Mobile_Coding" />  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">توسعه موبایل</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/custom_coding.png" alt="Custom_Coding" />  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">نرم افزارهای مهندسی</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/menu.png" alt="Menu" />                    <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">توسعه وب</Link> </li>
                    <li className="flex items-center text-right m-3 border-solid border-white border-2 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/movie.png" alt="Movie" />                  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">طراحی</Link> </li>
                </ul>
            </div>

        </div>
    )
}

export default Dropdown
