//@ts-nocheck
import Teaching4Javid from '@/components/api/modares/Teaching4Javid';
import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch';

import React, { useState } from 'react'
import Select from 'react-select';

export const Step3 = () => {

    const { dataCategort } = Teaching_Fetch()

    const [selectedCategory, setSelectedCategory] = useState('')
    const [coursePrice, setCoursePrice] = useState('')
    const [isSearchable, setIsSearchable] = React.useState(false);


    //@ts-ignore
    console.log('category data:', dataCategort?.data.categories)


    const customStyles = {
        // @ts-ignore
        option: (provided, state) => ({
            ...provided,
            border: state.isFocused ? '2px solid #008000' : '2px solid transparent', // Add a border when focused (hovered)
            backgroundColor: state.isFocused ? '#fff' : 'white', // Change the background color when focused (hovered)
            color: state.isFocused ? '#008000' : 'inherit', // Change the text color when focused (hovered)
        }),
    };

    console.log("selectedCategory", selectedCategory)


    return (
        <div className='flex flex-col items-center gap-4'>
            <div>
                <Select

                    className='w-[200px] shadow-[0_0_20px_rgba(0,0,0,0.05)] '
                    placeholder='دسته بندی'
                    defaultValue='دسته بندی'
                    // @ts-ignore
                    options={dataCategort?.data.categories.map(category => ({ id: category.category_id, value: category.category, label: category.category }))}
                    styles={customStyles}
                    isSearchable={isSearchable}
                    value={selectedCategory}
                    //@ts-ignore
                    onChange={(value) => {
                        localStorage.setItem('selectedCategory', value.id),
                            setSelectedCategory(value)
                    }}
                />
            </div>
            <div>
                <input value={coursePrice} onChange={e => {
                    localStorage.setItem('coursePrice', e.target.value)
                    setCoursePrice(e.target.value)
                }} type="text" className='w-[200px] border-0 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.05)] focus:ring-[#008000] focus:border-[#008000]' placeholder='قیمت دوره' />
            </div>
        </div>
    )

}

export default Step3
