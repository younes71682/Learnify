import Image from 'next/image';
import React, { useState } from 'react'
import Switch from "react-switch";

type Item = {
    id: number,
    season: string,
    lesson: string,
    time: string,
}



export const Step2 = () => {

    const [lessonVisible, setLessonVisible] = useState<boolean>(false)


    const switchVisibility = () => {
        setLessonVisible(!lessonVisible)
    }

    const [item, setItem] = useState<Item[]>([])
    const [inputseasonvalue, setInputSeasonValue] = useState<string>("")
    const [inputlessonvalue, setInputLessonValue] = useState<string>("")
    const [inputtimevalue, setInputTimeValue] = useState<string>("")

    const handleADDChapter = () => {
        const add = {
            id: Math.floor(Math.random() * 100),
            season: inputlessonvalue,
            lesson: inputlessonvalue,
            time: inputtimevalue,
        }
        setItem([...item, add])
    }



    return (
        <div className='flex justify-center items-center w-[100%] bg-red-500'>
            <div className='bg-[#F4F4F4] w-[90%]'>


                {item.map((i) => {
                    return (
                        <div className='flex justify-between'>

                            <div className='flex flex-col w-[204px]'>

                                <div className='flex justify-between'>
                                    <p className='text-lg font-bold'>فصل1</p>
                                    <Image src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />
                                </div>
                                <div><input value={inputseasonvalue} onChange={setInputSeasonValue} placeholder='عنوان فصل' className='w-full border-solid border-2 border-[#AAAAA] rounded-[10px] h-[48px]' /></div>

                            </div>

                            <div className='flex flex-col w-[204px]'>

                                <div className='flex justify-between'>
                                    <p className='text-lg font-bold'>فصل1</p>
                                    <Image src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />
                                </div>
                                <div><input value={inputlessonvalue} onChange={setInputLessonValue} placeholder='عنوان درس' className='w-full border-solid border-2 border-[#AAAAA] rounded-[10px] h-[48px]' /></div>

                            </div>

                            <div className='flex flex-col w-[204px]'>

                                <div className='flex justify-between'>
                                    <p className='text-lg font-bold'>زمان</p>
                                </div>
                                <div><input value={inputtimevalue} onChange={setInputTimeValue} placeholder='47 دقیقه' className='w-full border-solid border-2 border-[#AAAAA] rounded-[10px] h-[48px]' /></div>

                            </div>

                            <div className='flex flex-col items-center justify-between h-[66px]'>
                                <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                <Switch className='' onColor='#008000' onChange={switchVisibility} checked={lessonVisible} />
                            </div>

                            <div className='flex flex-col items-center justify-between h-[72px] w-[10%]'>
                                <p className='font-bold text-lg'>آپلود درس</p>
                                <label className='flex justify-center items-center w-full border-dashed border h-[40px] rounded-xl cursor-pointer bg-[#EFF6FF]  border-[#3B82F6]'>
                                    <input type="file" className='hidden w-full uploadBtn' />
                                    بارگذاری دوره
                                </label>
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Step2


