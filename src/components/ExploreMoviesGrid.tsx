import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useExploreMovies from "../hooks/useExploreMovies";
import ExploreMovieCard from "./ExploreMovieCard";
import MovieSkeleton from "./MovieSkeleton";
import useMoviesStore from "../services/store";
import { Spinner } from "@chakra-ui/react";

export const ExploreMoviesGrid = () => {
  const genreId = useMoviesStore((s) => s.genreId);

  const { data, isLoading, fetchNextPage, hasNextPage } =
    useExploreMovies(genreId);

  const dataLength =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={<MovieSkeleton />}
      dataLength={dataLength}
      className="w-full"
    >
      <div className="grid gap-5 w-full content-center justify-center justify-items-center grid-cols-[repeat(auto-fit,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(163px,1fr))]">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((movie, index) => (
              <ExploreMovieCard movie={movie} key={index} />
            ))}
          </React.Fragment>
        ))}
        {isLoading && (
          <div className="flex gap-5 text-[#7a7676]">
            Loading...
            <Spinner />
          </div>
        )}
      </div>
    </InfiniteScroll>
  );
};
