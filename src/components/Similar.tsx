import { FiChevronRight } from "react-icons/fi";
import Marquee from "react-fast-marquee";
import MovieSkeleton from "./MovieSkeleton";
import useSimilar from "../hooks/useSimilar";
import { Link, useParams } from "react-router-dom";

import useMoviesStore from "../services/store";
import GetMovieImageUrl from "../services/GetMovieImageUrl";

interface Props {
  title?: string;
}

const Similar = ({ title }: Props) => {
  const setMovieId = useMoviesStore((s) => s.setMovieId);

  const { id } = useParams();

  const movieId = Number(id);

  const { data, isLoading, error } = useSimilar(movieId);

  if (error) return <p className="p-10">Network Error, Unable to display.</p>;

  if (!(data?.results.length === 0))
    return (
      <>
        <div className="flex mb-4 flex-col p-5 pb-0 pt-10 border-[#390533]">
          <h2 className="flex pl-2 border-l-4 items-center text-[14px] md:text-[1.5rem] mb-4 font-semibold border-[#e50914]">
            People who liked {title} also liked
            <FiChevronRight className="text-2xl text-white" />
          </h2>

          {isLoading && <MovieSkeleton />}

          <Marquee className="overflow-scroll">
            <div className="w-full flex gap-2">
              {data?.results.map(
                (movie) =>
                  movie.poster_path && (
                    <Link
                      key={movie.id}
                      to={`/explore_movies/${movie.id}`}
                      className="w-47.5 mr-5"
                    >
                      <div
                        onClick={() => setMovieId(movie.id)}
                        className="hover:transform relative hover:scale-102  duration-300 w-full max-w-47.5 h-61.25 transition-transform rounded-2xl bg-white"
                        style={{
                          backgroundImage: movie.poster_path
                            ? `url(${GetMovieImageUrl(
                                movie.poster_path,
                                "/w300"
                              )})`
                            : "",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute inset-0 bg-transparent hover:bg-[#07000e]/30 transition-colors ease-in duration-300" />
                      </div>
                    </Link>
                  )
              )}
            </div>
          </Marquee>
        </div>
      </>
    );
};

export default Similar;
