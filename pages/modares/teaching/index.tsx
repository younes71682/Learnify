import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Step1 from '@/components/modares/teachingSteps/step1';
import Step2 from '@/components/modares/teachingSteps/step2';
import Step3 from '@/components/modares/teachingSteps/step3';





export const Teaching = () => {

    const [activeStep, setActiveStep] = useState(0)

    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const handleCloseModule = () => {
        setActiveStep(3)
    }

    const steps = [
        ' 1 ',
        ' 2 ',
        ' 3 ',
        ' 4 ',
    ];

    console.log("activeStep", activeStep)

    return (
        <div className='mx-[136px]'>
            <div dir='ltr' className=' mt-16 flex justify-center'>
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
            {activeStep === 0 ? (
                <div >
                    <div >
                        <input type="text" className='border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px]  shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 pl-8 py-5 focus:ring-[#008000] focus:border-[#008000]  ' placeholder='*عنوان دوره' />
                    </div>
                    <div className='mt-4'>
                        <textarea className='rounded-[10px] border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 w-full h-[216px] focus:ring-[#008000] focus:border-[#008000]  pl-4 py-5 resize-none' placeholder='*معرفی دوره' />
                    </div>
                </div>
            ) : (null)}

            <div className='mt-32'>
                {activeStep === 1 ? (<Step1 />) : (null)}
                {activeStep === 2 ? (<Step2 />) : (null)}
                {activeStep === 3 ? (<Step3 />) : (null)}

            </div>
            <div className='text-center mt-16 mb-10'>
                <button onClick={e => activeStep === 0 ? 0 : setActiveStep(activeStep - 1)} className='mx-2 w-[180px] h-[56px] border-2 rounded-xl text-lg border-[#C93636] text-[#C93636]'>بازگشت</button>
                <button onClick={e => activeStep === 4 ? 4 : setActiveStep(activeStep + 1)} className='mx-2 w-[180px] h-[56px]  rounded-xl bg-[#008000] text-lg  text-white'>مرحله بعد</button>
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
                            src="https://s3-alpha-sig.figma.com/img/252e/81f9/108f022c0c40a33f17ef0f008672f648?Expires=1704067200&amp;Signature=j0LY83RBW-iggBDgRO4MFr3MV58BSAq9qYCw27Ao33eEtXUKsbkXJN6AxAdEek3l48-jbnH5IJ6~f4mojdbjdAqUXflE6OGVNpXdnxidXwX1qsTc8n~LQwQoH2bEInURYhWC-1U7Oa5YodfpzJt7f~NDkAPlRqxiOl9zUXDFk0YQ3SkBGYBC3OOJoB-3B-rj6Vj82w-4ZYr44zTi~5iIX6Q7JbISJb4nQzFoJkcqWIT9ZP0ODKcJoAstjrDRUorvRQQiOXIBHaSoYrDtC~WHJ~dGMiyWt1-ZN-H2M9gn2FpyZZPptwzJYOSPA0LFEtE5p0oRPmu-K43hU-1KGjOCUw__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        />
                        <p className='text-2xl font-bold'>دوره شما با موفقیت ثبت شد</p>
                        <p className='mt-2'>و پس از بررسی ظرف 3روز آینده منتشر میشود</p>
                        <button className='border-2 p-3 px-6 mt-10 rounded-xl text-[#00D200] text-lg border-[#00D200]'>ورود به پنل کاربری</button>
                        <div>
                            <button onClick={handleCloseModule} className="">x</button>
                        </div>
                    </div>
                </div>
            ) : (null)
            }
        </div >
    )
}

export default Teaching