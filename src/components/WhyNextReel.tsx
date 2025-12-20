import WhyNextReelCard from "./WhyNextReelCard";
import { PiFilmSlate } from "react-icons/pi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";

const WhyNextReel = () => {
  return (
    <div className="mx-5">
      <h2 className="text-[1.5rem] font-semibold p-6 pl-0">
        Where Your Next Movie Begins
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-3 shadow-md  lg:grid-cols-4">
        <WhyNextReelCard
          children={<PiFilmSlate className="text-3xl text-[#e50914]" />}
          heading={"Discover Movies Instantly"}
          body={
            "Never spend hours deciding what to watch. Next-Reel helps you find the perfect movie in minutes."
          }
        />
        <WhyNextReelCard
          children={
            <BsFillPlayCircleFill className="text-3xl text-[#e50914]" />
          }
          heading={"Watch Trailers Before You Decide"}
          body={
            "See official trailers for movies before committing, so you always know what you're in for."
          }
        />
        <WhyNextReelCard
          children={<CiSliderHorizontal className="text-3xl text-[#e50914]" />}
          heading={"Smart Movie Discovery"}
          body={
            "Explore movies by mood, genre, rating, or runtime — not just popularity."
          }
        />
        <WhyNextReelCard
          children={<IoIosStar className="text-3xl text-[#e50914]" />}
          heading={"Ratings That Matter"}
          body={
            "See real ratings and reviews at a glance before you commit your time."
          }
        />
      </div>
    </div>
  );
};

export default WhyNextReel;
