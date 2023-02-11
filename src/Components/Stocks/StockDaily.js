import React from "react";
import "./Stocks.css";

function StockDaily({ todayHigh, todayLow, openPrice, prevClose }) {
  return (
    <div className="stocks__daily">
      <p>Today's High: ${todayHigh}</p>
      <p>Today's Low: ${todayLow}</p>
      <p>Open: ${openPrice}</p>
      <p>Previous Close: ${prevClose}</p>
    </div>
  );
}

export default StockDaily;
