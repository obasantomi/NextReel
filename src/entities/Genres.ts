export interface Genre {
  id: number;
  name: string;
}

export interface FetchGenresResponse {
  genres: Genre[];
}
