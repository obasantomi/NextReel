import axios, { type AxiosRequestConfig } from "axios";
import type { MovieList } from "../entities/MovieList";
import type { FetchVideosResponse } from "../entities/Video";
import type { FetchReviewResponse } from "../entities/Reviews";
import type { FetchCastsResponse } from "../entities/Actors";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "73c4cd0a04add5fa0c494522d57256fe",
  },
});

class tmdbApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getMovies = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<MovieList<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getMovie = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };

  getVideos = () => {
    return axiosInstance
      .get<FetchVideosResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };

  getReviews = () => {
    return axiosInstance
      .get<FetchReviewResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };

  getCasts = () => {
    return axiosInstance
      .get<FetchCastsResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };
}

export default tmdbApiClient;
