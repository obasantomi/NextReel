import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const HomePageFooter = () => {
  return (
    <>
      <div className="border-b border-[#212121] pb-20 w-full flex justify-between">
        <div className="hidden md:flex flex-col gap-8 max-w-75 ml-20">
          <Link
            to={"/explore_movies"}
            className="py-2 flex bg-[#e50914] hover:bg-[#b0070f] text-[1rem] transition-colors duration-300 group max-w-40 cursor-pointer justify-center gap  font-semibold items-center  rounded px-2"
          >
            Get Started
            <FiChevronRight className="text-2xl group-hover:transform group-hover:translate-x-1 transition-transform ease-in-out duration-400  text-white" />
          </Link>
          <span className="text-white font-oswald-bold brightness-100 contrast-200 font-bold text-[20px]">
            NextReel
          </span>
          <p className="hidden md:block text-[13px]">
            Helping you decide what to watch - faster, smarter and better.
          </p>
        </div>
        <div className="grid grid-cols-4 w-full md:max-w-200 gap-5  md:gap-10 lg:gap-15 md:ml-10 mx-5 md:mr-4">
          <div className="justify-self-start">
            <h2 className="font-semibold text-[14px] text-left">Company</h2>
            <ul>
              {[
                "About",
                "Careers",
                "Our Culture",
                "Giving",
                "Partners",
                "News",
                "Advertise with Us",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[#ffffff80] cursor-default text-[11px] hover:text-[#9767d9] pt-4"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-start">
            <h2 className="font-semibold text-[14px] text-left">Features</h2>
            <ul>
              {[
                "Smart Discovery",
                "Trailer Previews",
                "Personal Watchlist",
                "Fast Decisions",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[#ffffff80] cursor-default text-[11px] hover:text-[#9767d9] pt-5"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-start">
            <h2 className="font-semibold text-[14px] text-left">Products</h2>
            <ul>
              {[
                "Browse Movies",
                "Trending",
                "Top Rated",
                "Genres",
                "Watchlist",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[#ffffff80] cursor-default text-[11px] hover:text-[#9767d9] pt-5"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="justify-self-start">
            <h2 className="font-semibold text-[14px] text-left">Resources</h2>
            <ul>
              {["About", "Privacy Policy", "Terms of Use", "Contact"].map(
                (feature, index) => (
                  <li
                    key={index}
                    className="text-[#ffffff80] cursor-default text-[11px] hover:text-[#9767d9] pt-5"
                  >
                    {feature}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="items-center mx-10 justify-between flex">
        <div className="flex py-10 gap-5 justify-around items-center">
          <p className="text-[11px] text-[#a2a2a2]">
            © 2025 Next-Reel. Built by Tomi
          </p>
          <a
            href="https://www.linkedin.com/in/tomilola-obasan"
            target={"_blank"}
            className="text-[11px] hover:text-[#9767d9] text-[#a2a2a2]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/obasantomi/"
            target="_blank"
            rel="noopener noreferer"
            className="text-[11px] hover:text-[#9767d9] text-[#a2a2a2]"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="https://www.obasantomilola@gmail.com"
            className="text-[11px] hidden md:block hover:text-[#9767d9] text-[#a2a2a2]"
          >
            Email
          </a>
        </div>
        <p className="text-[11px] text-[#a2a2a2] hidden sm:block">
          Language: English (US)
        </p>
      </div>
    </>
  );
};

export default HomePageFooter;
