const GetMovieImageUrl = (path: string | undefined, width?: string) => {
  const baseURL = "https://image.tmdb.org/t/p/";
  const movieUrl = baseURL + width + path;
  return movieUrl;
};

export default GetMovieImageUrl;
