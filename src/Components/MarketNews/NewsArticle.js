import React from "react";
import "./NewsArticle.css";

function NewsArticle({ data }) {
  return (
    <div className="article newspage">
      <h3 className="article__title">{data.headline}</h3>
      <p className="article__summary">{data.summary}</p>
      <a href={data.url} className="article__source" target="_blank">
        Source: {data.source}
      </a>
      <br />
    </div>
  );
}

export default NewsArticle;
