import Sidbar from '@/components/user/Account/Sidbar'
import Date from '@/components/user/date/Date'

const order_history = () => {




  const his = [
    { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
    { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
    { id: 3, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
  ]


  return (
    <div className='flex gap-6 mt-[71px] mr-[136px]'>
      <Sidbar />

      <div className='flex flex-col gap-2 w-[70%] rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)]'>

        <div className='flex justify-between pl-8 pr-4 py-5'>
          <div className='flex items-center gap-2'>
            <img src='/icon/user/account/sidebar/history.svg' alt='History' />
            <h2 className='text-lg'>تاریخچه سفارش‌ها</h2>
          </div>
          <div className='flex gap-4'>
            <Date />
            <Date />
          </div>
        </div>

        <div className='flex flex-col px-8 gap-3'>

          <div className='flex rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-5 px-[53px]'>
            <div className='flex flex-1 justify-between'>
              <p className='text-sm font-bold'>#</p>
              <p className='text-sm font-bold'>نام دوره</p>
              <p className='text-sm font-bold'>تاریخ</p>
              <p className='text-sm font-bold'>مبلغ</p>
              <p className='text-sm font-bold'>وضعیت</p>
            </div>
          </div>

          {his.map((item, i) => {
            return (
              <div className='flex justify-between rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-5 px-[53px] '>
                <p className='text-sm'>{i + 1}</p>
                <p className='text-sm'>{item.name}</p>
                <p className='text-sm'>{item.date}</p>
                <p className='text-sm'>{item.price}</p>
                <p className='text-sm'>{item.status}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default order_history
