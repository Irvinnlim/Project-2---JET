import React from "react";
import "./Newsfeed.css";
import LineGraph from "../LineGraph/LineGraph";
import { Chip, Avatar } from "@mui/material";
import MarketNews from "../MarketNews/MarketNews";

function Newsfeed() {
  const popularTopics = [
    "Technology",
    "Upcoming Earnings",
    "Index ETFs",
    "China",
    "Pharma",
    "Crypto",
    "Twitter",
    "Meta",
    "COVID",
  ];

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="newsfeed__portfolio">
            <h1>$300,000.00</h1>
            <p>+53.24 (+0.05%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$50,000.00</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <MarketNews />
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular Lists</h1>
          </div>
          <div className="newsfeed__popularlists__badges">
            {popularTopics.map((topic, index) => (
              <Chip
                className="topic__badge"
                variant="outlined"
                key={index}
                label={topic}
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/5.x/personas/svg?seed=${topic}`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Newsfeed;
