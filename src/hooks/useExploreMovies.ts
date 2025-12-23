import { useInfiniteQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient.ts";
import type { MovieList } from "../entities/MovieList.ts";
import type { MovieTemp } from "../entities/MovieTemp.ts";

const ApiClient = new tmdbApiClient<MovieTemp>("/discover/movie");

const useExploreMovies = (genreId: number | null, searchText: string) => {
  return useInfiniteQuery<MovieList<MovieTemp>, Error>({
    queryKey: ["explore_popular", genreId],

    queryFn: ({ pageParam }) =>
      ApiClient.getMovies({
        params: {
          page: pageParam,
          with_genres: genreId,
          sort_by: "popularity.desc",
        },
      }),

    getNextPageParam: (lastPage) => {
      return lastPage?.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1,
    enabled: searchText === "",
    refetchOnMount: "always",
    refetchOnWindowFocus: "always",
  });
};

export default useExploreMovies;
