import Image from 'next/image'
import React from 'react'

const Wallet = () => {
    return (
        <div style={{ backgroundImage: "url('/images/modares/sidebar/wallet.png')", backgroundSize: "cover", backgroundPosition: "center", }} className='flex flex-col items-center justify-center rounded-[5px] shadow-[0px_0px_20px_rgba(0,0,0,0.08)]  mx-4 h-[110px] '>
            <h3 className='text-sm text-[#484848] font-normal'>موجودی کیف پول</h3>
            <div className='flex items-center'>
                <p className='text-[#484848] font-normal'>تومان</p>
                <p className='text-[#484848] font-normal'>0</p>
            </div>
            <div className='bg-[#393] flex justify-center items-center w-[33%] h-[30px] rounded-[6px] mt-4'>
                <p className='text-[#FFF]'>دریافت وجه</p>
            </div>
        </div>
    )
}

export default Wallet
