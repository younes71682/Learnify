//@ts-nocheck
import * as React from 'react';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CourseComponent from '@/components/user/course/CourseComponent';
import Sidebarfilter from '@/components/user/course/Sidebarfilter'
import Course_Fetch from '@/components/api/user/Course_Fetch';
import Pagination from '@mui/material/Pagination';
import { CircleLoader } from 'react-spinners';



export default function Courses() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data_show_listCourse, pending_show_listCourse } = Course_Fetch(currentPage);

  const listCourse = data_show_listCourse?.data.data.data
  console.log('ffdds',listCourse)

  //index last_page
  const last_page = data_show_listCourse?.data.data.last_page

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    console.log(currentPage)
  }


  
  return (
    <div>
      {pending_show_listCourse ?
        < div className='flex justify-center items-center h-[100vh]'>
          <CircleLoader color="#36d7b7" />
        </div>
        :
        <div>
          <Navbar />

          <div className='flex flex-col'>

            <div className='flex flex-col justify-end mx-32 h-40 pb-3 '>
              <h3 className='text-[#484848] text-[24px] font-bold leading-[27.5px] '>دوره های آموزشی برنامه نویسی</h3>
              <h3 className='text-[#858585] text-[16px] font-medium leading-[27.5px]'>دوره ببین، تمرین کن، پیشرفت کن</h3>
            </div>

            <div className='flex justify-center gap-6 '>

              <div className='w-[18%] h-[720px]'>
                <Sidebarfilter />
              </div>

              <div className='flex flex-wrap gap-6 w-[64%]'>
                {listCourse?.map((i) => {
                  return (
                    <div className='w-[274px] h-[469px]' key={i.id}>
                      <CourseComponent
                        {...i}
                      />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='flex justify-center h-20'>
              <Pagination
                style={{ direction: 'ltr' }}
                page={currentPage}
                count={last_page}
                onChange={handleChangePage}
                variant="outlined" color="primary"
              />
            </div>
          </div>

          <Footer />
        </div>
      }
    </div >
  );
}
