//@ts-nocheck
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Image from 'next/image';
import React, { useState } from 'react'
import Switch from "react-switch";
import { BeatLoader } from 'react-spinners';

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

    const { mutate_UploadVideoCourse, pending_UploadVideoCourse, success_UploadVideoCourse, error_UploadVideoCourse, } = Teaching_Fetch()

    const [inputtimevalue, setInputTimeValue] = useState<string>("")

    const [chapterTitle, setChapterTitle] = useState('')

    const [lessontitle, setlessonTitle] = useState('')
    const [lessontime, setLessonTime] = useState('')

    const [itemlesson, setItemLesson] = useState([])

    const [item, setItem] = useState<Item[]>([{
        id: 1,
        course_id: 1,
        title: '',
        lessons: [
            {
                id: 1,
                chapter_id: 1,
                title: "",
                time: "",
                visibility: "true",
                video_id: ''
            }
        ],
    }])

    //ساخت فصل جدید
    const handleADDChapter = () => {
        const add = {
            id: item.length + 1,
            course_id: 1,
            title: '',
            lessons: [{
                id: 1,
                chapter_id: 1,
                title: "",
                time: "",
                visibility: "true",
                video_id: ''
            }],
        }
        setItem([...item, add])
    }

    // ساخت درس جدید
    const handleADDLesson = (chapterIndex, lessonIndex) => {
        const course = [...item]
        const lessonList = course[chapterIndex]["lessons"]
        lessonList.push({
            id: lessonList.length + 1,
            chapter_id: 1,
            title: "",
            time: "",
            visibility: "",
            video_id: ''
        })
        setItemLesson(course)
    }


    //فعال یا غیرفعال بودن نمایش دوره
    const handleSeeLesson = (lessonId, chapterId) => {
        setItem((prevItems) => {
            const updatedItems = prevItems.map((chapter) => {
                if (chapter.id === chapterId) {
                    const updatedLessons = chapter.lessons.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, visibility: !lesson.visibility };
                        }
                        return lesson;
                    });
                    return { ...chapter, lessons: updatedLessons };
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
                    const updatedLessons = chapter.lessons.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, title: newlessontitle };
                        }
                        return lesson;
                    });
                    return { ...chapter, lessons: updatedLessons };
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
                    const updatedLessons = chapter.lessons.map((lesson) => {
                        if (lesson.id === lessonId) {
                            return { ...lesson, time: newLessonTime };
                        }
                        return lesson;
                    });
                    return { ...chapter, lessons: updatedLessons };
                }
                return chapter;
            });
            return updatedItems;
        });
    };




    //اپلود فیلم دوره
    const handleUploadVideolesson = (event, chapterId, lessonId) => {
        const fileVideoCourse = event.target.files[0];
        mutate_UploadVideoCourse({ video: fileVideoCourse });

        setTimeout(() => {
            const newLessonVideo = localStorage.getItem('UploadVideoCourseId');
            console.log('getfilm', newLessonVideo);
            setItem((prevItems) => {
                const updatedItems = prevItems.map((chapter) => {
                    if (chapter.id === chapterId) {
                        const updatedLessons = chapter.lessons.map((lesson) => {
                            if (lesson.id === lessonId) {
                                return { ...lesson, video_id: newLessonVideo };
                            }
                            return lesson;
                        });
                        return { ...chapter, lessons: updatedLessons };
                    }
                    return chapter;
                });
                return updatedItems;
            });
        }, 2000);

    };


    const handleLocal = () => {
        localStorage.setItem('itemcourse', JSON.stringify(item))

    }




    return (
        <div className='flex justify-center items-center w-[100%]'>
            <div className='bg-[#F4F4F4] rounded-2xl shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-10 px-20 w-[100%]'>
                <button onClick={handleLocal} className='bg-red-500'>save course</button>
                <div className='font-bold mb-7 text-xl'>سرفصل ها</div>

                {item.map((chapter, chapterIndex) => {
                    return (
                        <div key={chapter.id} className='my-4 flex gap-2'>
                            <div className='flex flex-col w-[250px]'>
                                <div className='flex mb-3 justify-between'>
                                    <p className='text-lg font-bold'>فصل {chapterIndex + 1} </p>
                                    {chapterIndex === 0 && (<Image onClick={handleADDChapter} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                </div>

                                <div><input value={chapter.title} onChange={(e) => {
                                    setChapterTitle(e.target.value);
                                    handleChapterTitle(e.target.value, chapter.id);
                                }} placeholder='عنوان فصل' className='w-[206px] px-2 border-solid border-2 border-[#AAAA] rounded-[10px] h-[56px] outline-[#008000]' /></div>
                            </div>
                            <div className='w-full'>

                                {chapter.lessons.map((lesson, lessonIndex) => {
                                    return (
                                        <div key={lesson.id} className='h-full'>
                                            <div className=' mb-5 mr-12  flex justify-between'>
                                                <div className='flex flex-col  w-[204px]'>
                                                    <div className='flex mb-3 justify-between'>
                                                        <p className='text-lg font-bold'>عنوان درس {lessonIndex + 1}</p>
                                                        {lessonIndex === 0 && (<Image onClick={() => { handleADDLesson(chapterIndex, lessonIndex) }} src="/icon/modares/AddChapter.svg" alt='addchapter' width={24} height={24} />)}
                                                    </div>
                                                    <div><input value={lesson.title} onChange={(e) => {
                                                        setlessonTitle(e.target.value)
                                                        handleLessonTiltle(lesson.id, chapter.id, e.target.value)
                                                    }} placeholder='عنوان درس' className='w-[206px] px-2 border-solid border-2 border-[#AAAA] rounded-[10px] h-[56px] outline-[#008000]' /></div>
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
                                                        placeholder='47 دقیقه' className='w-[206px] px-2 border-solid border-2 border-[#AAAA] rounded-[10px] h-[56px] outline-[#008000]' /></div>
                                                </div>
                                                <div className='flex flex-col items-center justify-between h-[80px]'>
                                                    <p className='font-bold text-lg'>مشاهده قبل از خرید</p>
                                                    <Switch className='' checked={lesson.visibility} onColor='#008000' onChange={() => handleSeeLesson(lesson.id, chapter.id)} />
                                                </div>
                                                <div className='flex flex-col items-center justify-between h-[130px] w-[17%]'>
                                                    <p className='font-bold text-lg'>آپلود درس</p>
                                                    <div className='flex flex-col gap-1 w-[99%] h-[80px]'>
                                                        <label className='flex justify-center items-center w-full border-dashed border h-[40px] rounded-xl cursor-pointer bg-[#EFF6FF]  border-[#3B82F6]'>
                                                            {pending_UploadVideoCourse ? <BeatLoader color="#36d7b7" /> :
                                                                <>
                                                                    <input type="file" onChange={(event) => {
                                                                        handleUploadVideolesson(event, chapter.id, lesson.id)
                                                                    }} className='hidden w-full uploadBtn' />
                                                                    بارگذاری دوره
                                                                </>
                                                            }
                                                        </label>
                                                        {success_UploadVideoCourse && <p className='text-green-500 font-normal text-xs'>آپلود درس با موفقیت انجام شد.</p>}
                                                        {error_UploadVideoCourse && <p className='text-red-500 font-normal text-xs'>آپلود درس با مشکل مواجه شد،مجددا آپلود کنید.</p>}
                                                    </div>
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


