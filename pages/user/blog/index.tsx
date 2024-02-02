import React from 'react'
import Blog_Fetch from '@/components/api/admin/Blog_Fetch'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Header from '@/components/user/blog/Header'
import Link from 'next/link'
import Pagination from '@mui/material/Pagination';
import Image from 'next/image'
import { CircleLoader } from 'react-spinners'

type ListBlog = {
  id: number,
  title: string,
  description: string

}

const index = () => {


  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [blogId, setBlogId] = React.useState<number>();

  const { data_show_listblog, pending_show_listblog } = Blog_Fetch(currentPage,blogId)


  console.log(data_show_listblog)
  //index show listBlog
  const listBlog = data_show_listblog?.data.blogs.data

  //index last_page
  const last_page = data_show_listblog?.data.blogs.last_page
  //change_Page
  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  return (

    <div>

      <Navbar />
      <Header />


      {pending_show_listblog === true ?
        <div className='flex justify-center h-32'>
          <CircleLoader color="#36d7b7" />
        </div>
        :
        <div className='flex flex-col items-center'>
          <div className='flex flex-wrap justify-center gap-6 mx-[136px]'>
            {listBlog?.map((item: ListBlog, index) => {
              if (index === 4 || index === 5) {
                return (
                  <div className='flex items-center w-[572px] h-[212px] rounded-[0px_15px_15px_20px] shadow-[0_0_20px_rgba(0,0,0,0.15)]'>

                    {item.image?.media.map((i) => {
                      return (
                        <div className='flex rounded-[15px] w-[274px] h-full'>
                          <img src={i.original_url} alt='ImageBog' />
                        </div>
                      )
                    })}

                    <div className='flex flex-col items-start flex-1 px-6 '>
                      <h3 className='text-base font-bold'>{item.title}</h3>
                      <p className='text-xs font-normal leading-6 pt-[5px]'>{item.description}</p>
                      <div className='flex items-center gap-[3px] pt-4 text-[#008000] text-xs font-bold hover:scale-105'>
                        <Link href={`/user/blog/${item.id}`}>مشاهده مطلب</Link>
                        <Image src='/icon/blog/left.svg' alt='Left' width={16} height={16} />
                      </div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className='flex flex-col items-center rounded-[15px_15px_20px_20px] shadow-[0_0_20px_rgba(0,0,0,0.15)] w-[274px] h-[266px]'>

                    {item.image?.media.map((i) => {
                      return (
                        <div className='flex rounded-[15px_15px_0_0] w-full h-[181px]'>
                          <img src={i.original_url} alt='ImageBog' />
                        </div>
                      )
                    })}

                    <Link href={`/user/blog/${item.id}`} className='flex items-center flex-1 hover:scale-110 hover:text-[#008000]'>
                      <p className=''>{item.title}</p>
                    </Link>
                  </div>
                )
              }
            })}
          </div>
          <div className='flex justify-center items-center h-24'>
            <Pagination
              style={{ direction: 'ltr' }}
              count={last_page}
              page={currentPage}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      }
      <Footer />
    </div >
  )
}

export default index
