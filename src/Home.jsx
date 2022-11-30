import React from "react";
import About from "./Components/About/About";
import AnimeCard from "./Components/Cards/AnimeCard";
import RecommandedCard from "./Components/Cards/RecommandedCard";
import Header from "./Components/Header/Header";

const Home = () => {
  return (
    <div className="text-lg font-medium text-red-900">
      <Header />
      <About />
      <AnimeCard />
      <RecommandedCard />
    </div>
  );
};

export default Home;
