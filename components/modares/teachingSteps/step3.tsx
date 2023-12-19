import React, { useState } from 'react'
import Select from 'react-select';

export const Step3 = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];


    return (
        <div className='flex flex-col items-center gap-4'>
            <div>
                <Select
                    className='w-[200px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '
                    placeholder='دسته بندی'
                    defaultValue='دسته بندی'
                    // onChange={setSelectedOption}
                    options={options}
                />
            </div>
            <div>
                <input type="text" className='w-[200px] border-0 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)]' placeholder='قیمت دوره' />
            </div>
        </div>
    )

}

export default Step3
