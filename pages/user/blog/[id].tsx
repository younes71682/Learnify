// @ts-nocheck
import Blog_Fetch from '@/components/api/admin/Blog_Fetch';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Header_id from '@/components/user/blog/Header_id'
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { CircleLoader } from 'react-spinners';

const A = () => {

  const router = useRouter()
  const { id } = router.query
  const blogId = id

  const { data_show_BlogId, pending_show_BlogId } = Blog_Fetch(null, blogId)
  const data = data_show_BlogId
  console.log('data', data)
  const title = data_show_BlogId?.data.blog?.title
  const description = data_show_BlogId?.data.blog?.description

  const paragraffirst = description?.split('\n').map((str, index) => {
    if (index === 0) {
      return <p key={index}>{str}</p>;
    }
  });



  const longtext = description?.split('\n').map((str) => <p>{str}</p>)

  return (

    <div>
      {pending_show_BlogId ?

        <div className='flex justify-center items-center h-[100vh]'>
          <CircleLoader color="#36d7b7" size={65} />
        </div>

        :

        <div>
          <Navbar />
          <Header_id title={title} paragraffirst={paragraffirst} />

          <div className='flex justify-center'>
            <div className='flex flex-col w-[70%] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[20px] text-lg p-6 my-[30px]'>

              <div className='flex flex-col gap-8 w-[90%] pt-6'>
                {longtext}
              </div>

            </div>
          </div>
          <Footer />
        </div>
      }
    </div>
  );
};

export default A;
