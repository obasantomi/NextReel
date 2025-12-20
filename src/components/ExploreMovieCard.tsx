import { Link } from "react-router-dom";
import type { MovieTemp } from "../entities/MovieTemp";
import GetMovieImageUrl from "../services/GetMovieImageUrl";
import useMoviesStore from "../services/store";

interface Movie {
  movie: MovieTemp;
}

const ExploreMovieCard = ({ movie }: Movie) => {
  const setMovieId = useMoviesStore((s) => s.setMovieId);

  return (
    <Link to={`/explore_movies/${movie.id}`} className="w-full">
      <div
        onClick={() => setMovieId(movie.id)}
        key={movie.id}
        className="hover:transform relative hover:scale-102 duration-300  max-w-47.5 h-61.25 transition-transform  rounded-2xl bg-white"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(${GetMovieImageUrl(movie.poster_path, "/w300")})`
            : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-transparent hover:bg-[#07000e]/30 transition-colors ease-in duration-300" />
      </div>
    </Link>
  );
};

export default ExploreMovieCard;
