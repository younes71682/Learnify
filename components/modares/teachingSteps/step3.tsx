import useTeachingCategory from '@/components/api/modares/Teaching4Javid';
import Teaching from '@/pages/modares/teaching';
import React, { useState } from 'react'
import Select from 'react-select';

export const Step3 = () => {



    const { data } = useTeachingCategory()
    console.log('category data:', data?.data.categories)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const customStyles = {
        // @ts-ignore
        option: (provided, state) => ({
            ...provided,
            border: state.isFocused ? '2px solid #008000' : '2px solid transparent', // Add a border when focused (hovered)
            backgroundColor: state.isFocused ? '#fff' : 'white', // Change the background color when focused (hovered)
            color: state.isFocused ? 'black' : 'inherit', // Change the text color when focused (hovered)
        }),
    };

    // const { mutate_Step1Photo } = Teaching()
    // const func = () => {

    // }

    return (
        <div className='flex flex-col items-center gap-4'>
            <div>
                <Select

                    className='w-[200px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '
                    placeholder='دسته بندی'
                    defaultValue='دسته بندی'
                    // onChange={setSelectedOption}
                    // @ts-ignore
                    options={data?.data.categories.map(category => ({ value: category.category, label: category.category }))}
                    styles={customStyles}

                />
            </div>
            <div>
                <input type="text" className='w-[200px] border-0 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)]' placeholder='قیمت دوره' />
            </div>
        </div>
    )

}

export default Step3
