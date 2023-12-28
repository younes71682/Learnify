import React from 'react'

import Image from 'next/image'
import { useFormContext } from 'react-hook-form'


const Location = () => {
    const form = useFormContext()
    const { register } = form
    return (
        <div className='flex flex-col w-[28%] h-full pt-5 pr-4 pb-8 gap-6 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/location.svg' alt='icon' width={24} height={24} />
                <h2>محل سکونت</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-[55%]'>

                    <select {...register("state",{required:true})} id="countries" className="text-[#292D32] text-sm rounded-[10px] w-full h-[48px] focus:ring-[#008000] focus:border-[#008000]  border-[#AAAAAA]">
                        <option selected>استان</option>
                        <option value="DE">آذربایجان شرقی</option>
                        <option value="DE">آذربایجان غربی</option>
                        <option value="DE">اردبیل</option>
                        <option value="DE">اصفهان</option>
                        <option value="DE">البرز</option>
                        <option value="DE">ایلام</option>
                        <option value="DE">بوشهر</option>
                        <option value="DE">تهران</option>
                        <option value="DE">چهارمحال و بختیاری</option>
                        <option value="DE">خراسان جنوبی</option>
                        <option value="DE">خراسان رضوی</option>
                        <option value="DE">خراسان شمالی</option>
                        <option value="DE">خوزستان</option>
                        <option value="DE">زنجان</option>
                        <option value="DE">سمنان</option>
                        <option value="DE">سیستان و بلوچستان</option>
                        <option value="DE">فارس</option>
                        <option value="DE">قزوین</option>
                        <option value="DE">قم</option>
                        <option value="DE">کردستان</option>
                        <option value="DE">کرمان</option>
                        <option value="DE">کرمانشاه</option>
                        <option value="DE">کهگیلویه و بویراحمد</option>
                        <option value="DE">گلستان</option>
                        <option value="DE">گیلان</option>
                        <option value="DE">لرستان</option>
                        <option value="DE">مازندران</option>
                        <option value="DE">مرکزی</option>
                        <option value="DE">هرمزگان</option>
                        <option value="DE">همدان</option>
                        <option value="DE">یزد</option>
                    </select>
                </div>

                <div className='w-[55%]'>
                    <select {...register("city",{required:true})} id="countries" className="text-[#292D32] text-sm rounded-[10px] w-full h-[48px] focus:ring-[#008000] focus:border-[#008000] border-[#AAAAAA]">
                        <option selected>شهر</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Location
