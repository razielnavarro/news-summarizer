"use client";
import { NewsArticle } from "@/types/newsArticle";

// Utility class for responsive widths
const responsiveWidthClass = "w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5";

const NewsFeed = () => {
  return (
    // Card with latest news article
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className={`relative bg-white rounded-xl ${responsiveWidthClass}`}>
        <a href="#">
          <img src="static\images\test.jpg" className="w-full rounded-xl"></img>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h1 className="text-lg md:text-2xl font-bold absolute bottom-4 pl-2 max-w-[80%]">
            Panama reports sharp drop in irregular migration through Darien Gap
          </h1>
          <h1 className="absolute font-bold top-2 right-2">nytimes.com</h1>
        </a>
      </div>

      {/* Section below the image with article content */}
      <div className={`relative w-11/12 h-full ${responsiveWidthClass} bg-[#09090b] p-4`}>
        <a href="#">
          <p>
            The number of migrants and asylum seekers traversing the Darien Gap
            — the treacherous strip of jungle connecting South and North America
            — has fallen by nearly 41 percent in the last year. On Thursday,
            Panama’s right-wing President Jose Raul Mulino announced the
            decline, touting it as a success for the country’s efforts to limit
            irregular migration.
          </p>
        </a>
      </div>
    </div>
  );
};

export default NewsFeed;
