
import usePopular from "../hooks/usePopular";


import Marquee from "react-fast-marquee";
import MovieSkeleton from "./MovieSkeleton";
import MovieCard from "./MovieCard";

const Popular = () => {
  const { data, isLoading, error } = usePopular();

  if (error) return <p>Network Error, Unable to display.</p>;


  if (data) return (
    <>
      <div className="flex mb-4 flex-col p-5 pb-0 pt-10 border-[#390533]">
        <h2 className="flex pl-2 border-l-4 items-center text-[1.5rem]  font-semibold border-[#e50914]">
          Popular now

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

export default Popular;
