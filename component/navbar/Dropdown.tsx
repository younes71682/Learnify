import Link from "next/link";
import React, { useState } from "react";

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isclickitem, setIsclickitem] = useState('black')

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };
    
    const handleMouseitem = () => {
    
            setIsclickitem('green')
        
    }

    const handleMouseitemLeave = () => {
        setIsclickitem('black')
    }

    return (
        <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className="flex items-center gap-2 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                دوره ها
            </button>
            <ul className={`dropdown-menu w-[17.5rem] text-right ${isDropdownOpen ? " show" : ""}`}>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/graphic_design.png" alt="Graphic_Design"/><Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">فیلم و انیمیشن</Link></li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/browser.png" alt="Browser.png"/>          <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">برنامه نویسی</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/cyber_security.png" alt="Cyber_Security"/><Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">امنیت شبکه</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/monitor.png" alt="Monitor.png"/>          <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">نرم‌افزارهای کاربردی</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/mobile_coding.png" alt="Mobile_Coding"/>  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">توسعه موبایل</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/custom_coding.png" alt="Custom_Coding"/>  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">نرم افزارهای مهندسی</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/menu.png" alt="Menu"/>                    <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">توسعه وب</Link> </li>
                <li className="flex items-center text-right m-3 hover:border-solid hover:border-[#008000] hover:border-2 rounded-[10px] hover:text-[#008000]"><img src="/images/dropdown/movie.png" alt="Movie"/>                  <Link className="text-[1.125rem] font-medium flex no-underline hover:text-[#008000] m-2	" href="#">طراحی</Link> </li>
            </ul>
        </div>
    );
}





export default Dropdown


// import React, { useState } from 'react';

// const ColorChangingText = () => {
//   const [color, setColor] = useState('black');

//   const changeColor = () => {
//     setColor('red');
//   };

//   return (
//     <div style={{ color: color, cursor: 'pointer' }} onClick={changeColor}>
//       این یک متن است. کلیک کنید تا رنگ آن تغییر کند.
//     </div>
//   );
// };

// export default ColorChangingText;

