import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'فروردین', Sales: 50, },
  { name: 'اردیبهشت', Sales: 35, },
  { name: 'خرداد', Sales: 30, },
  { name: 'تیر', Sales: 45, },
  { name: 'مرداد', Sales: 40, },
  { name: 'شهریور', Sales: 38, },
  { name: 'مهر', Sales: 42, },
  { name: 'آبان', Sales: 48, },
  { name: 'آذر', Sales: 40, },
  { name: 'دی', Sales: 60, },
  { name: 'بهمن', Sales: 20, },
  { name: 'اسفند', Sales: 25, },

];

const Chart_sell = () => {


  return (
    <div style={{ width: '100%' }} className='flex flex-col gap-5 pt-6 pr-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[400px]'>

      <h4>نمودار عملکرد فروش بر اساس ماه ها</h4>

      <ResponsiveContainer width="100%" height="100%" >
        <LineChart width={300} height={100} data={data}
          margin={{
            top: 35,
            bottom: 20,
            right: 40,
            left: 0,
          }}
        >
          <XAxis dataKey="name" angle={0} tickMargin={10} padding={{ left: 20, right: 0 }} />
          <YAxis tickMargin={20} />
          <Tooltip />
          <Line type="monotone" dataKey="Sales" stroke="#A700FF" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}
export default Chart_sell

