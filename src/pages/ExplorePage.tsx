import Genres from "../components/Genres";
import { ExploreMoviesGrid } from "../components/ExploreMoviesGrid";
import useMoviesStore from "../services/store";
import useGenresList from "../hooks/useGenresList";

const ExplorePage = () => {
  const genreId = useMoviesStore((s) => s.genreId);
  const { data, error } = useGenresList();

  const selectedGenre = data?.genres.filter((g) => g.id === genreId);

  if (error) throw error;

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

      <div className="flex mt-10">
        <div className="text-[12px] rounded  items-center px-3 md:px-5 py-2 bg-[#232e3a] text-[#8c939c] ">
          <h3 className="text-[#e9edf7] inline mr-2 text-[12px]">
            Selected Genre:
          </h3>{" "}
          {selectedGenre?.[0] ? selectedGenre[0].name : "All Genres"}
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
