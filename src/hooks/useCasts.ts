import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { Cast, FetchCastsResponse } from "../entities/Actors";

const useCasts = (movieId: number | null) => {
  const ApiClient = new tmdbApiClient<Cast>(`/movie/${movieId}/credits`);

  return useQuery<FetchCastsResponse<Cast>, Error>({
    queryKey: ["casts", movieId],
    queryFn: () => ApiClient.getCasts(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useCasts;
