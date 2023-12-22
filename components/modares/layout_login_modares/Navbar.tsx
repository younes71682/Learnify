import React from 'react'
import Link from 'next/link';
import Dropdown from '@/components/layout_main/Dropdown';


const Navbar = () => {

    return (
        <div className="rounded-b-[40px] shadow-lg h-[92px]">
            <div className="flex flex-1 items-center justify-between px-[130px]">
                <div className="flex gap-8">
                    <img className="w-[186px] h-[86px] mt-[5px]" src='/images/global/Rectangle.png' />
                    <div>
                        <ul className="flex gap-8 mt-[42px]">
                            <li><Dropdown /></li>
                            <li><Link href="/">تدریس کنید</Link></li>
                            <li><Link href="/">وبلاگ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-8 mt-3">
                    <div className="flex gap-4">
                        <img
                            src="/icon/user/home_page/navbar/search.svg"
                            alt="Search"
                        />
                        <img
                            src="/icon/user/home_page/navbar/shopping_cart.svg"
                            alt="Shopping_cart Logo"
                        />
                    </div>
                    <div className='flex items-center gap-3 justify-center w-[218px]'>
                        <div className="border-solid border-[1px] border-[#008000] rounded-[12px] flex justify-center items-center w-[50%] h-[40px]" >
                            <p className="text-[#008000] flex cursor-pointer">ورود مدرس</p>
                        </div>
                        <div className=" bg-[#393] rounded-[12px] flex justify-center items-center w-[50%] h-[40px]" >
                            <p className="text-[#FFF] flex cursor-pointer">ورود کاربر</p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Navbar;
