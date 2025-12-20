import { FiChevronRight } from "react-icons/fi";

import Marquee from "react-fast-marquee";
import MovieSkeleton from "./MovieSkeleton";
import useTopRated from "../hooks/useTopRated";
import MovieCard from "./MovieCard";

const TopRated = () => {
  const { data, isLoading, error } = useTopRated();

  if (error) return <p>Network Error, Unable to display.</p>;

  return (
    <>
      <div className="flex  flex-col p-5 my-4  pt-10 border-[#390533]">
        <h2 className="flex pl-2 border-l-4 items-center text-[1.5rem]  font-semibold border-[#e50914]">
          Top Rated
          <FiChevronRight className="text-2xl text-white" />
        </h2>

        {isLoading && <MovieSkeleton />}

        <Marquee speed={50} className="mx-auto mt-5">
          {data?.results.map((movie, index) => (
            <MovieCard movie={movie} index={index} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default TopRated;
