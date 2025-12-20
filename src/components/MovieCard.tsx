import type { MovieTemp } from "../entities/MovieTemp";
import GetMovieImageUrl from "../services/GetMovieImageUrl";

interface Movie {
  movie: MovieTemp;
  index: number;
}

const MovieCard = ({ movie, index }: Movie) => {
  return (
    <div
      key={movie.id}
      className="m-5 hover:transform relative hover:scale-102 duration-300 transition-transform min-w-40.75 h-61.25 rounded-2xl bg-white"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(${GetMovieImageUrl(movie.poster_path, "/w300")})`
          : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-transparent hover:bg-[#07000e]/30 transition-colors ease-in duration-300" />

      <span className="absolute ml-3 mt-2 z-10 font-oswald-bold bg-linear-to-b bg-clip-text text-transparent from-white to-white/50 text-4xl font-bold">
        {index + 1}
      </span>
    </div>
  );
};

export default MovieCard;
