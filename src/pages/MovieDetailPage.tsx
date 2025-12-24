import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import useMovieVideos from "../hooks/useMovieVideos";
import CastDisplay from "../components/CastDisplay";
import getYouTubeUrl from "../services/GetYoutubeUrl";
import GetMovieImageUrl from "../services/GetMovieImageUrl";
import { PiWarningCircleFill } from "react-icons/pi";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import ExpandableText from "../components/ExpandableText";
import { MdStar } from "react-icons/md";
import useCasts from "../hooks/useCasts";
import Similar from "../components/Similar";
import { useState } from "react";
import EmptyVideo from "../components/EmptyVIdeo";
import SmallEmptyVideo from "../components/SmallEmptyVideo";
import { Skeleton } from "@chakra-ui/react";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const { data: movieDet, isLoading, error: movieDetError } = useMovie(movieId);
  const { data: videos, error: videoError } = useMovieVideos(movieId);
  const { data: casts, error: castsError } = useCasts(movieId);

  const director = casts?.crew.find((crew) => crew.job === "Director");

  const [loading, setLoading] = useState(true);
  const [isSmallLoading, setIsSmallLoading] = useState(true);

  if (movieDetError) throw movieDetError;
  if (videoError) throw videoError;
  if (castsError) throw castsError;

  return (
    <div className="py-5">
      <div className="grid content-start gap-2 md:grid-cols-3 grid-cols-1">
        <div className="col-span-2 max-w-220">
          <div className="max-w-220">
            {loading && <EmptyVideo />}
            {videos?.results?.length === 0 ? (
              <p className="p-4">Trailer not available.</p>
            ) : null}
            <iframe
              src={
                videos?.results?.[0]?.key
                  ? getYouTubeUrl(videos?.results?.[0]?.key, true)
                  : undefined
              }
              onLoad={() => setLoading(false)}
              title="Movie Trailer"
              allowFullScreen
              allow="autoplay; encrypted-media"
              className="w-full h-100 border-0"
            />

            {isLoading && (
              <div className="my-10">
                <h1 className="mb-2 font-bold">SYNOPSIS</h1>
                <Skeleton
                  startColor="#1f1f1f"
                  endColor="#2a2e2f"
                  height="10px"
                  width="40%"
                  marginBottom={4}
                />
                <Skeleton
                  startColor="#1f1f1f"
                  endColor="#2a2e2f"
                  height="10px"
                  width="70%"
                  marginBottom={4}
                />
                <Skeleton
                  startColor="#1f1f1f"
                  endColor="#2a2e2f"
                  height="10px"
                  width="100%"
                />
              </div>
            )}

            {movieDet?.overview && (
              <div className="my-10">
                <h1 className="mb-2 font-bold">SYNOPSIS</h1>
                <div className="text-[#b9bdcc]">
                  <ExpandableText>{movieDet.overview}</ExpandableText>
                </div>
              </div>
            )}
            <h1 className="mb-4 font-bold">
              Videos: Trailers, Teasers, Featurettes
            </h1>
            <div className="flex gap-5 overflow-scroll [scrollbar-width:none]">
              {isSmallLoading &&
                !(videos?.results?.length === 0) &&
                [1, 2, 3].map((no) => <SmallEmptyVideo key={no} />)}
              {videos?.results?.length === 0 ? (
                <p className="p-4">Videos not available.</p>
              ) : null}
              {videos?.results.map((vid, index) => {
                return (
                  <iframe
                    key={vid.id ? vid.key : index}
                    src={vid.id ? getYouTubeUrl(vid.key, false) : undefined}
                    allowFullScreen
                    onLoad={() => {
                      setIsSmallLoading(false);
                    }}
                    allow="encrypted-media"
                    title="Movie Videos"
                    className="w-71.25 h-40"
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-15 md:mt-0 gap-1 mb-5 justify-between w-full">
            <div className="mr-2 md:flex-1 flex flex-col gap-1.5">
              <h1 className="font-bold text-[16px] whitespace-nowrap font-oswald-bold">
                ABOUT THE MOVIE
              </h1>
              <div>
                <span className="text-[#c6c8cd] inline-block uppercase text-[12px]">
                  {movieDet?.title}{" "}
                  <p className="text-[10px] flex items-center gap-1">
                    <MdStar color="gold" size={12} />{" "}
                    {Number(movieDet?.vote_average).toFixed(1)} TMDB
                  </p>
                </span>
              </div>
              <div>
                <span className="text-[#c6c8cd] text-[13px]">
                  Release Date:{" "}
                  <span className="text-[#6f7d90] text-[12px]">
                    {movieDet?.release_date}
                  </span>
                </span>
              </div>
              <div className="text-[#c6c8cd] text-[13px]">
                Runtime:
                <span className="text-[#6f7d90] ml-1 text-[12px]">
                  {movieDet?.runtime} minutes
                </span>
              </div>
              <div className="text-[13px] flex items-center gap-1.5 text-[#c6c8cd]">
                Viewer:{" "}
                {(movieDet?.adult === true || movieDet?.adult === false) &&
                  (movieDet?.adult ? (
                    <span className="inline-flex text-[#6f7d90] text-[12px] gap-1 items-center">
                      <PiWarningCircleFill color="#e50914" /> Rated 18+
                    </span>
                  ) : (
                    <span className="inline-flex whitespace-nowrap text-[#6f7d90] gap-1 text-[12px] items-center">
                      <AiTwotoneSafetyCertificate size={15} /> All ages
                    </span>
                  ))}
              </div>
              <div className="text-[13px] flex items-center gap-1.5 text-[#c6c8cd]">
                Status:{" "}
                <p className="text-[12px] text-[#6f7d90]">{movieDet?.status}</p>
              </div>
              {movieDet?.tagline && (
                <div className="text-[#c6c8cd] text-[13px]">
                  Tagline:{" "}
                  <span className="text-[#6f7d90]  text-[12px]">
                    {movieDet?.tagline}
                  </span>
                </div>
              )}
            </div>
            <div className="w-full min-w-25 max-w-37.5">
              <div
                className=" w-full  h-50  rounded-2xl bg-white"
                style={{
                  backgroundImage: movieDet?.poster_path
                    ? `url(${GetMovieImageUrl(movieDet.poster_path, "/w300")})`
                    : "",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          {movieDet?.homepage && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>OFFICIAL WEBSITE</h2>
              <a
                href={movieDet?.homepage}
                rel="noopener noreferer"
                target="_blank"
                className="text-[#6f7d90] text-[12px]"
              >
                {movieDet?.homepage}
              </a>
            </div>
          )}
          {director && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>DIRECTOR</h2>
              <div className="text-[#6f7d90] text-[12px]">
                {director.original_name}
              </div>
            </div>
          )}
          {movieDet?.runtime && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>RUNTIME</h2>
              <div className="text-[#6f7d90] text-[12px]">
                {movieDet.runtime} minutes
              </div>
            </div>
          )}

          {movieDet?.genres && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>GENRES</h2>
              {movieDet?.genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    className="mr-2 text-[12px] text-[#6f7d90]"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </div>
          )}
          {movieDet?.production_countries.length && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>PRODUCTION COUNTRIES</h2>
              {movieDet.production_countries.map((country, index) => {
                return (
                  <span key={index} className="mr-2 text-[12px] text-[#6f7d90]">
                    {country.name}
                  </span>
                );
              })}
            </div>
          )}

          {movieDet?.production_companies.length && (
            <div className="pt-7 border-t text-[14px] mb-7 text-[#c6c8cd] border-[#1c252f]">
              <h2>PRODUCTION COMPANIES</h2>
              {movieDet.production_companies.map((company) => {
                return (
                  <span
                    key={company.id}
                    className="mr-2 text-[12px] text-[#6f7d90]"
                  >
                    {company.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <CastDisplay />
      <Similar title={movieDet?.original_title} />
    </div>
  );
};

export default MovieDetailPage;
