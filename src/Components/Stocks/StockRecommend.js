import React from "react";

function StockRecommend({ buy, sell, hold, strongBuy, strongSell }) {
  return (
    <div>
      <div className="recommendations__header">
        <h1>Recommendations</h1>
      </div>
      <div className="recommendations__body">
        <div className="recommendations__buy">
          <p>Buy: {buy}</p>
          <p>Strong Buy: {strongBuy}</p>
          <p className="recommendations__hold">Hold: {hold}</p>
        </div>
        <div className="recommendations__sell">
          <p>Sell: {sell}</p>
          <p>Strong Sell: {strongSell}</p>
        </div>
      </div>
    </div>
  );
}

export default StockRecommend;
