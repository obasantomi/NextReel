import Marquee from "react-fast-marquee";
import useGenresList from "../hooks/useGenresList";
import useMoviesStore from "../services/store";

const Genres = () => {
  const { data, error, isLoading } = useGenresList();
  const setGenre = useMoviesStore((s) => s.setGenreId);
  const setClearInput = useMoviesStore((s) => s.setClearInput);
  const setSearchText = useMoviesStore((s) => s.setSearchText);

  const genres = data?.genres;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <Marquee pauseOnHover={false} pauseOnClick={true} className="w-full">
      <div className="overflow-scroll w-full [scrollbar-width:none]">
        <ul className="flex  w-full whitespace-nowrap">
          {genres?.map((genre) => (
            <li
              onClick={() => {
                setGenre(genre.id);
                setClearInput();
                setSearchText("");
              }}
              className="text-[#9e9b9b] ml-5 cursor-pointer hover:text-[#e1e8ff]"
              key={genre.id}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </Marquee>
  );
};

export default Genres;
