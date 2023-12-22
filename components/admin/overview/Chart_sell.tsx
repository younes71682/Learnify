import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useXScale } from '@mui/x-charts';

 
const pData = [0, 20, 40, 60, 80, 50, 100,];
const xLabels = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'شهریور',
];
const yLabels =[
  
100,80,60,40,20,0
 
]


export default function Chart_sell() {
  return (
    <div className='flex flex-col pt-6 px-4 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[48vh]'>
      <div>
        <p>نمودار عملکرد فروش بر اساس ماه ها</p>
      </div>

      <div className='flex justify-end '>
        <LineChart

          // className='drop-shadow-[0_4px_4px_rgba(96,91,255,0.17)]'
          width={800}
          height={300}
          series={[
            { data: pData, label: 'sales', color: '#5BC4FF' },
          ]}
           xAxis={[{ scaleType: 'point', data: xLabels }]}
           yAxis={[{ scaleType: 'point', data: yLabels }]}
           
        />

      </div>
    </div>
  );
}

 

