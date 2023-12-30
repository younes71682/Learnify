import React from 'react'

const Header_Main = (props:any) => {

  const {handlescrollstaudy}=props

  return (

    <div className='flex'>

      <div className='flex flex-1 justify-center pl-12 '>

        <div className='flex flex-col justify-center gap-10 w-[63%]'>

          <div>
            <h1 className='text-[#484848] text-[40px] font-YekanBakhFat'>مهارت  خود را  <span className='text-[#4169E1]'>آموزش</span> دهید و <span className='text-[#4169E1]'>درآمد</span> همیشگی کسب کنید.</h1>
          </div>

             <div className='flex justify-end gap-3 pr-64 pl-5 '>
              <div onClick={handlescrollstaudy} className='flex justify-center items-center rounded-[10px] py-2 flex-1 border-solid border-[1px] border-[#757575] cursor-pointer'><p className='text-[#757575] text-base'>مطالعه شرایط</p></div>
              <div className='flex justify-center items-center rounded-[10px] py-2 flex-1 bg-[#4169E1]'><p className='text-[#FFF] text-base'>شروع تدریس</p></div>
           </div>

        </div>
      </div>

      <div className='flex w-[43%] relative  '>
           <div className='bg-gradient-to-br from-[#FF725E] from-30% via-[#87E2FF] via-50% opacity-[0.3] blur-[4px] rounded-md w-full h-full absolute -z-10 ' />
          <div className='flex rounded-[100%] mt-1'>
            <img src='/images/modares/home_page/woman.png' alt='woman' />
          </div>
       </div>

    </div>
  )
}

export default Header_Main
