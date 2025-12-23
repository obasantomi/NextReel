import { useInfiniteQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { MovieList } from "../entities/MovieList";
import type { MovieTemp } from "../entities/MovieTemp";

const ApiClient = new tmdbApiClient<MovieTemp>("/search/movie");
const useSearch = (searchText: string) => {
  return useInfiniteQuery<MovieList<MovieTemp>, Error>({
    queryKey: ["search", searchText],
    queryFn: ({ pageParam }) =>
      ApiClient.getMovies({
        params: {
          query: searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    enabled: searchText.trim() !== "",
  });
};

export default useSearch;
