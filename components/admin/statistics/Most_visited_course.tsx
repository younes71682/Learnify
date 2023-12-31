import Date from '@/components/user/date/Date';
import React from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  XAxis,
  BarChart,
  Bar,

} from 'recharts';

const data = [
  { name: 'فروردین', pv: 20, },
  { name: 'اردیبهشت', pv: 25, },
  { name: 'خرداد', pv: 23, },
  { name: 'تیر', pv: 18, },
  { name: 'مرداد', pv: 20, },
  { name: 'شهریور', pv: 15, },
  { name: 'مهر', pv: 19, },
  { name: 'آبان', pv: 21, },
  { name: 'آذر', pv: 18, },
  { name: 'دی', pv: 23, },
  { name: 'بهمن', pv: 22, },
  { name: 'اسفند', pv: 25, },
];

const Most_visited_course = () => {
  return (
    <div className='flex flex-col gap-6 pt-5 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[330px]'>
      <div className='flex justify-between items-center px-4 '>
        <h3>سهم فروش برای ما</h3>
        <div className='flex justify-between gap-3'>
          <Date />
          <Date />
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%" >
        <BarChart barGap={50} barCategoryGap={5} maxBarSize={50} width={300} height={100} data={data}
          margin={{
            top: 30,
            bottom: 30,
          }}
        >
          <XAxis scale="point" dataKey="name" hide={true} angle={-45} tickMargin={20} padding={{ left: 40, right: 40 }} />
          <Tooltip />
          <Bar activeBar={{
            fill: '#AE8FF7',
            radius: 100,
            stroke: '#AE8FF7',
            strokeWidth: 4
          }}
            type="monotone"
            dataKey="pv"
            fill='rgba(96,91,255,0.2)'
            strokeWidth={20}
            radius={100}
            barSize={20}

          />
        </BarChart>

      </ResponsiveContainer>

    </div>
  )
}

export default Most_visited_course








