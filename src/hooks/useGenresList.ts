import { useQuery } from "@tanstack/react-query";

import type { FetchGenresResponse } from "../entities/Genres";
import { axiosInstance } from "../services/ApiClient";

const useGenresList = () => {
  return useQuery<FetchGenresResponse, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      axiosInstance
        .get<FetchGenresResponse>("/genre/movie/list")
        .then((res) => res.data),
  });
};

export default useGenresList;
