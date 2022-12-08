import React from "react";
import { anime22 } from "../DataBase/AnimeData";
import "./new.css";

const RecommandedCard = () => {
  return (
    <>
      <div className="lg:px-16 sm:px-0 md:text-5xl text-4xl py-11">
        <h3>Popular Anime in 2022</h3>
        <div className=" grid  grid-flow-row md:grid-cols-3 gap-2 lg:grid-cols-4   ">
          {anime22.map((item) => (
            <div key={item.id} className="py-4">
              <article
                style={{ backgroundImage: `url(${item.image})` }}
                className={`w-30 bg-changer gap-4 px-2 bg-cover bg-no-repeat bg-center rounded-xl hover:!bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
                p-0.5 shadow-xl transition hover:shadow-sm mx-auto relative`}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 rounded-xl z-10"></div>
                <div className="rounded-[10px] relative z-[9999] p-4 !pt-20 sm:p-6">
                  {/* <time
                  datetime="2022-10-10"
                  className="block text-sm animate-bounce text-white"
                >
                  10th Oct 2022
                </time> */}

                  <h3 className="mt-0.5  text-lg font-medium text-white">
                    {item.title}{" "}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      {item.source}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      {item.broadcast}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      {item.Genres}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommandedCard;
