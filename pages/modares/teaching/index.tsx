//@ts-nocheck
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Step1 from '@/components/modares/teachingSteps/step1';
import Step2 from '@/components/modares/teachingSteps/step2';
import Step3 from '@/components/modares/teachingSteps/step3';
import { FormProvider, useForm } from 'react-hook-form';
import Link from 'next/link';
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';
import Navbar from '@/components/layout/Navbar';
import axios from 'axios';
import Teaching4Javid from '@/components/api/modares/Teaching4Javid';



type FormValue = {
    title: string
    description: string
}


export const Teaching = () => {


    const { mutate_CreateCourse, mutate_UploadMediaIdCourse } = Teaching_Fetch()

    const methods = useForm<FormValue>()

    const { register, formState, handleSubmit } = methods

    const { errors } = formState
    
    
    const { mutate_CourseCategoty } = Teaching4Javid()
    const [activeStep, setActiveStep] = useState(3)
    console.log("activeStep", activeStep)


    const handleCloseModule = () => {
        setActiveStep(3)
    }

    const steps = [
        ' 1 ',
        ' 2 ',
        ' 3 ',
        ' 4 ',
    ];

    const handleFetchNextStep = (data: void) => {
        if (activeStep === 0) {
            setActiveStep(activeStep + 1)
            console.log('data', data)
            mutate_CreateCourse(data)
        }
        else if (activeStep === 1) {
            setActiveStep(activeStep + 1)
            // const image_id = localStorage.getItem()
            // const teaser_id = localStorage.getItem()
            // mutate_UploadMediaIdCourse()
        }
        else if (activeStep === 2) {
            setActiveStep(activeStep + 1)

        }
        else if (activeStep === 3) {
            // fetchLastStep()
            let category_id = Number(localStorage.getItem('selectedCategory'))
            let price = localStorage.getItem('coursePrice')
            const dataLastSStep = { category_id, price }
            console.log('javid:',dataLastSStep)
            mutate_CourseCategoty(dataLastSStep)
            setActiveStep(activeStep + 1)

        } else if (activeStep === 4) {
            return
        }

    }


 


    const fetchLastStep = async () => {
        let categoryId = localStorage.getItem('selectedCategory')
        let coursePrice = localStorage.getItem('coursePrice')
        console.log('logId:', categoryId)
        try {
            let token = localStorage.getItem('token');
            if (!token) {
                console.error('Token not found in localStorage');
                return;
            }

            const response = await axios.put(
                'https://learnify.v1r.ir/api/course/update/1/3',
                {
                    category_id: categoryId,
                    price: coursePrice
                },
                {
                    headers: {
                        "Content-Type": 'application/json', // Change content type if necessary
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (

        <div>
            <FormProvider {...methods}>

                <Navbar />

                <div className='mx-[136px]'>
                    <div dir='ltr' className='flex justify-center items-center h-48'>
                        <Box sx={{ width: '20%' }}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel >{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </div>


                    {activeStep === 0 && (
                        <form className='flex flex-col' noValidate>
                            <div className='flex flex-col gap-1 h-[85px]'>
                                <input {...register("title", { required: true })} type="text" className='border-solid border-[#FFF] rounded-[10px]  shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 pl-8 py-5 focus:ring-[#008000] focus:border-[#008000] w-[20%] h-[65px] ' placeholder='*عنوان دوره' />
                                {errors.title?.type === 'required' && <p className='text-red-500 font-normal text-xs'>عنوان دوره را وارد کنید</p>}
                            </div>

                            <div className='flex flex-col gap-1 h-[210px] '>
                                <textarea {...register("description", { required: true })} className='rounded-[10px] border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 w-full h-[190px] focus:ring-[#008000] focus:border-[#008000]  pl-4 py-5 resize-none' placeholder='*معرفی دوره' />
                                {errors.description?.type === 'required' && <p className='text-red-500 font-normal text-xs'>مشخصات دوره را وارد کنید</p>}
                            </div>
                        </form>
                    )}

                    <div className=''>
                        {activeStep === 1 ? (<Step1 />) : (null)}
                        {activeStep === 2 ? (<Step2 />) : (null)}
                        {activeStep === 3 ? (<Step3 />) : (null)}

                        <div className='flex justify-center gap-3 items-center h-28'>
                            <div onClick={(e) => { activeStep === 0 ? 0 : setActiveStep(activeStep - 1) }} className='flex justify-center items-center w-[180px] h-[56px] rounded-xl border-solid border-2 border-[#C93636] bg-white hover:opacity-[0.8]'><p className='text-lg text-[#C93636]'>بازگشت</p></div>
                            <div onClick={handleSubmit(handleFetchNextStep)} className='flex justify-center items-center w-[180px] h-[56px] rounded-xl bg-[#008000] hover:opacity-[0.9]'><p className='text-lg text-white'>مرحله بعد</p></div>
                        </div>

                    </div>
                    {activeStep === 3 ? (<div className=' justify-center flex'>
                        <p className='w-[380px] text-sm '>پرداخت و ثبت سفارش، به منزله مطالعه و پذیرفتن قوانین و مقررات استفاده از خدمات لرنیفای است .</p>
                    </div>) : (null)}
                    {activeStep === 4 ? (
                        < div className="fixed  inset-0 flex z-20 items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="bg-white text-center w-[491px] h-[499px] pt-10 rounded-2xl shadow-lg">
                                <img
                                    style={{
                                        width: '200px',
                                        display: 'block',
                                        WebkitUserSelect: 'none',
                                        margin: 'auto',
                                        backgroundColor: 'hsl(0, 0%, 100%)',
                                    }}
                                    src="https://s3-alpha-sig.figma.com/img/252e/81f9/108f022c0c40a33f17ef0f008672f648?Expires=1706486400&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&amp;Signature=Z9FGv~nRfyVYmkbqHf783PwhV14FROQcQBpmtBp5QThTgh9mHRanam8QC0eXFx2esL46QU5-hP7hFB3a92egeUH~PP4T-DC~vFSecxZHcR6ccxCGlltWWVa~YxO7TFbp8tkGwflphMSU13aiFdiE6Pwz7iWEdNzMi2u1D3MIgaPmvqWk04wTe4KR8GmVRi7fLubm08DhgxLPg0IpS7CVnw1EXe6cDNkzk7NzyzrgVvMLdVFfH~MRfiGl1XtrqvCgS2NCJ56H5mL~4bWGBYON8PLfgQWNzZQqDbudvU7p~m5nQZXvmxiMs8WaHi6HbUp5ev-pgUH~QYyk4YGrRgRPUQ__"
                                />
                                <p className='text-2xl font-bold'>دوره شما با موفقیت ثبت شد</p>
                                <p className='mt-2'>و پس از بررسی ظرف 3روز آینده منتشر میشود</p>
                                <Link href='/modares'>
                                    <button className='border-2 p-3 px-6 mt-10 rounded-xl text-[#00D200] text-lg border-[#00D200]'>ورود به پنل کاربری</button>
                                </Link>
                                <div>
                                    <button onClick={handleCloseModule} className="">x</button>
                                </div>
                            </div>
                        </div>
                    ) : (null)
                    }
                </div >
            </FormProvider>
        </div >
    )
}

export default Teaching
