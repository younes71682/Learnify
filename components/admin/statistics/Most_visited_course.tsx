// import Date from '@/components/user/date/Date'
// import React from 'react'


// const Most_visited_course = () => {
//   return (
//     <div className='flex flex-col gap-6 pt-5 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[50vh]'>
//       <div className='flex justify-between items-center px-4 '>
//         <h3>سهم فروش برای ما</h3>
//         <div className='flex justify-between gap-3'>
//           <Date />
//           <Date />
//         </div>
//       </div>

//       <div>

//       </div>
//     </div>
//   )
// }

// export default Most_visited_course


import Date from '@/components/user/date/Date';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




class Most_visited_course extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';
  state = {
    data: [
      {
        name: 'آموزش next',
        pv: 25,
      },
      {
        name: 'آموزش next',
        pv: 38,
      },
      {
        name: 'آموزش next',
        pv: 49,
      },
      {
        name: 'آموزش next',
        pv: 56,
      },
      {
        name: 'آموزش next',
        pv: 63,
      },
      {
        name: 'آموزش next',
        pv: 76,
      },
      {
        name: 'آموزش next',
        pv: 83,

      },
      {
        name: 'آموزش next',
        pv: 100,
      },
    ],
    activeIndex: 0,
  }

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };
  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];
    return (
      <div className='flex flex-col gap-6 pt-5 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[50vh]'>
        <div className='flex justify-between items-center px-4 '>
          <h3>سهم فروش برای ما</h3>
          <div className='flex justify-between gap-3'>
            <Date />
            <Date />
          </div>
        </div>

        <ResponsiveContainer width="100%" height={100}>
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" onClick={this.handleClick}>
              {data.map((entry, index) => (
                <Cell cursor="pointer" fill={index === activeIndex ? '#82ca9d' : '#8884d8'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div >

    );
  }
}
export default Most_visited_course
