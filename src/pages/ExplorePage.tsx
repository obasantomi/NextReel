import Genres from "../components/Genres";
import { ExploreMoviesGrid } from "../components/ExploreMoviesGrid";
import { BsChevronDown } from "react-icons/bs";
import useMoviesStore from "../services/store";
import useGenresList from "../hooks/useGenresList";

const ExplorePage = () => {
  const genreId = useMoviesStore((s) => s.genreId);
  const { data } = useGenresList();

  const selectedGenre = data?.genres.filter((g) => g.id === genreId);

  return (
    <>
      <div className="max-w-230">
        <h3 className="my-3.75 font-bold text-[14px] md:text-[1rem]">
          Browse All Movies and TV Shows With Smart Filters and Trailers
        </h3>
        <p className="text-[#b9bdcc] text-[12px] md:text-[14px]">
          Wondering what to watch next? Discover thousands of movies and TV
          shows with Next-Reel — a smart movie discovery platform built to help
          you decide faster. Next-Reel lets you search and explore titles by
          genre, popularity, and ratings, all in one place. Browse trailers,
          compare options, and save movies to your watchlist so you always know
          what to watch next.
        </p>
      </div>

      <div className="flex gap-5 mt-10">
        <div className="max-w-40  md:max-w-50 rounded flex gap-2 justify-center items-center px-5 md:px-10 py-2 bg-[#161f2a] text-[#ccc] ">
          {selectedGenre?.[0] ? selectedGenre[0].name : "All Genre"}
        </div>
        <div className=" max-w-40 flex gap-4 items-center rounded px-4 md:px-8 py-2 bg-[#161f2a] text-[#ccc] ">
          Popular <BsChevronDown />
        </div>
      </div>

      <div className="mb-8 mt-5">
        <Genres />
      </div>

      <div className="w-full">
        <ExploreMoviesGrid />
      </div>
    </>
  );
};
export default ExplorePage;
