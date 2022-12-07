import React from "react";
import { anime } from "../DataBase/AnimeData";

function AnimeCard() {
  return (
    <>
      <div id="anime" className="lg:px-16 sm:px-0 ">
        <div>
          <h2 className="text-5xl">Upcoming Anime</h2>
          <div className=" grid  grid-flow-row md:grid-cols-2 lg:grid-cols-1   ">
            {anime.map((item) => (
              <article
                key={item.id}
                className="flex bg-white  transition hover:shadow-xl  max-w-screen-md mt-5  py-8 sm:px-6 lg:px-8"
              >
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime={item.fall}
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>2023</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>Oct 10</span>
                  </time>
                </div>

                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Guitar"
                    src={item.image}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <h3 className="font-bold uppercase text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm align-middle leading-relaxed text-gray-700 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  {/* <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read More
                  </a>
                </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimeCard;
