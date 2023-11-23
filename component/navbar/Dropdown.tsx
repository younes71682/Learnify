import React,{ useState } from "react";

const Dropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

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
            <ul className={`dropdown-menu w-[17.5rem] ${isDropdownOpen ? " show" : ""}`}>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/graphic_design.png" alt="Graphic_Design"/><a className="dropdown-item text-[1.125rem] font-medium text-righ flex" href="#">فیلم و انیمیشن</a></li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/browser.png" alt="Browser.png"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">برنامه نویسی</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/cyber_security.png" alt="Cyber_Security"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">امنیت شبکه</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/monitor.png" alt="Monitor.png"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">نرم‌افزارهای کاربردی</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/mobile_coding.png" alt="Mobile_Coding"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">توسعه موبایل</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/custom_coding.png" alt="Custom_Coding"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">نرم افزارهای مهندسی</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/menu.png" alt="Menu"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">توسعه وب</a> </li>
                <li className="flex items-center text-right p-3"><img src="/images/dropdown/movie.png" alt="Movie"/><a className="dropdown-item text-[1.125rem] font-medium" href="#">طراحی</a> </li>
             </ul>
        </div>
    );
}





export default Dropdown
