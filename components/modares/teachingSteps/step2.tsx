//@ts-nocheck
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Image from 'next/image';
import { list } from 'postcss';
import React, { useState } from 'react'
import Switch from "react-switch";

type Lessons = {
    id: number,
    title: string,
    time: string,

}

type Item = {
    id: number,
    title: string,
    time: string,
    Lessons: []
}

export const Step2 = () => {

    // console.log('lessonIdCreate:', item[0].lesson.length)
    // const [inputseasonvalue, setInputSeasonValue] = useState<string>("")

    const { mutate_UploadVideoCourse } = Teaching_Fetch()

    const [inputtimevalue, setInputTimeValue] = useState<string>("")

    const [chapterTitle, setChapterTitle] = useState('')

    const [lessontitle, setlessonTitle] = useState('')
    const [lessontime, setLessonTime] = useState('')

    const [itemlesson, setItemLesson] = useState([])

    const [item, setItem] = useState<Item[]>([{
        id: 1,
        course_id: 1,
        title: '',
        lesson: [
            {
                id: 1,
                chapter_id: 1,
                title: "",
                time: "",
                visibility: "true",
                video_id: 4
            }
        ],
    }])

    //ساخت فصل جدید
    const handleADDChapter = () => {
        const add = {
            id: item.length + 1,
            course_id: 1,
            title: '',
            lesson: [{
                id: 1,
                chapter_id: 1,
                title: "",
                time: "",
                visibility: "true",
                video_id: 4
            }],
        }
        setItem([...item, add])
    }

    // ساخت درس جدید
    const handleADDLesson = (chapterIndex, lessonIndex) => {
        const course = [...item]
        const lessonList = course[chapterIndex]["lesson"]
        lessonList.push({
            id: lessonList.length + 1,
            chapter_id: 1,
            title: "",
            time: "",
            visibility: "",
            video_id: 4
        })
        setItemLesson(course)
    }


    //فعال یا غیرفعال بودن نمایش دوره
    const handleSeeLesson = (lessonId, chapterId) => {
        setItem((prevItems) => {
            const updatedItems = prevItems.map((chapter) => {
                if (chapter.id === chapterId) {
                    const updatedLessons = chapter.lesson.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, visibility: !lesson.visibility };
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

    //مقدار ایپوت درس
    const handleLessonTiltle = (lessonId, chapterId, newlessontitle) => {
        setItem((prevItems) => {
            const updatedItems = prevItems.map((chapter) => {
                if (chapter.id === chapterId) {
                    const updatedLessons = chapter.lesson.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, title: newlessontitle };
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



    //مقدار اینپوت فصل
    const handleChapterTitle = (newTitle, chapterId) => {
        setItem((prevItem) => {
            const updatedItem = prevItem.map((chapter) => {
                if (chapter.id === chapterId) {
                    return { ...chapter, title: newTitle };
                }
                return chapter;
            });
            return updatedItem;
        });
    };

    console.log('Course:', item)



    //مقدار اینپوت زمان
    const handleLessonTime = (chapterId, lessonId, newLessonTime) => {
        setItem((prevItems) => {
            const updatedItems = prevItems.map((chapter) => {
                if (chapter.id === chapterId) {
                    const updatedLessons = chapter.lesson.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, time: newLessonTime };
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




    //اپلود فیلم دوره
    const handleUploadVideolesson = (event) => {
        const fileVideoCourse = event.target.files[0]
        console.log(fileVideoCourse)
        mutate_UploadVideoCourse({ video: fileVideoCourse })
    }



    



    return (
        <div className='flex justify-center  items-center w-[100%] '>
            <div className='bg-[#F4F4F4] rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-10 px-20 w-[100%]'>
                <div className='font-bold mb-7 text-xl'>سرفصل ها</div>

                {item.map((chapter, chapterIndex) => {
                    return (
                        <div key={chapter.id} className='  my-4  flex gap-2 '>
                            <div className='flex flex-col w-[250px]'>

                                <div className='flex mb-3 justify-between'>
                                    <p className='text-lg font-bold'>فصل {chapterIndex + 1} </p>
                                    {chapterIndex === 0 && (<Image onClick={handleADDChapter} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                </div>

                                <div><input value={chapter.title} onChange={(e) => {
                                    setChapterTitle(e.target.value);
                                    handleChapterTitle(e.target.value, chapter.id);
                                }} placeholder='عنوان فصل' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                            </div>
                            <div className='w-full'>

                                {chapter.lesson.map((lesson, lessonIndex) => {
                                    return (
                                        <div key={lesson.id}>
                                            <div className=' mb-5 mr-12  flex justify-between '>
                                                <div className='flex flex-col  w-[204px]'>
                                                    <div className='flex mb-3 justify-between'>
                                                        <p className='text-lg font-bold'>عنوان درس {lessonIndex + 1}</p>
                                                        {lessonIndex === 0 && (<Image onClick={() => { handleADDLesson(chapterIndex, lessonIndex) }} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                                    </div>
                                                    <div><input value={lesson.title} onChange={(e) => {
                                                        setlessonTitle(e.target.value)
                                                        handleLessonTiltle(lesson.id, chapter.id, e.target.value)
                                                    }} placeholder='عنوان درس' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                                                </div>
                                                <div className='flex flex-col  w-[206px]'>
                                                    <div className='flex mb-3 justify-between'>
                                                        <p className='text-lg font-bold'>زمان</p>
                                                    </div>
                                                    <div><input value={lesson.time}
                                                        onChange={(e) => {
                                                            setLessonTime(e.target.value);
                                                            handleLessonTime(chapter.id, lesson.id, e.target.value);
                                                        }}
                                                        placeholder='47 دقیقه' className='w-[206px] px-2 border-solid border-2 border-[#AAAAA] rounded-[10px] h-[56px]' /></div>
                                                </div>
                                                <div className='flex flex-col items-center justify-between h-[66px]'>
                                                    <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                                    {/* <input type="checkbox" onChange={() => handleSeeLesson(item.id, i.id)} checked={item.see} /> */}
                                                    <Switch className='' checked={lesson.visibility} onColor='#008000' onChange={() => handleSeeLesson(lesson.id, chapter.id)} />
                                                </div>
                                                <div className='flex flex-col items-center  justify-between h-[72px] w-[10%]'>
                                                    <p className='font-bold  text-lg'>آپلود درس</p>

                                                    <label className='flex mb-0 relative top-2 justify-center items-center w-[130px] border-dashed border h-[40px] rounded-xl cursor-pointer bg-[#EFF6FF]  border-[#3B82F6]'>
                                                        <input type="file" onChange={handleUploadVideolesson} className='hidden w-full uploadBtn' />
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


