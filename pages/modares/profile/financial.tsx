import Layout_profil_modares from '@/components/layout/Layout_profil_modares';
import Date from '@/components/user/date/Date'

import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    Legend,
    YAxis
} from 'recharts';

const data = [
    { name: 'فروردین', بازدید_از_دوره: 130, خرید_دوره: 150 },
    { name: 'اردیبهشت', بازدید_از_دوره: 150, خرید_دوره: 180 },
    { name: 'خرداد', بازدید_از_دوره: 180, خرید_دوره: 200 },
    { name: 'تیر', بازدید_از_دوره: 220, خرید_دوره: 240 },
    { name: 'مرداد', بازدید_از_دوره: 240, خرید_دوره: 260 },
    { name: 'شهریور', بازدید_از_دوره: 280, خرید_دوره: 300 },
    { name: 'مهر', بازدید_از_دوره: 300, خرید_دوره: 320 },
    { name: 'آبان', بازدید_از_دوره: 320, خرید_دوره: 340 },
    { name: 'آذر', بازدید_از_دوره: 320, خرید_دوره: 360 },
    { name: 'دی', بازدید_از_دوره: 340, خرید_دوره: 380 },
    { name: 'بهمن', بازدید_از_دوره: 360, خرید_دوره: 350 },
    { name: 'اسفند', بازدید_از_دوره: 360, خرید_دوره: 280 },
];

const financial = () => {

    const his = [
        { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },
        { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "در انتظار پرداخت..." },
        { id: 3, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "واریز شد" },


    ]


    return (
        <Layout_profil_modares>


            <div className='flex flex-col gap-6 w-[64%]'>

                <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[400px]'>
                    <div className='flex justify-between px-8 py-5 sticky top-0'>

                        <h2 className='text-lg'>لیست کامل دوره ها</h2>
                        <div className='flex gap-4'>
                            <Date />
                            <Date />
                        </div>
                    </div>

                    <div className='flex flex-col px-8 static top-2 overflow-y-auto'>

                        <div className='flex flex-1 justify-around rounded-[5px_5px_0_0] border-solid border-[0.3px] border-[#E6F2E6] py-5 '>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>#</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>نام دوره</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>تاریخ</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>مبلغ</p>
                            <p className='text-sm font-bold flex justify-start translate-x-3 w-[10%]'>وضعیت</p>
                        </div>

                        {his.map((item, i) => {
                            return (
                                <div className='flex justify-around rounded-[5px] shadow-[0_0_20px_rgba(0,0,0,0.09)] mb-1  py-5 '>
                                    <p className='text-sm flex justify-start w-[12%]'>{i + 1}</p>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.name}</p>
                                    <p className='text-sm flex justify-start w-[12%] font-Byekan'>{item.date}</p>
                                    <div className='flex w-[12%] justify-start'><p className='text-sm font-Byekan'>{item.price}</p><p className='text-sm  font-Byekan'>تومان</p></div>
                                    <p className='text-sm flex justify-start w-[12%]'>{item.status}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className='flex  justify-between'>
                    <div className='flex flex-col rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[63%] h-[335px]'>
                        <div className=' flex p-4'><h3>نمودار وضعیت دوره براساس ماه</h3></div>

                        <ResponsiveContainer width="100%" height="100%" style={{ display: "flex", justifyContent: "end" }} >
                            <LineChart width={300} height={1} data={data}
                                margin={{
                                    top: 25,
                                    bottom: 20,
                                    right: 35
                                }}

                            >
                                <XAxis dataKey="name" angle={-45} tickMargin={17} padding={{ left: 10, right: 0 }} />
                                <YAxis tickMargin={26} />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="بازدید_از_دوره" stroke="#EF4444" strokeWidth={2} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="خرید_دوره" stroke="#A700FF" strokeWidth={2} activeDot={{ r: 8 }} />
                            </LineChart>

                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

        </Layout_profil_modares>


    )
}

export default financial
