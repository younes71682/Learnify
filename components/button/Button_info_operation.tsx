import React from 'react'

const Button_info_operation = (props:any) => {
    const {onSubmit,handleSubmit} = props
    return (
        <div className='flex justify-end gap-2'>
            <div className='text-[#C93636] bg-white border-solid border-[1px] border-[#C93636] rounded-[10px] w-[14%] py-2 flex justify-center items-center cursor-pointer'>انصراف</div>
            <div onClick={handleSubmit(onSubmit)} className='text-white bg-[#008000] rounded-[10px] w-[14%] py-2 flex justify-center items-center cursor-pointer'>اعمال تغییرات</div>
        </div>
    )
}

export default Button_info_operation
