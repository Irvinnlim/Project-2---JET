import React from "react";

function StockEarnings({
  quarter,
  year,
  date,
  epsEstimate,
  epsActual,
  revenueEstimate,
  revenueActual,
}) {
  return (
    <div>
      <div className="earnings__header">
        <h1>
          Latest Earnings (Q{quarter} {year})
        </h1>
        <p>Date: {date}</p>
      </div>
      <div className="earnings__body">
        <div className="earnings__left">
          <p>EPS Estimate: ${epsEstimate}</p>
          <p>Revenue Estimate: ${revenueEstimate}</p>
        </div>
        <div className="earnings__right">
          <p>EPS Actual: ${epsActual}</p>
          <p>Revenue Actual: ${revenueActual}</p>
        </div>
      </div>
    </div>
  );
}

export default StockEarnings;
