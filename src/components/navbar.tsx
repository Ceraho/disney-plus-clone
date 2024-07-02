import Link from "next/link";

function Navbar() {
  return (
    <nav className="sticky z-30 h-[52px] pr-[12px] pl-[20px]">
      <ul className="flex justify-end">
        <li>
          <Link href={"/login"}>
            <button className="transition-colors ease-in-out duration-200 hover:bg-white hover:text-black text-[13px] bg-black/80 border border-white w-fit h-[40px] px-[8px] m-[5px] rounded-sm md:h-[50px] md:px-[16px] md:text-[18px]">
              LOG IN
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
