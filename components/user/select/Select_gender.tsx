
 import React, { useState } from 'react';
 
const Select_gender = () => {

  const options = [
    { value: 'man', label: 'مرد' },
    { value: 'woman', label: 'زن' },
    { value: 'nodesir', label: 'تمایلی ندارم' },
  ];
  const [gender, setGender] = React.useState([]);


  return (

    <div>
      <select  id="countries" className="text-[#292D32] text-sm rounded-[10px] w-[210px] h-[48px] focus:ring-[#008000] focus:border-[#008000] border-[#AAAAAA]">
        <option selected className='text-[#AAAAAA]'>جنسیت</option>
        <option value="Man">مرد</option>
         <option value="Male">زن</option>
        <option value="Nodesir">تمایلی ندارم</option>
      </select>
    </div>
  );
}

export default Select_gender