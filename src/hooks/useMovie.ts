import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { MovieTemp } from "../entities/MovieTemp";

const useMovie = (movieId: number | null) => {
  const ApiClient = new tmdbApiClient<MovieTemp>(`/movie/${movieId}`);

  return useQuery<MovieTemp, Error>({
    queryKey: ["movieDet", movieId],
    queryFn: () => ApiClient.getMovie(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useMovie;
