import React from "react";

function StockNews({ companyNews }) {
  return (
    <div>
      <h1>Company News</h1>
      <div>
        {companyNews.map((listing, index) => (
          <div className="companynews__wrapper" key={index}>
            <p className="companynews__headline">
              {listing.headline} ({listing.date})
            </p>
            <a href={listing.link} className="companynews__source" target="_blank">
              Source: {listing.source}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockNews;
