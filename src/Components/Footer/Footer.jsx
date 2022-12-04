import React from "react";

const Footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-900 sm:justify-start">
              <p className="text-3xl">
                Anime <span className="text-sm">Season</span>
              </p>
            </div>

            <p className="mt-4 text-center text-sm text-gray-400 lg:mt-0 lg:text-right cursor-pointer">
              <a
                href="https://www.privacypolicygenerator.info/live.php?token=KTmj8HxpFMIdSTA7fgIyBog2nsVoOjqC"
                target="_blank"
              >
                Copyright &copy; 2022-2023. All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
