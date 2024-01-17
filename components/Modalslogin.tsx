import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

type FormeValue = {
    phoneNumber: string,
    login: string
  }

const Modalslogin = () => {

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
        <div>
            {isLoginModalOpen && (
                < div onClick={handleCloseModule} className="fixed inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                    <form onClick={(e) => {
                        e.stopPropagation()
                        console.log('fsf')
                    }} className="bg-white flex flex-col items-center w-[30%] h-[45vh] justify-center gap-2  rounded-[15px] shadow-lg" onSubmit={handleSubmit(handleCheckPhoneNumber)} noValidate>
                        <div className='flex flex-col gap-3 items-center'>
                            <p className="text-lg font-bold">به لرنیفای خوش اومدی!</p>
                            <p className="text-sm font-normal ">به لرنیفای خوش اومدی!
                                برای عضویت شماره موبایل خودت را وارد کن</p>
                        </div>
                        <div className='flex flex-col items-center justify-between gap-'>
                            <input type="text" maxLength={11} {...register("phoneNumber", { pattern: { value: /^[0-9]*$/i, message: "فرمت کد صحیح نمی باشد" }, required: true, })} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="rounded-lg flex h-[7vh] text-sm text-center border focus:ring-[#008000] focus:border-[#008000]  " placeholder="شماره موبایل خود را وارد کنید" />
                            <div>
                                <p className='text-xs text-red-500 font-normal mt-2'>{errors.login?.message}</p>
                            </div>
                        </div>
                        <div><button className="bg-[#008000] text-white mt-3 rounded-lg h-[40px] w-[179px]" >ادامه</button></div>
                    </form>
                </div>
            )
            }
            {checkPhoneNumber && (
                < div onClick={handleCloseModule} className="fixed  inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                    <form onClick={(e) => {
                        e.stopPropagation()
                        console.log('fsf')
                    }} className="bg-white flex flex-col items-center w-[30%] h-[45vh] justify-center gap-2  rounded-[15px] shadow-lg" onSubmit={handleSubmit(handleCheckPhoneNumber)} noValidate>
                        <p className=" mx-auto text-sm text-[#545454] ">
                            کد ارسال شده به شماره موبایل<br />
                            <span className="mx-1"> {phoneNumber}</span>
                            را وارد کنید
                        </p>
                        <div>
                            <input maxLength={6} {...register("login", { pattern: { value: /^[0-9]*$/i, message: "فرمت کد صحیح نمی باشد" }, required: true, })}
                                className="rounded-lg flex h-[40px] text-sm focus:ring-[#008000] focus:border-[#008000]  text-center outline-none " type="text" />
                            <div>
                                <p className='text-xs text-red-500 font-normal mt-2'>{errors.login?.message}</p>
                                {errors.login?.type === 'required' && (<p className='text-xs text-red-500 font-normal mt-2'>کد ارسال شده را وارد کنید</p>)}
                            </div>
                        </div>
                        <div onClick={handlelogin} className='flex justify-center items-center bg-[#008000] w-[37%] h-[40px] rounded-lg'><p className=" text-white">تایید</p></div>
                        <p onClick={handleChangePhoneNumber} className="text-[#484848] text-sm mt-3 cursor-pointer w-fit mx-auto">تعویض شماره</p>
                        {seconds != 0 ? (null
                        ) : (<div onClick={handleResendCode} className="text-[#484848] text-sm mt-2 cursor-pointer w-fit mx-auto">دریافت مجدد کد</div>)}
                        <div>{seconds != 0 ? (formatTime(seconds)) : (null)} </div>
                    </form>
                </div>
            )
            }
        </div>
    )
}

export default Modalslogin