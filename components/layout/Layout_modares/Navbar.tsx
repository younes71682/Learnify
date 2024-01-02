
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from '@/components/layout/Dropdown';


type FormeValue = {
    phoneNumber: string,
    login: string
}

const Navbar = () => {


    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const [checkPhoneNumber, setCheckPhoneNumber] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState('')

    const [showSearchInput, setShowSearchInput] = useState(false)

    const handleCloseModule = () => {
        setLoginModalOpen(false)
        setCheckPhoneNumber(false)
    }

    const handleShowSearch = (e: any) => {
        e.stopPropagation()
        setShowSearchInput(true)
    }

    const handleCheckPhoneNumber = () => {
        setLoginModalOpen(false)
        setCheckPhoneNumber(true)
        setSeconds(5)

    }

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return (`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`)
    };

    const handleChangePhoneNumber = () => {
        setLoginModalOpen(true)
        setCheckPhoneNumber(false)
    }

    const handleResendCode = () => {
        setSeconds(10)
    }




    const form = useForm<FormeValue>({
        defaultValues: {
            phoneNumber: "",
            login: ""
        }
    })

    const { register, formState, handleSubmit, control } = form
    const { errors } = formState
    const submit = (data: FormeValue) => {
        alert(JSON.stringify(data));
    }


    const rout = useRouter()
    const handlelogin = () => {
        rout.push("/user")
    }



    return (
        <div onClick={() => setShowSearchInput(false)} className=" flex justify-center  rounded-b-[40px] shadow-lg h-[92px]">
            <div className="flex  items-center justify-between w-[85%] ">

                <div className="flex w-[50%] gap-8">
                    <div className='w-[186px] h-[86px] mt-[5px]'>
                        <img className="w-full" src='/images/global/Rectangle.png' />
                    </div>

                    <div className='flex items-center w-[228px] pt-6'>
                        <ul className="flex justify-between w-full">
                            <li><Dropdown /></li>
                            <li><Link href="/modares">تدریس کنید</Link></li>
                            <li><Link href="/user/blog">وبلاگ</Link></li>
                        </ul>

                    </div>
                </div>

                <div className='flex items-center justify-end gap-3 w-[50%] h-full'>

                    <div className="flex justify-end gap-2 items-center w-[50%] h-[40px] ">

                        {showSearchInput === true ?
                            (<div className='flex relative'>
                                <input type='text' onClick={(e) => e.stopPropagation()} className='rounded-xl flex w-[280px] border-0 focus:ring-[#008000]  bg-[#ededed]' placeholder='جستجو کنید...' />
                                <img className=' w-[24px] absolute top-2  left-2 cursor-pointer' src="/icon/user/home_page/navbar/search.svg" alt="Search" />
                            </div>)
                            :
                            (<img className='cursor-pointer' onClick={handleShowSearch} src="/icon/user/home_page/navbar/search.svg" alt="Search"

                            />)}

                        <img className='w-[24px]' src="/icon/user/home_page/navbar/shopping_cart.svg" alt="Shopping_cart Logo" />

                    </div>

                    <div className=" flex justify-center items-center cursor-pointer border-solid border-[1px] border-[#008000] rounded-[12px] w-[109px] h-[40px]" onClick={() => setLoginModalOpen(true)}>
                        <p className="text-[#008000]">ورود | ثبت نام</p>
                    </div>

                </div>
            </div>




            {isLoginModalOpen && (
                < div onClick={handleCloseModule} className="fixed inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                    <form onClick={(e) => {
                        e.stopPropagation()
                        console.log('fsf')
                    }} className="bg-white flex flex-col items-center w-[30%] h-[333px] justify-center rounded-[15px] shadow-lg" onSubmit={handleSubmit(handleCheckPhoneNumber)} noValidate>

                        <div className='flex flex-col gap-3 items-center'>
                            <p className="text-lg font-bold">به لرنیفای خوش اومدی!</p>
                            <p className="text-sm font-normal ">به لرنیفای خوش اومدی!
                                برای عضویت شماره موبایل خودت را وارد کن</p>
                        </div>

                        <div className='flex flex-col items-center justify-between w-[179px] h-[103px] mt-4   '>

                            <div className='flex flex-col items-center w-full '>
                                <input type="text" maxLength={11} {...register("phoneNumber", { pattern: { value: /^[0-9]*$/i, message: "فرمت کد صحیح نمی باشد" }, required: true, })} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="rounded-lg flex w-full h-[48px] text-sm text-center border focus:ring-[#008000] focus:border-[#008000]" placeholder="شماره موبایل خود را وارد کنید" />
                                <p className='text-xs text-red-500 font-normal mt-2'>{errors.login?.message}</p>
                            </div>

                            <button className='flex justify-center items-center cursor-pointer bg-[#008000] text-white rounded-lg h-[40px] w-[179px]'>
                                ادامه
                            </button>
                        </div>

                    </form>
                </div>
            )}


            {checkPhoneNumber && (
                < div onClick={handleCloseModule} className="fixed inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                    <form onClick={(e) => {
                        e.stopPropagation()
                        console.log('fsf')
                    }} className="bg-white flex flex-col items-center w-[30%] h-[333px] justify-center rounded-[15px] shadow-lg" onSubmit={handleSubmit(handleCheckPhoneNumber)} noValidate>

                        <div className='flex flex-col items-center w-[179px] h-[230px]'>

                            <div className='text-center w-full '>
                                <p className="text-sm text-[#545454] ">
                                    کد ارسال شده به شماره موبایل <span className="mx-1"> {phoneNumber}</span>را وارد کنید
                                </p>
                            </div>

                            <div className='flex flex-col items-center justify-between w-[179px] h-[103px] mt-4   '>

                                <div className='flex flex-col items-center w-full'>
                                    <input maxLength={6} {...register("login", { pattern: { value: /^[0-9]*$/i, message: "فرمت کد صحیح نمی باشد" }, required: true, })} className="rounded-lg flex w-full h-[48px] text-sm text-center border focus:ring-[#008000] focus:border-[#008000]" type="text" />
                                    <p className='text-xs text-red-500 font-normal mt-2'>{errors.login?.message}</p>
                                    {errors.login?.type === 'required' && (<p className='text-xs text-red-500 font-normal mt-2'>کد ارسال شده را وارد کنید</p>)}
                                </div>

                                <div onClick={handlelogin} className='flex justify-center items-center cursor-pointer bg-[#008000] rounded-lg h-[40px] w-[179px]'>
                                    <p className="text-white">تایید</p>
                                </div>

                            </div>

                            <p onClick={handleChangePhoneNumber} className="text-[#484848] text-sm mt-3 cursor-pointer w-fit mx-auto">تعویض شماره</p>

                            {seconds != 0 ? (null) : (<div onClick={handleResendCode} className="text-[#484848] text-sm mt-2 cursor-pointer w-fit mx-auto">دریافت مجدد کد</div>)}

                            <div>{seconds != 0 ? (formatTime(seconds)) : (null)} </div>

                        </div>

                    </form>
                </div>
            )}

        </div >
    );
};

export default Navbar;
