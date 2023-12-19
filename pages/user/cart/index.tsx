import React from 'react'
import Link from 'next/link'
import CartItems from '@/components/user/cart/CartItems'
import Layout_User from '@/components/user/layout_user/Layout_User'


const index = () => {

    const products = [
        { id: 1, name: "Redux", price: "790,000", teacher: "امیرحسام میرصادقی", img: <img src='/images/user/cart/redux.png' alt='redux' /> },
        { id: 2, name: "Redux", price: "790,000", teacher: "امیرحسام میرصادقی", img: <img src='/images/user/cart/redux.png' alt='redux' /> },
    ]

    return (

        <Layout_User showFooter>

            <div>
                { }
                <div className='flex mx-[190px] mb-6 my-12'>
                    <h3 className='text-xl font-bold'>سبدخرید</h3>
                </div>

                <div className='flex justify-center  gap-[30px]'>

                    <div className='w-[49%]'>

                        {products.map((item) => {
                            return (
                                <div>
                                    <CartItems {...item} />
                                </div>
                            )
                        })}
                    </div>


                    <div className='rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.1)] px-4 py-6 w-[24.5%] h-[356px]'>
                        <h3 className='text-xl font-bold mb-4'>پیش فاکتور</h3>

                        <div className='flex justify-between mb-3'>
                            <p className='text-lg'>تعداد</p>
                            <div className='flex items-center gap-1'>
                                <p className='text-[10px] font-normal'>دوره</p>
                                <p className='text-base font-normal'>2</p>
                            </div>
                        </div>
                        <div className='flex justify-between mb-3'>
                            <p className='text-lg'>جمع کل</p>
                            <div className='flex items-center'>
                                <div className='flex flex-col items-center text-[10px] font-normal'>
                                    <p>تو</p>
                                    <p>مان</p>
                                </div>
                                <p className='text-base font-normal'>790,000</p>
                            </div>
                        </div>

                        <hr />

                        <div className='flex justify-between my-5'>
                            <h3 className='text-lg font-bold'>مبلغ قابل پرداخت</h3>
                            <div className='flex items-center'>
                                <h3 className='text-[#008000] text-lg font-normal'>790,000</h3>
                                <div className='flex flex-col items-center text-[10px] font-normal'>
                                    <p>تو</p>
                                    <p>مان</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center rounded-[10px] py-3 bg-[#393] mb-4'>
                            <p className='text-[#FBFBFB] text-xl font-semibold'>تکمیل فرایند خرید</p>
                        </div>

                        <div className='mb-5'>
                            <p className='text-xs font-normal'>پرداخت و ثبت سفارش، به منزله مطالعه و پذیرفتن <Link href="/" className='text-[#00359B]'>قوانین و مقررات</Link> استفاده از خدمات لرنیفای است .</p>
                        </div>

                    </div>
                </div>

            </div>

        </Layout_User>
    )
}

export default index
