import React, { useEffect } from "react";
import About from "./Components/About/About";
import AnimeCard from "./Components/Cards/AnimeCard";
import RecommandedCard from "./Components/Cards/RecommandedCard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ReactGa from "react-ga";

const Home = () => {
  useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div className="text-lg font-medium text-red-900">
      <Header />
      <About />
      <AnimeCard />
      <RecommandedCard />
      <Footer />
    </div>
  );
};

export default Home;
