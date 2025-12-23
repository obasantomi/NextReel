import { FiChevronRight } from "react-icons/fi";
import heroImage from "../assets/images/backgroundImage.jpg";
import Popular from "../components/Popular";
import WhyNextReel from "../components/WhyNextReel";
import HomePageFooter from "../components/HomePageFooter";
import Upcoming from "../components/Upcoming";
import TopRated from "../components/TopRated";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-screen relative"
      >
        <div className="absolute top-0 w-full h-150 bg-linear-to-b from-[#06000b] to-transparent pointer-events-none" />
        <div className="absolute bg-linear-to-t from-black/80 to-transparent bottom-0 w-full h-150 pointer-events-none" />

        <div className="absolute inset-0 w-full h-screen flex flex-col items-center gap-50">
          <nav className="flex justify-between items-center w-full px-10 md:px-20 pt-2">
            <span className="text-[#e50914] font-oswald-bold brightness-100 contrast-200 font-bold text-[20px] md:text-[40px]">
              NextReel
            </span>
            <a className="bg-[#e50914] hover:bg-[#b0070f] text-white transition-colors duration-300 max-h-8 cursor-pointer font-bold self-center p-3 flex justify-center items-center rounded">
              Membership
            </a>
          </nav>

          <div className="text-white flex flex-col items-center gap-6 max-w-100 md:max-w-162.5 text-center">
            <p className="text-[2.5rem] md:text-[3.5rem] font-bold">
              Discover movies tailored to your mood, time, and taste.
            </p>
            <Link
              to="/explore_movies"
              className="py-2 px-4 text-[1rem] duration-300 bg-[#e50914] md:bg-transparent md:text-[1.5rem] group max-w-75 cursor-pointer justify-center gap  font-semibold items-center flex rounded "
            >
              Get Started
              <FiChevronRight className="text-2xl group-hover:transform group-hover:translate-x-1 transition-transform ease-in-out duration-400 group-hover:text-[#e50914] text-white" />
            </Link>
          </div>
        </div>
      </div>
      <section className="max-w-300 mx-auto  pb-20">
        <Popular />
        <TopRated />
        <Upcoming />
        <WhyNextReel />
      </section>
      <footer className="pt-20 w-full border-t border-[#212121]">
        <HomePageFooter />
      </footer>
    </>
  );
};

export default HomePage;
