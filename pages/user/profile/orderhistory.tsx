import Layout_profil_user from '@/components/layout/Layout_profil_user'
import Date from '@/components/user/date/Date'
import Image from 'next/image'

const Orderhistory = () => {




  const his = [
    { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
    { id: 2, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
    { id: 3, name: "اموزش nnode js", date: " 16 مهر1402", price: "1,267,000", status: "پرداخت شده" },
  ]


  return (

    <Layout_profil_user>


      <div className='flex flex-col gap-2 rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] w-[64%] h-[100vh] overflow-y-auto'>

        <div className='flex justify-between pl-8 pr-4 py-5'>
          <div className='flex items-center gap-2'>
            <Image src='/icon/user/account/sidebar/history.svg' alt='icon' width={24} height={24} />
            <h2 className='text-lg'>تاریخچه سفارش‌ها</h2>
          </div>
          <div className='flex gap-4'>
            <Date />
            <Date />
          </div>
        </div>

        <div className='flex flex-col px-8 gap-3'>

          <div className='flex flex-1 justify-around rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-5'>
            <p className='text-sm font-bold flex justify-center w-[10%]'>#</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>نام دوره</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>تاریخ</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>مبلغ</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>وضعیت</p>
          </div>

          {his.map((item, i) => {
            return (
              <div className='flex justify-around rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-5'>
                <p className='text-sm flex justify-center w-[12%]'>{i + 1}</p>
                <p className='text-sm flex justify-center w-[12%]'>{item.name}</p>
                <p className='text-sm flex justify-center w-[12%]'>{item.date}</p>
                <p className='text-sm flex justify-center w-[12%]'>{item.price}</p>
                <p className='text-sm flex justify-center w-[12%]'>{item.status}</p>
              </div>
            )
          })}
        </div>
      </div>

    </Layout_profil_user>

  )
}

export default Orderhistory
