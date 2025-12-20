import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import useMovieVideos from "../hooks/useMovieVideos";
import useReviews from "../hooks/useReviews";
import useCasts from "../hooks/useCasts";

const MovieDetailPage = () => {
  const { id } = useParams();

  const movieId = Number(id);

  const { data: movieDet } = useMovie(movieId);
  const { data: videos } = useMovieVideos(movieId);
  const { data: reviews } = useReviews(movieId);
  const { data: casts } = useCasts(movieId);

  return (
    <>
      <div></div>
    </>
  );
};

export default MovieDetailPage;
