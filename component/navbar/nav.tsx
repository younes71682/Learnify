import Image from "next/image";
import Link from "next/link";

type NavProps = {};

const Nav = (props: NavProps) => {
  return (
    <div className="bg-black flex items-center">
      <header>
        <img src='/images/Rectangle.png' />
      </header>
      <nav>
        <ul className="flex">
          <li>دوره ها</li>
          <li>تدریس کنید</li>
          <li>وبلاگ</li>
        </ul>
      </nav>
      <div className="flex">
        <Image
          src="/icon/search.svg"
          alt="Search Logo"
          width={24}
          height={24}
          priority
        />
        <Image
          src="/icon/shopping_cart.svg"
          alt="Sopping_cart Logo"
          width={24}
          height={24}
          priority
        />
        <div><Link href="/">ورود|ثبت نام</Link></div>
      </div>
    </div>
  );
};

export default Nav;