import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";

import type { MovieList } from "../entities/MovieList";
import type { MovieTemp } from "../entities/MovieTemp";

const ApiClient = new tmdbApiClient<MovieTemp>("/movie/upcoming");

const useUpcoming = () => {
  return useQuery<MovieList<MovieTemp>, Error>({
    queryKey: ["upcoming"],
    queryFn: () => ApiClient.getMovies(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useUpcoming;
