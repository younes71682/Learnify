import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="rounded-b-[40px] shadow-lg">
      <div className="flex items-center justify-between px-[116px] pt-1 ">
        <header className="flex gap-6 items-center">

          <img className="w-[186px]" src='/images/Rectangle.png' />
        
        <div className="flex items-center pt-3">
          <ul className="flex gap-8 ">
            <li>دوره ها</li>
            <li>تدریس کنید</li>
            <li>وبلاگ</li>
          </ul>
        </div>
        </header>
        <div className="flex items-center gap-6">
          
          <div className="flex gap-3">
          <Image
            src="/icon/navbar/search.svg"
            alt="Search Logo"
            width={24}
            height={24}
            priority
            />
  
          <Image
            src="/icon/navbar/shopping_cart.svg"
            alt="Sopping_cart Logo"
            width={24}
            height={24}
            priority
            />
            </div>
            
          <div className="text-[#008000] border-solid border-2 border-[#008000] rounded-[12px] m-2"><Link className="flex py-1.5 px-3 " href="/">ورود | ثبت نام</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;