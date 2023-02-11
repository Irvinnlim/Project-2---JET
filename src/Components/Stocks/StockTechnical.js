import React from "react";

function StockTechnical({ buy, sell, neutral, signal }) {
  return (
    <div>
      <h1>Technical Indicators</h1>
      <div>
        <p>Buy: {buy}</p>
        <p>Sell: {sell}</p>
        <p>Neutral: {neutral}</p>
        <p>Signal: {signal}</p>
      </div>
    </div>
  );
}

export default StockTechnical;
