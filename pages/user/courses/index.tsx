//@ts-nocheck
import Pagination from '@/components/api/Pagination';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import CourseComponent from '@/components/user/course/CourseComponent';
import Sidebarfilter from '@/components/user/course/Sidebarfilter'
import React, { useState } from 'react';

export default function Courses() {
  const [pageparams, setPageParams] = useState({
    page: 1,
  });

  const { data, totalItem } = Pagination(pageparams);

  const handleNextPage = () => {
    if (data?.next_page_url) {
      const nextPage = data?.current_page + 1;
      setPageParams({ page: nextPage });
    }
  };

  const handlePrevPage = () => {
    if (data?.prev_page_url) {
      const prevPage = data?.current_page - 1;
      setPageParams({ page: prevPage });
    }
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center gap-6 '>
        <div className='flex flex-col w-[18%] h-[730px] my-20'>
          <div>
            <h3 className='text-[#484848] text-[24px] font-bold leading-[27.5px] '>دوره های آموزشی برنامه نویسی</h3>
            <h3 className='text-[#858585] text-[16px] font-medium leading-[27.5px]'>دوره ببین، تمرین کن، پیشرفت کن</h3>
          </div>
          <Sidebarfilter />
        </div>
        <div className='flex items-end flex-wrap gap-6 w-[64%] my-36'>
          {data?.data?.data?.map((item) => (
            <div className='w-[274px] h-[469px]' key={item.id}>
              <CourseComponent
                {...item}
                imageURL={item.image?.media?.[0]?.original_url || ''}
              />
            </div>
          ))}
        </div>
        </div>
        <div className='flex justify-center gap-2'>
          <button onClick={handlePrevPage} disabled={!data?.prev_page_url}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={!data?.next_page_url}>
            Next
          </button>
      </div>
      <Footer />
    </div>
  );
}
