//use client
import Info_user from '@/components/user/Account/Info_user';
import Sidbar from '@/components/user/Account/Sidbar';
import Layout_User from '@/components/user/layout_user/Layout_User';

const index = () => {






  return (

    <Layout_User showFooter={false}>

      <div className='flex gap-6 mt-[71px] mx-[136px]'>

        <Sidbar />
        <Info_user />

      </div>

    </Layout_User>

  );
}

export default index
