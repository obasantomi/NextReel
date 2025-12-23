import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { MovieTemp } from "../entities/MovieTemp";
import type { MovieList } from "../entities/MovieList";

const useSimilar = (movieId: number | null) => {
  const ApiClient = new tmdbApiClient<MovieTemp>(`/movie/${movieId}/similar`);

  return useQuery<MovieList<MovieTemp>, Error>({
    queryKey: ["similar", movieId],
    queryFn: () => ApiClient.getMovies(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useSimilar;
