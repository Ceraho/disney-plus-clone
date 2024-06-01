function Navbar() {
  return (
    <nav className="sticky z-30 h-[52px] pr-[12px] pl-[20px]">
      <ul className="flex justify-end">
        <li>
          <button className="text-[13px] bg-black/80 border border-white w-fit h-[40px] px-[8px] m-[5px] md:h-[50px] md:px-[16px] md:text-[18px]">
            LOG IN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
