import React from "react";
import "./Stocks.css";

function StockPrice({ price, change }) {
  let changeColor = "";
  if (change >= 0) {
    changeColor = "positive";
  } else {
    changeColor = "negative";
  }

  let sign = "";
  if (change >= 0) {
    sign = "+";
  }

  return (
    <div className="basicInfo__price">
      <p>${price}</p>
      <p className={changeColor}>
        ({sign}
        {change}%)
      </p>
    </div>
  );
}

export default StockPrice;
