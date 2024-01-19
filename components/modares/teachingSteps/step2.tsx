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
    const [video, setVideo] = useState('')
    
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
                see: true,
                time: '',
            }
        ],
        time: '',
    }])
    const [inputseasonvalue, setInputSeasonValue] = useState<string>("")

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
                see: true,
                time: ""
            }],
            time: inputtimevalue,
        }
        setItem([...item, add])
    }


    // [{
    //     id: Math.floor(Math.random() * 100),
    //     season: '',
    //     lesson: [{
    //         id: '1',
    //         see: true,
    //         time: ""
    //     }],
    //     time: inputtimevalue,
    // },
    // {
    //     id: Math.floor(Math.random() * 100),
    //     season: '',
    //     lesson: [{
    //         id: '1',
    //         see: false,
    //         time: ""
    //     }],
    //     time: inputtimevalue,
    // }]

    const handleADDLesson = (index) => {
        const course = [...item]
        const lessonList = course[index]["lesson"]
        lessonList.push({
            autoId: course[index]["id"],
            id: Math.floor(Math.random() * 100),
            see: true,
            time: '',
        })
        setInputLessonValue(course)
    }

    const handleSeeLesson = (lessonId, chapterId) => {
        setItem((prevItems) => {
            const updatedItems = prevItems.map((chapter) => {
                if (chapter.id === chapterId) {
                    const updatedLessons = chapter.lesson.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, see: !lesson.see };
                        }
                        return lesson;
                    });
                    return { ...chapter, lesson: updatedLessons };
                }
                return chapter;
            });
            return updatedItems;
        });
    };

    const handleImg = (e) => {
        console.log('img', e.target.files)
        setVideo(e.target.files[0])
    }

    console.log('Course:', item)

    return (
        <div className='flex justify-center  items-center w-[100%] '>
            <div className='bg-[#F4F4F4] rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-10 px-20 w-[100%]'>
                <div className='font-bold mb-7 text-xl'>سرفصل ها</div>
                {item.map((i, ind) => {
                    return (
                        <div key={i.id} className='  my-4  flex gap-2 '>
                            <div className='flex flex-col w-[250px]'>
                                <div className='flex mb-3 justify-between'>
                                    <p className='text-lg font-bold'>فصل {ind + 1} </p>
                                    {ind === 0 && (<Image onClick={handleADDChapter} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                </div>
                                <div><input value={inputseasonvalue} onChange={setInputSeasonValue} placeholder='عنوان فصل' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                            </div>
                            <div className='w-full'>
                                {i.lesson.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            <div className=' mb-5 mr-12  flex justify-between '>
                                                <div className='flex flex-col  w-[204px]'>
                                                    <div className='flex mb-3 justify-between'>
                                                        <p className='text-lg font-bold'>عنوان درس {index + 1}</p>
                                                        {index === 0 && (<Image onClick={() => {
                                                            handleADDLesson(ind, index)
                                                        }} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                                    </div>
                                                    <div><input value='' onChange={setInputLessonValue} placeholder='عنوان درس' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                                                </div>
                                                <div className='flex flex-col  w-[206px]'>
                                                    <div className='flex mb-3 justify-between'>
                                                        <p className='text-lg font-bold'>زمان</p>
                                                    </div>
                                                    <div><input value={inputtimevalue} onChange={setInputTimeValue} placeholder='47 دقیقه' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                                                </div>
                                                <div className='flex flex-col items-center justify-between h-[66px]'>
                                                    <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                                    {/* <input type="checkbox" onChange={() => handleSeeLesson(item.id, i.id)} checked={item.see} /> */}
                                                    <Switch className='' checked={item.see} onColor='#008000' onChange={() => handleSeeLesson(item.id, i.id)} />
                                                </div>
                                                <div className='flex flex-col items-center  justify-between h-[72px] w-[10%]'>
                                                    <p className='font-bold  text-lg'>آپلود درس</p>

                                                    <label className='flex mb-0 relative top-2 justify-center items-center w-[130px] border-dashed border h-[40px] rounded-xl cursor-pointer bg-[#EFF6FF]  border-[#3B82F6]'>
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


