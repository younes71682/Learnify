
import { useState } from 'react';
import Link from 'next/link';
import Dropdown from '@/components/layout/Dropdown';
import Image from 'next/image';
import MenoNavbar from './MenoNavbar';
import { useSelector } from 'react-redux';
import Login_Modal from './Login_Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Navbar = () => {



    const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

    const [showSearchInput, setShowSearchInput] = useState<boolean>(false)

    const handleShowSearch = (e: any) => {
        e.stopPropagation()
        setShowSearchInput(true)
    }


    const Token = useSelector((state: any) => state.TOKEN.Token)
    console.log('ddd', Token)

    return (

        <div onClick={() => setShowSearchInput(false)} className=" flex justify-center rounded-b-[40px] shadow-lg h-[92px] ">

            <div className='flex items-center justify-between w-[86%]'>

                <div className='lg:hidden'>
                    <MenoNavbar />
                </div>

                <div className='w-[186px] h-[86px] flex max-sm:hidden'>
                    <img className="w-full " src='/images/global/Rectangle.png' />
                </div>

                <div className='flex items-center w-[228px] pt-6  max-lg:hidden'>
                    <ul className="flex justify-between flex-1 ">
                        <li><Dropdown /></li>
                        <li><Link href="/modares">تدریس کنید</Link></li>
                        <li><Link href="/user/blog">وبلاگ</Link></li>
                    </ul>
                </div>


                <div className="flex justify-end gap-3 items-center h-[40px] w-[60%] max-xl:w-[50%] max-lg:w-min">
                    <div className="flex justify-end gap-2 items-center max-lg:hidden">

                        {showSearchInput === true ?
                            (<div className='flex relative'>
                                <input type='text' onClick={(e) => e.stopPropagation()} className='rounded-xl flex w-[250px] border-0 focus:ring-[#008000]  bg-[#ededed]' placeholder='جستجو کنید...' />
                                <img className=' w-[24px] absolute top-2  left-2 cursor-pointer' src="/icon/user/home_page/navbar/search.svg" alt="Search" />
                            </div>)
                            :
                            (<img className='cursor-pointer' onClick={handleShowSearch} src="/icon/user/home_page/navbar/search.svg" alt="Search"

                            />)}
                        <Link href='/user/cart'>
                            <Image className='w-[24px]' src="/icon/user/home_page/navbar/shopping_cart.svg" alt="Shopping_cart Logo" width={24} height={24} />
                        </Link>
                    </div>

                    {Token ?
                        <Link href="/modares/profile" className=" flex justify-center items-center cursor-pointer border-solid border-[1px] border-[#008000] rounded-[12px] w-[109px] h-[40px]" >
                            <p className="text-[#008000]">حساب کاربری</p>
                        </Link>
                        :
                        <div className="flex justify-center items-center cursor-pointer bg-[#008000] border-solid border-[1px] border-[#008000] rounded-[12px] w-[109px] h-[40px] max-sm:w-[85px]"
                            onClick={() => {
                                setLoginModalOpen(true)
                            }}>
                            <p className="text-white text-xs sm:text-base">ورود کاربر</p>
                        </div>
                    }
                </div>

            </div>
            <Login_Modal isLoginModalOpen={isLoginModalOpen} setLoginModalOpen={setLoginModalOpen} />
            <ToastContainer style={{ direction: 'rtl', }} autoClose={4000} />
        </div >
    );
};

export default Navbar;
