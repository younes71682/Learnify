import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';


export const CommentComponent = () => {
    return (
        <div>
            <Accordion className='my-4 border-0 rounded-lg p-2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] '>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='font-YekanBakhRegular font-bold text-lg' >
                        <div className=''>
                            <div className='ml-6 font-YekanBakhRegular font-bold text-lg'>مدل ذهنی متخصص اناتلیکس</div>
                            <div className='ml-6 font-YekanBakhRegular font-bold text-sm'>تا کنون 700 نظر ثبت شده است</div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Typography className='my-2  font-YekanBakhRegular bg-[#F5F5F5] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] px-6 py-3 font-bold text-sm w-[99%]  items-center  mx-auto'>
                        <div className='flex w-full justify-between'>
                            <div className=''>
                                <div className='font-YekanBakhRegular font-bold text-sm'>علیرضا</div>
                                <div className='font-YekanBakhRegular font-bold text-sm'>خسته نباشید تدریس بسیار کامل و جامع</div>
                            </div>
                            <div className=''>
                                1402/07/22
                            </div>
                        </div>
                        <div className='mt-20 bg-white py-5 font-YekanBakhRegular font-bold text-sm px-4'>
                            پاسخ
                        </div>
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    )
}
