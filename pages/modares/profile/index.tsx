import Course_Fetch from '@/components/api/user/Course_Fetch'
import Layout_profil_modares from '@/components/layout/Layout_profil_modares'
import Image from 'next/image'
import { useRouter } from 'next/router'


const index = () => {




  const his = [
    // { id: 1, name: "نام دوره", date: "تاریخ شروع دوره", number: "تعداد دانشجو", amount:"میزان فروش", status: "وضعیت دوره" },
    { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", amount: "1,507,000", status: "فعال" },
    { id: 1, name: "اموزش nnode js", date: " 16 مهر1402", number: "12", amount: "1,507,000", status: "فعال" },

  ]

  const {data_show_listCourse} = Course_Fetch()

  const router = useRouter()
  const LinkToAddCourse = () => {
    router.replace('/modares/teaching')
  }
  return (

    <Layout_profil_modares>


      <div className='flex flex-col gap-2 w-[64%] rounded-[15px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] h-[640px] overflow-y-auto'>

        <div className='flex justify-center h-16'>
          <div className='flex justify-between items-center w-[93%]'>
            <div className='flex'>
              <Image src='/icon/modares/sidbar/courses.svg' alt='courses' width={24} height={24} />
              <h2 className='text-lg'>دوره ها</h2>
            </div>
            <div onClick={LinkToAddCourse} className='flex justify-center items-center h-[35px] w-[11%] rounded-[10px] bg-[#393] cursor-pointer'>
              <p className=' text-white font-normal text-[90%]'>افزودن دوره</p>
            </div>
          </div>
        </div>


        <div className='flex flex-col px-8 gap-3'>

          <div className='flex flex-1 justify-around py-2'>
            <p className='text-sm font-bold flex justify-center w-[10%]'>نام دوره</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>تاریخ شروع دوره</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>تعداد دانشجو</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>میزان فروش</p>
            <p className='text-sm font-bold flex justify-center w-[10%]'>وضعیت دوره</p>
          </div>

          {his.map((item, i) => {
            return (
              <div className='flex justify-around rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.05)] py-5 mb-2 '>
                <p className='text-sm w-[12%] flex justify-center'>{item.name}</p>
                <p className='text-sm w-[12%] flex justify-center'>{item.date}</p>
                <p className='text-sm w-[12%] flex justify-center'>{item.number}</p>
                <p className='text-sm w-[12%] flex justify-center'>{item.amount}</p>
                <p className='text-sm w-[12%] flex justify-center text-[#008000] font-semibold'>{item.status}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout_profil_modares >

  )
}

export default index
