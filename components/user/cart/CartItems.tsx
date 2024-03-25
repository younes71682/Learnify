//@ts-nocheck
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { DELETE } from '@/components/Redux/BasketSlice'

const CartItems = (props: any) => {

    const { id, title, price, mentorName, mentorfamily, image } = props
    const dispatch = useDispatch()
    const handelDelete = (id) => {
        dispatch(DELETE({id}))
    }
    console.log('im',typeof(id))
    return (
        <div className='rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)] py-4 px-4 w-full'>
            <div className='flex justify-between '>
                <div className='flex w-[137.689px] h-[139px]'>
                    <img src={image} alt={`image${title}`} className='w-full h-full rounded-[10px]' />
                </div>
                <div className='flex flex-1 mr-6 justify-between [@media(max-width:800px)]:flex-col'>
                    <div className='flex items-center gap-6'>
                        <div className='flex flex-col gap-4 max-sm:gap-1'>
                            <h3 className='text-[#212121] text-xl font-bold'>آموزش{title}</h3>
                            <div className='flex items-center gap-[2px]'>
                                <Image src="/icon/user/account/info_user/education.svg" alt='education' width={16} height={16} />
                                <p className='text-xs font-normal'>{mentorName}{mentorfamily}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-4 [@media(max-width:930px)]:flex-col [@media(max-width:930px)]:justify-center [@media(max-width:930px)]:gap-1'>
                        <div className='flex items-center gap-1 '>
                            <p className='text-2xl font-normal font-Byekan'>{price}</p>
                            <div className='flex flex-col text-[#4F4F4F] text-[10px] font-normal'>
                                <p>تو</p>
                                <p>مان</p>
                            </div>
                        </div>
                        <div onClick={() => handelDelete(id)} className='cursor-pointer'>
                            <Image src="/icon/user/cart/delete.svg" alt='delete' width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems
