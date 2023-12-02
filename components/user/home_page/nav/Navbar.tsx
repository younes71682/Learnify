import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";


const Navbar = () => {
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
            <Image
              src="/icon/user/home_page/navbar/search.svg"
              alt="Search Logo"
              width={24}
              height={24}
            />

            <Image
              src="/icon/user/home_page/navbar/shopping_cart.svg"
              alt="Sopping_cart Logo"
              width={24}
              height={24}
            />
          </div>

          <div className="border-solid border-[1px] border-[#008000] rounded-[12px]">
            <Link className="text-[#008000] flex py-2 px-[14px]" href="/">ورود | ثبت نام</Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Navbar;