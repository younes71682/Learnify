import { Teaching_Fetch } from '@/components/api/modares/Teaching_Fetch'
import Image from 'next/image'
import React, { useState } from 'react'
type Add = {
    id: number
}

type Category = {
    category_id: number,
    category: string,
    course_count: number,
}

const Favorites = () => {


    const { dataCategory } = Teaching_Fetch()

    const favorites = dataCategory?.data.categories

    const [add, setAdd] = useState<Add[]>([])

    const handleAdd = (id: number, category: string) => {
        const existingItem = add.find(i => i.id === id)
        if (!existingItem) {
            setAdd(prve => [...prve, { id: id, title: category }])
        } else {
            const newItem = add.filter(i => i.id !== id)
            setAdd(newItem)
        }
    }


    return (

        <div className='flex flex-col gap-6 pr-4 pt-5 pb-8 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>

            <div className='flex items-center gap-1 text-lg'>
                <img src='/icon/user/account/info_user/like.svg' alt='Education' />
                <h2>علاقه‌مندی‌ها</h2>
            </div>

            <div className='flex flex-wrap gap-6 w-[90%]'>
                {favorites?.map((item: Category) => {
                    return (
                        <div key={item.category_id} className='cursor-pointer' onClick={() => handleAdd(item.category_id, item.category)}>
                            <div className={add.find(i => i.id === item.category_id) ? `flex items-center justify-between bg-[#008000] text-[#fbfbfb] border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] px-2` : `flex items-center cursor-pointer justify-between border-solid border-[0.5px] border-[#AAAAAA] rounded-[10px] w-[183px] h-[48px] pr-2`}>
                                <div>{item.category}</div>
                                <div>{add.find(i => i.id === item.category_id) ? <Image src='/icon/user/account/info_user/tick.svg' alt='tick' width={24} height={24} /> : <Image src='/icon/user/account/info_user/add.svg' alt='plus' width={24} height={24} />}</div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites

