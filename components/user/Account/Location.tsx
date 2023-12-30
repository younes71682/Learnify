
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { type } from 'os';

 



const Location = () => {


    const state = [
        { id: 1, value: "tehran", label: "تهران" },
        { id: 1, value: "mashhad", label: "مشهد" },
        { id: 1, value: "esfahan", label: "اصفهان" },
    ]

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        console.log("dd",setAge)
      };

    const city = [
        { id: 1, value: "tehran", label: "تهران" },
        { id: 1, value: "shahriar", label: "شهریار" },
        { id: 1, value: "varamin", label: "ورامین" },
    ]


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

                    <FormControl sx={{
                        m: 1, minWidth: 140, margin: 0, padding: 0, color: "008000", colorRendering: "0080000", bgcolor: "#f8f", '&:focus': {
                            ring: '#008000',
                            border: '#008000',
                        },
                    }}>
                        <Select sx={{
                            borderRadius: 3, textAlign: 'left', height: 48, color: '008000', bgcolor: "#ff8", '&:focus': {
                                ring: '#008000',
                                border: '#008000',

                            },
                        }}

                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                            MenuProps={{ sx: { textAlign: 'right', } }} // تنظیم به راست بودن ایتم‌ها
                        // focus:ring-[#008000] focus:border-[#008000]
                        >

                            {city.map((i) => {
                                return (
                                    <MenuItem sx={{ bgcolor: "#FFF" }} className="hover:text-[#008000] border-solid border-2 border-white hover:border-solid hover:border-2 hover:border-[#008000] font-YekanBakhMedium py-0  hover:bg-white fous:text-[#008000] focus:bg-white">
                                        {i.label}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>

                </div>

                <div className='w-[55%]'>
                    <select {...register("city", { required: true })} id="countries" className="text-[#292D32] text-sm rounded-[10px] w-full h-[48px] focus:ring-[#008000] focus:border-[#008000] border-[#AAAAAA]">
                        <option selected>شهر</option>
                        {city.map((i) => {
                            return (
                                <option>
                                    {i.label}
                                </option>
                            )
                        })}
                    </select>
                </div>

            </div>
        </div >
    )
}

export default Location







// <option value="DE">آذربایجان شرقی</option>
// <option value="DE">آذربایجان غربی</option>
// <option value="DE">اردبیل</option>
// <option value="DE">اصفهان</option>
// <option value="DE">البرز</option>
// <option value="DE">ایلام</option>
// <option value="DE">بوشهر</option>
// <option value="DE">تهران</option>
// <option value="DE">چهارمحال و بختیاری</option>
// <option value="DE">خراسان جنوبی</option>
// <option value="DE">خراسان رضوی</option>
// <option value="DE">خراسان شمالی</option>
// <option value="DE">خوزستان</option>
// <option value="DE">زنجان</option>
// <option value="DE">سمنان</option>
// <option value="DE">سیستان و بلوچستان</option>
// <option value="DE">فارس</option>
// <option value="DE">قزوین</option>
// <option value="DE">قم</option>
// <option value="DE">کردستان</option>
// <option value="DE">کرمان</option>
// <option value="DE">کرمانشاه</option>
// <option value="DE">کهگیلویه و بویراحمد</option>
// <option value="DE">گلستان</option>
// <option value="DE">گیلان</option>
// <option value="DE">لرستان</option>
// <option value="DE">مازندران</option>
// <option value="DE">مرکزی</option>
// <option value="DE">هرمزگان</option>
// <option value="DE">همدان</option>
// <option value="DE">یزد</option>