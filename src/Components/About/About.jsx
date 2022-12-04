import React from "react";

const About = () => {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                src="/anime.webp"
                alt="Party"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h1 class="text-3xl font-bold sm:text-4xl">Anime in 2023</h1>

              <p class="mt-4 text-gray-600">
                Most animes will harbour serious moral philosophies from
                real-life situations. And things like decision-making, the
                ability to overcoming loss, and the importance of familial
                relationships form the corner-stone of almost any anime you
                watch.
              </p>

              <a
                href="#anime"
                class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                <span class="text-sm font-medium"> Get Started </span>

                <svg
                  class="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
