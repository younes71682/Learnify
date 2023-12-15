import Link from 'next/link'
import React from 'react'

const Cart_empty = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[120vh] gap-16'>

      <div>
         <img src='/images/user/cart/empty.png' alt='Empty'/>
      </div>
       
      <div className='flex flex-col items-center gap-2'>
        <h3 className='text-2xl font-bold'>سبد خرید شما خالی است.</h3>
        <p className='text-xl text-[#888]'>می‌توانید با مراجعه به صفحه اصلی، آموزش مورد نظر خود را انتخاب کنید.</p>
      </div>
      
         <Link href="/" className=' flex justify-center items-center text-xl text-white bg-[#393] rounded-[10px] w-[10%] h-[42px]'>صفحه اصلی</Link>
       
    </div>
  )
}

export default Cart_empty
