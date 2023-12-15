import React from 'react'

const Select_province = () => {


  const options = [
    { value: 'man',     label: 'آذربایجان شرقی' },
    { value: 'woman', label: 'آذربایجان غربی' },
    { value: 'nodesir', label: 'تمایلی ندارم' },
  ];

  
  const [state, setState] = React.useState([]);




  return (
    <div className='w-[55%]'>

<select id="countries" className="text-[#292D32] text-sm rounded-[10px] w-full h-[48px] focus:ring-[#008000] focus:border-[#008000]  border-[#AAAAAA]">
  <option selected>استان</option>
  <option value="DE">آذربایجان شرقی</option>
  <option value="DE">آذربایجان غربی</option>
  <option value="DE">اردبیل</option>
  <option value="DE">اصفهان</option>
  <option value="DE">البرز</option>
  <option value="DE">ایلام</option>
  <option value="DE">بوشهر</option>
  <option value="DE">تهران</option>
  <option value="DE">چهارمحال و بختیاری</option>
  <option value="DE">خراسان جنوبی</option>
  <option value="DE">خراسان رضوی</option>
  <option value="DE">خراسان شمالی</option>
  <option value="DE">خوزستان</option>
  <option value="DE">زنجان</option>
  <option value="DE">سمنان</option>
  <option value="DE">سیستان و بلوچستان</option>
  <option value="DE">فارس</option>
  <option value="DE">قزوین</option>
  <option value="DE">قم</option>
  <option value="DE">کردستان</option>
  <option value="DE">کرمان</option>
  <option value="DE">کرمانشاه</option>
  <option value="DE">کهگیلویه و بویراحمد</option>
  <option value="DE">گلستان</option>
  <option value="DE">گیلان</option>
  <option value="DE">لرستان</option>
  <option value="DE">مازندران</option>
  <option value="DE">مرکزی</option>
  <option value="DE">هرمزگان</option>
  <option value="DE">همدان</option>
  <option value="DE">یزد</option>
</select>



    
  </div>
  )
}

export default Select_province
