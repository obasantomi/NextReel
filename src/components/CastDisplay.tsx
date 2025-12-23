import { useParams } from "react-router-dom";
import useCasts from "../hooks/useCasts";
import GetMovieImageUrl from "../services/GetMovieImageUrl";

const CastDisplay = () => {
  const { id } = useParams();

  const movieId = Number(id);

  const { data } = useCasts(movieId);

  return (
    <div className="w-full [scrollbar-width:none] mt-20 mb-10 flex gap-3 overflow-scroll">
      {data?.cast?.map(
        (cast, index) =>
          cast.profile_path && (
            <div key={index} className="flex items-center gap-3 flex-col">
              <div className=" h-32 w-32 overflow-hidden rounded-[100%]">
                <img
                  src={`${GetMovieImageUrl(cast.profile_path, "/h632")}`}
                  alt=""
                  className="w-full h-full object-contain  rounded-full"
                />
              </div>
              <div>
                <p className="mb-2 text-[12px] text-center">{cast.name}</p>
                <p className="text-[#ffffffA3] text-center text-[10px]">
                  {cast.character}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CastDisplay;
