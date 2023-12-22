import Image from 'next/image'
import React from 'react'

const CartItems = (props: any) => {

    const { id, name, price, teacher, img } = props

    return (
             <div className='rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)] py-4 px-4 w-full mb-4'>
                <div className='flex justify-between '>
                    <div className='flex items-center gap-6'>
                        <div className='w-[137.689px] h-[139px] rounded-[10px]'>{img}</div>
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[#212121] text-xl font-bold'>آموزش{name}</h3>
                            <div className='flex items-center gap-[2px]'>
                                <Image src="/icon/user/account/info_user/education.svg" alt='education' width={16} height={16} />
                                <p className='text-xs font-normal'>{teacher}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1 '>
                            <p className='text-2xl font-normal'>{price}</p>
                            <div className='flex flex-col text-[#4F4F4F] text-[10px] font-normal'>
                                <p>تو</p>
                                <p>مان</p>
                            </div>
                         </div>
                        <div>
                        <Image src="/icon/user/cart/delete.svg" alt='delete' width={24} height={24} />
                         </div>
                    </div>
                </div>
            </div>

     )
}

export default CartItems