import React from "react";

function StockName({ name, ticker }) {
  return (
    <div>
      <h1 className="basicInfo__name">
        {name} ({ticker})
      </h1>
    </div>
  );
}

export default StockName;
