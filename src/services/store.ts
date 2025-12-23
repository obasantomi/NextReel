import { create } from "zustand";

interface MoviesStore {
  genreId: number | null;
  setGenreId: (genreId: number | null) => void;
  cat: string;
  setCat: (cat: string) => void;
  movieId: number | null;
  setMovieId: (movieId: number | null) => void;
  searchText: string;
  setSearchText: (searchText: string) => void;
  clearInput: boolean;
  setClearInput: () => void;
}

const useMoviesStore = create<MoviesStore>((set) => ({
  genreId: null,
  setGenreId: (genreId: number | null) => set(() => ({ genreId: genreId })),
  cat: "",
  setCat: (cat: string) => set(() => ({ cat: cat })),
  movieId: null,
  setMovieId: (movieId: number | null) => set(() => ({ movieId: movieId })),
  searchText: "",
  setSearchText: (searchText: string) =>
    set(() => ({ searchText: searchText })),
  clearInput: false,
  setClearInput: () => set((store) => ({ clearInput: !store.clearInput })),
}));

export default useMoviesStore;
