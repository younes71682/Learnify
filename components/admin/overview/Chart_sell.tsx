import React, { PureComponent } from 'react';
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
  {
    name: 'فروردین',
    Sales: 20,
  },

  {
    name: 'اردیبهشت',
    Sales: 25,
  },

  {
    name: 'خرداد',
    Sales: 30,
  },

  {
    name: 'تیر',
    Sales: 25,
  },

  {
    name: 'مرداد',
    Sales: 20,
  },

  {
    name: 'شهریور',
    Sales: 50,
  },

  {
    name: 'مهر',
    Sales: 55,
  },

  {
    name: 'آبان',
    Sales: 30,
  },

  {
    name: 'آذر',
    Sales: 25,
  },

  {
    name: 'دی',
    Sales: 30,
  },

  {
    name: 'بهمن',
    Sales: 20,
  },

  {
    name: 'اسفند',
    Sales: 65,
  },

];


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-line-charts-zc3nl';

  render() {
    return (
      <div style={{ width: '100%' }} className='flex flex-col gap-5 pt-6 pr-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[55vh]'>
    
        <h4>نمودار عملکرد فروش بر اساس ماه ها</h4>

        <ResponsiveContainer width="100%" height={300}  >
          <LineChart
            width={500}
            height={300}
            data={data}
            syncId="anyId"
             margin={{
              top: 0,
              right: 10,
              left: 0,
              bottom: 0,
            }}
                       
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            <Line type="monotone" dataKey="Sales" stroke="#8884d8" fill="#AE8FF7" className='bg-red-500 text-lg' strokeWidth="4px"   />
          </LineChart>
        </ResponsiveContainer>
 
      </div>
    );
  }
}