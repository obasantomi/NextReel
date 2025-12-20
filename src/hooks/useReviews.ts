import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { FetchReviewResponse, Review } from "../entities/Reviews";

const useReviews = (movieId: number | null) => {
  const ApiClient = new tmdbApiClient<Review>(`/movie/${movieId}/reviews`);

  return useQuery<FetchReviewResponse<Review>, Error>({
    queryKey: ["reviews", movieId],
    queryFn: () => ApiClient.getReviews(),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useReviews;
