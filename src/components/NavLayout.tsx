import { IoSearchOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div className="px-5 md:px-10 flex flex-col">
      <nav className="flex justify-between items-center w-full gap-5  pt-2">
        <div>
          <span className="text-[#e50914] hidden md:block font-oswald-bold font-bold md:text-[20px]">
            NextReel
          </span>
          <span className="text-[#e50914] md:hidden block font-oswald-bold brightness-100 contrast-200 font-bold text-[30px]">
            NR
          </span>
        </div>
        {/* Input Group */}
        <div className="flex gap-2 flex-1 max-h-10 items-center px-5 py-3  md:px-3 md:py-1.25 bg-[#161f2a] text-[#ccc] rounded text-[14px]">
          <IoSearchOutline />
          <input
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            className="flex-1 outline-0"
            placeholder="Search for movies or TV shows"
          />
        </div>

        <a className="bg-[#e50914] hidden md:flex hover:bg-[#b0070f] text-white transition-colors duration-300 max-h-8 cursor-pointer font-bold self-center p-3  justify-center items-center rounded">
          Membership
        </a>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLayout;
