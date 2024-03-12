import Link from 'next/link'
import React from 'react'

const Empty_Cart = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-[600px] gap-11'>

                <div>
                    <img src='/images/user/cart/empty_Cart.png' alt='' className='' />
                </div>

                <div className='flex flex-col items-center gap-2'>
                    <h2 className='text-xl font-bold'>سبد خرید شما خالی است.</h2>
                    <p className='text-sm'>می‌توانید با مراجعه به صفحه اصلی، آموزش مورد نظر خود را انتخاب کنید.</p>
                </div>
                <Link href='/' className='flex justify-center items-center bg-[#008000] rounded-[10px] w-[120px] h-[36px]'><p className='text-white'>صفحه اصلی</p></Link>
            </div>

        </div>
    )
}

export default Empty_Cart
