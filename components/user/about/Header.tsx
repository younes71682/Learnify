import React from 'react'

const Header = () => {
    return (
        <div>

            <div className='flex mb-[177px] justify-around '>

                <div className='flex flex-col justify-around items-center w-[50%] [@media(max-width:450px)]:w-[90%] [@media(max-width:450px)]:gap-11 [@media(max-width:450px)]:mt-8'>

                    <div className='flex flex-col gap-10 w-[90%]'>
                        <div className='flex relative left-7'>
                            <div className='flex'>
                                <div className='bg-[#135794] rounded-full opacity-[0.2] w-[21px] h-[21px]' />
                                <div className='bg-[#135794] rounded-full opacity-[0.2] w-[28px] h-[28px] translate-x-4 translate-y-2' />
                            </div>
                            <p className='text-5xl text-[#135794] font-YekanBakhFat absolute right-6 [@media(max-width:660px)]:text-4xl'>درباره ما</p>
                        </div>
                        <p className='text-[#484848] text-xl font-bold [@media(max-width:660px)]:text-base'>
                            ما در "لرنیفای" به یادگیری معنادار و به اشتراک گذاری دانش باور داریم. مأموریت ما این است
                            که یک محیط <span className='text-[#E57722]'>مثبت</span > و <span className='text-[#E57722]'>انگیزه‌بخش</span> برای یادگیری ایجاد کنیم تا شما بتوانید به تسلط بر مهارت‌ها
                            و موضوعات مورد علاقه‌تان دست پیدا کنید.
                        </p>
                    </div>

                    <div>
                        <img src='/images/about/women_1.png' alt='Women' className='w-[221px] h-[326px] [@media(min-width:450px)]:hidden' />
                    </div>


                    <div className='flex flex-col gap-10 w-[90%]   [@media(max-width:508px)]:ga-20'>
                        <div className='flex relative left-7'>
                            <div className='flex'>
                                <div className='bg-[#D58787] rounded-full opacity-[0.2] w-[21px] h-[21px]' />
                                <div className='bg-[#D58787] rounded-full opacity-[0.2] w-[28px] h-[28px] translate-x-4 translate-y-2' />
                            </div>
                            <p className='text-5xl text-[#D58787] font-YekanBakhFat absolute right-6 [@media(max-width:660px)]:text-4xl'>چه کار می‌کنیم؟</p>
                        </div>
                        <p className='text-[#484848] text-xl font-bold [@media(max-width:660px)]:text-base' >
                            در "لرنیفای"، ما دوره‌های آموزشی متنوعی را ارائه می‌دهیم که از تمامی زوایای دانش
                            پوشش می‌دهد. از مقدماتی تا پیشرفته و حتی حرفه‌ای، شما می‌توانید دوره‌هایی را برای
                            افزایش مهارت‌های خود انتخاب کنید.
                        </p>
                    </div>

                    <div>
                        <img src='/images/about/women_2.png' alt='Women' className='w-[221px] h-[326px] [@media(min-width:450px)]:hidden' />
                    </div>

                </div>


                <div className='flex justify-center relative w-[50%] [@media(max-width:450px)]:hidden'>
                    <div className='bg-gradient-to-r from-[#BB27FF] to-[#FFFA7E] opacity-[0.2] blur-2xl  w-full h-full absolute -z-10 left-0 top-0' />
                    <div className='flex justify-center items-center gap-10 mt-6'>
                        <div className='flex flex-col gap-[30px]'>
                            <img src='/images/about/women_1.png' alt='Women' className='w-[221px] h-[362px]' />
                            <img src='/images/about/women_2.png' alt='Women' className='w-[221px] h-[326px]' />
                        </div>
                        <img src='/images/about/family.png' alt='Family' className='w-[221px] h-[490px] [@media(max-width:1100px)]:hidden' />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Header
