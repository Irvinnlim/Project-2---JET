import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import "./MarketNews.css";
import { Link } from "react-router-dom";
import { TOKEN } from "../../../config";

function MarketNews() {
  const [data, setData] = useState();

  const URL = "https://finnhub.io/api/v1";

  useEffect(() => {
    axios
      .get(`${URL}/news?category=headlines&token=${TOKEN}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="marketnews__container">
      <div className="marketnews__wrapper">
        <h1 className="marketnews__headtext">Trending News</h1>
        <Link to="/news" className="marketnews__headtext__link">
          Show More
        </Link>
      </div>
      <div className="all__news">
        {data
          ? data
              .slice(0, 3)
              .map((news, index) => <NewsArticle data={news} key={index} />)
          : "Loading"}
      </div>
    </div>
  );
}

export default MarketNews;
