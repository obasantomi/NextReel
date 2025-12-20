export interface MovieList<T> {
  page: number;
  total_pages: number;
  results: T[];
}
