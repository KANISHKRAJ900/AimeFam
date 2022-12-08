import React from "react";

const Header = () => {
  return (
    <>
      <header
        aria-label="Page Header"
        className="bg-gray-50 fixed w-full z-[9999]"
      >
        <div className="mx-auto   px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <button className="group shrink-0 items-center rounded-lg transition text-5xl hidden lg:block">
              Anime <span className="text-sm">Season</span>
            </button>
            <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
              <div className="flex gap-4">
                <a
                  href="https://t.me/elite_kanishkraj"
                  target="_blank"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  {/* <span className="sr-only">Academy</span> */}
                  <img className="w-5" src="/telegram.png" alt="telegram" />
                </a>

                <a
                  href="#"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  {/* <span className="sr-only">Academy</span> */}
                  <img className="w-5" src="/twitter.png" alt="twitter" />
                </a>

                <a
                  href="#"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                >
                  {/* <span className="sr-only">Notifications</span> */}
                  <img className="w-5" src="/instagram.png" alt="instagram" />
                </a>
              </div>
              <button className="group shrink-0 items-center text-2xl rounded-lg transition  lg:hidden  ">
                Anime <span className="text-sm">Season</span>
              </button>

              {/* <div className="relative hidden sm:block">
                <label className="sr-only" for="search">
                  Search
                </label>

                <input
                  className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  type="button"
                  className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <span className="sr-only">Submut Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
