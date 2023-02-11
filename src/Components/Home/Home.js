import React from "react";
import Newsfeed from "../Newsfeed/Newsfeed";
import Stats from "../Stats/Stats";
import "./Home.css";

function Home() {
  return (
    <div className="home__body">
      <div className="home__container">
        <Newsfeed />
        <Stats />
      </div>
    </div>
  );
}

export default Home;
