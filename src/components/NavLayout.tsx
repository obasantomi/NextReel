import { IoSearchOutline } from "react-icons/io5";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useMoviesStore from "../services/store";
import { useRef } from "react";

const NavLayout = () => {
  const setSearchText = useMoviesStore((s) => s.setSearchText);

  const clearInput = useMoviesStore((s) => s.clearInput);
  const setClearInput = useMoviesStore((s) => s.setClearInput);
  const navigate = useNavigate();

  const searchInput = useRef<HTMLInputElement>(null);

  if (clearInput) {
    searchInput.current ? (searchInput.current.value = "") : null;
    setClearInput();
  }

  return (
    <div className="px-5 md:px-10 flex flex-col">
      <nav className="flex justify-between items-center w-full gap-2 md:gap-5  pt-2">
        <div>
          <Link to={"/"}>
            <span className="text-[#e50914] hidden md:block font-oswald-bold font-bold md:text-[20px]">
              NextReel
            </span>
            <span className="text-[#e50914] md:hidden block font-oswald-bold brightness-100 contrast-200 font-bold text-[20px]">
              NR
            </span>
          </Link>
        </div>
        {/* Input Group */}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchInput.current ? setSearchText(searchInput.current.value) : "";
            navigate("/explore_movies");
          }}
          className="flex gap-2 flex-1 max-h-10 items-center px-5 py-3  md:px-3 md:py-1.25 bg-[#161f2a] text-[#ccc] rounded text-[14px]"
        >
          <IoSearchOutline />
          <input
            ref={searchInput}
            type="text"
            name="search"
            id="search"
            autoComplete="off"
            className="flex-1 md:text-[14px] text-[10px] outline-0"
            placeholder="Search for movies or TV shows"
            onChange={(e) => {
              if (e.target.value === "") {
                setSearchText("");
                navigate("/explore_movies");
              }
            }}
          />
        </form>

        <Link
          to={"/explore_movies"}
          className="bg-[#e50914] flex hover:bg-[#b0070f] text-[12px] text-white transition-colors duration-300 max-h-8 cursor-pointer font-bold self-center p-1.5 md:p-3  justify-center items-center rounded"
        >
          Explore
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavLayout;
