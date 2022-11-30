import React from "react";

const RecommandedCard = () => {
  return (
    <>
      <div className="lg:px-16 sm:px-4 flex flex-col sm:flex-row      sm:py-8  justify-center gap-8">
        <article className="w-80 px-2 shadow-lg hover:bg-[url(https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg)] bg-cover bg-no-repeat bg-center   rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm mx-auto relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 rounded-xl z-10"></div>
          <div className="rounded-[10px] relative z-[9999] p-4 !pt-20 sm:p-6">
            <time
              datetime="2022-10-10"
              className="block text-sm animate-bounce text-white"
            >
              10th Oct 2022
            </time>

            <a href="#">
              <h3 className="mt-0.5  text-lg font-medium text-white">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>

        <article className="w-80 px-2   rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm mx-auto">
          <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>

        <article className="w-80 px-2  rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm mx-auto">
          <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
            <time datetime="2022-10-10" className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>

            <div className="mt-4 flex flex-wrap gap-1">
              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                Snippet
              </span>

              <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                JavaScript
              </span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default RecommandedCard;
