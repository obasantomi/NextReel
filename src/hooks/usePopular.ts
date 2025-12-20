import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";

import type { MovieList } from "../entities/MovieList";
import type { MovieTemp } from "../entities/MovieTemp.ts";

const ApiClient = new tmdbApiClient<MovieTemp>("/movie/popular");

const usePopular = () => {
  return useQuery<MovieList<MovieTemp>, Error>({
    queryKey: ["popular"],
    queryFn: () => ApiClient.getMovies(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default usePopular;
