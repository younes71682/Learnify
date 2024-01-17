//@ts-nocheck
import Image from 'next/image';
import { list } from 'postcss';
import React, { useState } from 'react'
import Switch from "react-switch";
type Lessons = {
    id: number,
    season: string,
    time: string,

}

type Item = {
    id: number,
    season: string,
    time: string,
    Lessons: []
}




export const Step2 = () => {

    const [lessonVisible, setLessonVisible] = useState(false)

    const handletrue = (id) => {
        setLessonVisible(!lessonVisible)
    }

    const switchVisibility = () => {
        setLessonVisible(!lessonVisible)
    }


    const [item, setItem] = useState<Item[]>([{
        id: Math.floor(Math.random() * 100),
        season: '',
        lesson: [
            {
                id: Math.floor(Math.random() * 100),
                time: '',
            }
        ],
        time: '',
    }])
    const [inputseasonvalue, setInputSeasonValue] = useState<string>("")
    //@ts-ignore
    const [inputlessonvalue, setInputLessonValue] = useState<[]>([
        {
            id: Math.floor(Math.random() * 100),

            time: '',
        }
    ])
    const [inputtimevalue, setInputTimeValue] = useState<string>("")


    const handleADDChapter = () => {
        const add = {
            id: Math.floor(Math.random() * 100),
            season: '',
            see: true,
            lesson: [{
                id: '1',
                time: ""
            }],
            time: inputtimevalue,
        }
        setItem([...item, add])
    }

    const handleADDLesson = (index) => {
        const course = [...item]
        const lessonList = course[index]["lesson"]
        lessonList.push({
            autoId: course[index]["id"],
            id: Math.floor(Math.random() * 100),
            time: '',
        })
        setInputLessonValue(course)
    }

    console.log("course:", item)

    return (
        <div className='flex justify-center  items-center w-[100%] bg-red-500'>
            <div className='bg-[#F4F4F4] w-[90%]'>


                {item.map((i, ind) => {

                    return (
                        <div className=' border my-4 border-blue-500  flex gap-2 '>

                            <div className='flex flex-col w-[10%]'>

                                <div className='flex justify-between'>
                                    <p className='text-lg font-bold'>فصل {ind + 1} </p>
                                    {ind === 0 && (<Image onClick={handleADDChapter} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}

                                </div>
                                <div><input value={inputseasonvalue} onChange={setInputSeasonValue} placeholder='عنوان فصل' className='w-full border-solid border-2 border-[#AAAAA] rounded-[10px] h-[48px]' /></div>

                            </div>

                            <div className='w-full'>
                                {i.lesson.map((item, index) => {
                                    return (
                                        <div >
                                            <div className='border border-red-500  flex justify-between '>
                                                <div className='flex flex-col w-[204px]'>

                                                    <div className='flex justify-between'>
                                                        <p className='text-lg font-bold'>عنوان درس</p>
                                                        {index === 0 && (<Image onClick={() => {
                                                            handleADDLesson(ind, index)
                                                        }} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}

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
                                                    <input type="checkbox" />
                                                    <Switch className='' onColor='#008000' onChange={() => handletrue()}
                                                    />
                                                </div>

                                                <div className='flex flex-col items-center justify-between h-[72px] w-[10%]'>
                                                    <p className='font-bold text-lg'>آپلود درس</p>
                                                    <label className='flex justify-center items-center w-full border-dashed border h-[40px] rounded-xl cursor-pointer bg-[#EFF6FF]  border-[#3B82F6]'>
                                                        <input type="file" className='hidden w-full uploadBtn' />
                                                        بارگذاری دوره
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Step2


