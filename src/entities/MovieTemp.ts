import type { Genre } from "./Genres";

export interface MovieTemp {
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: string;
  vote_count: string;
  backdrop_path: string;
  release_date: string;
  tagline: string;
  genres: Genre[];
  adult: boolean;
  homepage: string;
  runtime: string;
  production_countries: { id: number; name: string }[];
  production_companies: { id: number; name: string }[];
  status: string;
}
