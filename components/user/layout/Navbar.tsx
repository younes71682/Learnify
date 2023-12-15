import { useEffect, useState } from 'react';
import Dropdown from "./Dropdown";


const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const [checkPhoneNumber, setCheckPhoneNumber] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState('')


  const handleCloseModule = () => {
    setLoginModalOpen(false)
    setCheckPhoneNumber(false)
  }

  const handleCheckPhoneNumber = () => {
    setLoginModalOpen(false)
    setCheckPhoneNumber(true)
    setSeconds(120)
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
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  console.log("phoneNumber", phoneNumber)

  return (
    <div className="rounded-b-[40px] shadow-lg h-[92px]">
      <div className="flex flex-1 items-center justify-between px-[130px]">
        <div className="flex gap-8">
          <img className="w-[186px] h-[86px] mt-[5px]" src='/images/global/Rectangle.png' />
          <div>
            <ul className="flex gap-8 mt-[42px]">
              <li><Dropdown /></li>
              <li>تدریس کنید</li>
              <li>وبلاگ</li>
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
          <div className="border-solid border-[1px] border-[#008000] rounded-[12px]" onClick={() => setLoginModalOpen(true)}>
            <p className="text-[#008000] flex py-2 px-[14px] cursor-pointer">ورود | ثبت نام</p>
          </div>
        </div>
      </div>
      {isLoginModalOpen && (
        < div className="fixed  inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-center w-[436px] h-[333px] pt-20 rounded shadow-lg">
            <p className="text-lg font-bold">به لرنیفای خوش اومدی!</p>
            <p className="text-sm font-normal mt-2">به لرنیفای خوش اومدی!
              برای عضویت شماره موبایل خودت را وارد کن</p>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="rounded-lg w-[179px] h-[48px] text-sm text-center mt-3" placeholder="شماره موبایل خود را وارد کنید" />
            <div><button onClick={handleCheckPhoneNumber} className="bg-[#008000] text-white mt-3 rounded-lg h-[40px] w-[179px]" >ادامه</button></div>
            <button onClick={handleCloseModule} className="">x</button>
          </div>
        </div>
      )
      }
      {checkPhoneNumber && (
        < div className="fixed  inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-center w-[436px] h-[333px] pt-12 rounded shadow-lg">
            <p className=" mx-auto text-sm text-[#545454] ">
              کد ارسال شده به شماره موبایل<br />
              <span className="mx-1"> {phoneNumber}</span>
              را وارد کنید
            </p>
            <input className="rounded-lg w-[179px] h-[48px] text-sm text-center mt-3" type="text" />
            <div><button className="bg-[#008000] text-white mt-3 rounded-lg h-[40px] w-[179px]" >تایید</button></div>
            <p className="text-[#484848] text-sm mt-3 cursor-pointer w-fit mx-auto">تعویض شماره</p>
            <div className="text-[#484848] text-sm mt-2 cursor-pointer w-fit mx-auto">دریافت مجدد کد</div>
            <div>{formatTime(seconds)}</div>
            <div> <button onClick={handleCloseModule} className="">x</button></div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Navbar;
