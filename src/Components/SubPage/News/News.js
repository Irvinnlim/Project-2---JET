import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsArticle from "../../MarketNews/NewsArticle";
import "./News.css";

function News() {
  const [data, setData] = useState();

  const URL = "https://finnhub.io/api/v1";

  const TOKEN = `${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(`${URL}/news?category=headlines&token=${TOKEN}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="newspage__container">
      <div className="newspage__wrapper">
        <h1 className="newspage__headtext">99 TRENDING NEWS</h1>
      </div>
      <div className="newspage__news">
        {data
          ? data
              .slice(0, 99)
              .map((news, index) => <NewsArticle data={news} key={index} />)
          : "Loading"}
      </div>
    </div>
  );
}

export default News;
