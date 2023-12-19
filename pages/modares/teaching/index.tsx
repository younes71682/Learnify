import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Step1 from '@/components/modares/tab/teachingSteps/step1';




export const Teaching = () => {

    const [activeStep, setActiveStep] = useState(0)

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
                    <input type="text" className='rounded-[10px] border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 pl-8 py-5 ' placeholder='*عنوان دوره' />
                </div>
                <div className='mt-4'>
                    <textarea className='rounded-[10px] border-0 shadow-[0px_0px_20px_rgba(0,0,0,0.05)] text-lg pr-4 w-full h-[216px] pl-4 py-5 ' placeholder='*معرفی دوره' />
                </div>
            </div>
            ) : (null)}

            <div className='mt-32'>
                {activeStep === 1 ? (<Step1 />) : (null)}

            </div>
            <div className='text-center mt-16 mb-16'>
                <button onClick={e => activeStep === 0 ? 0 : setActiveStep(activeStep - 1)} className='mx-2 w-[180px] h-[56px] border-2 rounded-xl text-lg border-[#C93636] text-[#C93636]'>بازگشت</button>
                <button onClick={e => activeStep === 4 ? 4 : setActiveStep(activeStep + 1)} className='mx-2 w-[180px] h-[56px]  rounded-xl bg-[#008000] text-lg  text-white'>مرحله بعد</button>
            </div>
        </div >
    )
}

export default Teaching