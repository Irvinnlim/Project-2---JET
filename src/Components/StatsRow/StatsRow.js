import React from "react";
import "./StatsRow.css";
import StockChart_up from "../../Pictures/stock.svg";
import StockChart_down from "../../Pictures/stock2.svg";

function StatsRow(props) {
  const priceChange = ((props.price - props.previousClose) / props.previousClose) * 100;

  let StockChart = null;
  if (priceChange > 0) {
    StockChart = StockChart_up;
  } else {
    StockChart = StockChart_down;
  }

  let sign = "";
  if (priceChange > 0) {
    sign = "+";
  }

  let row__percentage = "";
  if (sign === "+") {
    row__percentage = "positive";
  } else {
    row__percentage = "negative";
  }

  return (
    <div className="row">
      <div className="row__intro">
        <h1>{props.name}</h1>
        <p>{props.shares && props.shares + " shares"}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} alt="" height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className={row__percentage}>
          {sign}
          {Number(priceChange).toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default StatsRow;
