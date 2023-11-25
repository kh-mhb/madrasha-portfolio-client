import React from "react";

const Introduction = () => {
  // Replace the YouTube video ID with your actual video ID
  const videoId = "7szLM_HzQcw";

  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="sm:text-3xl text-3xl  border-y-4 lg:w-1/3 sm:w-1/3 mx-auto py-3 font-medium title-font mb-4 text-gray-900">
          Introduction Video
        </h1>
      </div>
      <section className="px-1 lg:px-4 mt-14 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2  md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Clear overview for efficient tracking
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </p>
          </div>
          <div className="w-full h-full">
            <iframe
              title="YouTube Video"
              width="100%"
              height="150%"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;
