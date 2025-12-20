import { FiChevronRight } from "react-icons/fi";


import Marquee from "react-fast-marquee";
import MovieSkeleton from "./MovieSkeleton";
import useUpcoming from "../hooks/useUpcoming";
import MovieCard from "./MovieCard";

const Upcoming = () => {
  const { data, isLoading, error } = useUpcoming();

  if (error) return <p>Network Error, Unable to display.</p>;

  return (
    <>
      <div className="flex mb-4 flex-col p-5 pb-0 pt-10 border-[#390533]">
        <h2 className="flex pl-2 border-l-4 items-center text-[1.5rem]  font-semibold border-[#e50914]">
          Upcoming
          <FiChevronRight className="text-2xl text-white" />
        </h2>

        {isLoading && <MovieSkeleton />}

        <Marquee speed={50} className="mx-auto">
          {data?.results.map((movie, index) => (
            <MovieCard movie={movie} index={index} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Upcoming;
