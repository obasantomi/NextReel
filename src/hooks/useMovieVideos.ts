import { useQuery } from "@tanstack/react-query";
import tmdbApiClient from "../services/ApiClient";
import type { FetchVideosResponse, Video } from "../entities/Video";

const useMovieVideos = (movieId: number) => {
  const ApiClient = new tmdbApiClient<Video>(`movie/${movieId}/videos`);

  return useQuery<FetchVideosResponse<Video>>({
    queryKey: ["videos", movieId],
    queryFn: () => ApiClient.getVideos(),
  });
};

export default useMovieVideos;
