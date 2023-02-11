import React from "react";
import "./Stocks.css";

function StockInfo({ industry, marketCap, ipoDate, companyURL }) {
  return (
    <div>
      <h1 className="stockinfo_header">Company Info</h1>
      <div className="stockinfo_body">
        <div className="stockinfo_body__left">
          <p>Industry: {industry}</p>
          <p>IPO Date: {ipoDate}</p>
        </div>
        <div className="stockinfo_body__right">
          <p>Market Cap ('000,000): ${marketCap}</p>

          <p>
            Company Website: <a href={companyURL} target="_blank">{companyURL}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StockInfo;
