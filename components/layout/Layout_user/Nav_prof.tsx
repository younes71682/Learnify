
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

const Nav_prof = () => {


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

          <Link href="/user/profile" className=" flex justify-center items-center cursor-pointer border-solid border-[1px] border-[#008000] rounded-[12px] w-[109px] h-[40px]" onClick={() => setLoginModalOpen(true)}>
            <p className="text-[#008000]">حساب کاربری</p>
          </Link>

        </div>
      </div>

    </div >
  );
};

export default Nav_prof;
