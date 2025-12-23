import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import useExploreMovies from "../hooks/useExploreMovies";
import ExploreMovieCard from "./ExploreMovieCard";
import MovieSkeleton from "./MovieSkeleton";
import useMoviesStore from "../services/store";
import { Spinner } from "@chakra-ui/react";
import useSearch from "../hooks/useSearch";

export const ExploreMoviesGrid = () => {
  const genreId = useMoviesStore((s) => s.genreId);
  const searchText = useMoviesStore((s) => s.searchText);

  const { data, isLoading, hasNextPage, fetchNextPage, error } = searchText
    ? useSearch(searchText)
    : useExploreMovies(genreId, searchText);

  const dataLength =
    data?.pages?.reduce((acc, page) => acc + page.results.length, 0) || 0;

  if (data?.pages?.[0].results?.length === 0) return <p>No results found.</p>;

  if (error) throw error;

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
