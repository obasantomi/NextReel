import { create } from "zustand";

interface MoviesStore {
  genreId: number | null;
  setGenreId: (genreId: number | null) => void;
  cat: string;
  setCat: (cat: string) => void;
  movieId: number | null;
  setMovieId: (movieId: number | null) => void;
}

const useMoviesStore = create<MoviesStore>((set) => ({
  genreId: null,
  setGenreId: (genreId: number | null) => set(() => ({ genreId: genreId })),
  cat: "",
  setCat: (cat: string) => set(() => ({ cat: cat })),
  movieId: null,
  setMovieId: (movieId: number | null) => set(() => ({ movieId: movieId })),
}));

export default useMoviesStore;
