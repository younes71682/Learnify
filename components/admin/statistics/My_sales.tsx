import Date from '@/components/user/date/Date';
import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from 'recharts';

const data = [
  {name: 'فروردین',pv: 20,},
  {name: 'اردیبهشت',pv: 25,},
  {name: 'خرداد',pv: 23,},
  {name: 'تیر',pv: 18,},
  {name: 'مرداد',pv: 20,},
  {name: 'شهریور',pv: 15,},
  {name: 'مهر',pv: 19,},
  {name: 'آبان',pv: 21,},
  {name: 'آذر',pv: 18,},
  {name: 'دی',pv: 23,},
  {name: 'بهمن',pv: 22,},
  {name: 'اسفند',pv: 25,},
];


const My_sales = () => {

  return (
    <div className='flex flex-col gap-6 pt-5 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] w-[48%] h-[39vh]'>
      <div className='flex justify-between items-center px-4 '>
        <h3>سهم فروش برای ما</h3>
        <div className='flex justify-between gap-3'>
          <Date />
          <Date />
        </div>
      </div>


      <ResponsiveContainer width="100%" height="100%" >
        <LineChart width={300} height={100} data={data}
          margin={{
            top: 40,
            bottom: 30,
          }}
        >
          <XAxis dataKey="name" angle={-45} tickMargin={20} padding={{ left: 20, right: 20 }} />
          <Tooltip />
          <Line type="monotone"  dataKey="pv" stroke="#FFD66B" strokeWidth={2} fill='#AE8FF7' activeDot={{ r: 8 }} />
        </LineChart>

      </ResponsiveContainer>
    </div>
  );
}

export default My_sales






