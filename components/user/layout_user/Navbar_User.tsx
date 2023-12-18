import Dropdown from '@/components/layout_main/Dropdown';
  

const Navbar_User = () => {
  
  return (
    <div className="rounded-b-[40px] shadow-lg h-[92px]">
      <div className="flex flex-1 items-center justify-between px-[130px]">
        <div className="flex gap-8">
          <img className="w-[186px] h-[86px] mt-[5px]" src='/images/global/Rectangle.png' />
          <div>
            <ul className="flex gap-8 mt-[42px]">
              <li><Dropdown /></li>
              <li>تدریس کنید</li>
              <li>وبلاگ</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 mt-3">
          <div className="flex gap-4">
            <img
              src="/icon/user/home_page/navbar/search.svg"
              alt="Search"
            />
            <img
              src="/icon/user/home_page/navbar/shopping_cart.svg"
              alt="Shopping_cart Logo"
            />
          </div>
          <div className="border-solid border-[1px] border-[#008000] rounded-[12px]">
            <p className="text-[#008000] flex py-2 px-[14px] cursor-pointer">حساب کاربری</p>
          </div>
        </div>
      </div>
     
    </div >
  );
};

export default Navbar_User;
