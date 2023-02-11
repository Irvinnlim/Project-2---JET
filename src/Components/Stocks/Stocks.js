import React from "react";
import "./Stocks.css";
import StockChart from "./StockChart";
import StockName from "./StockName";
import StockPrice from "./StockPrice";
import StockInfo from "./StockInfo";
import StockEarnings from "./StockEarnings";
import StockDaily from "./StockDaily";
import StockRecommend from "./StockRecommend";
import StockNews from "./StockNews";

function Stocks({
  basicInfo,
  companyInfo,
  earnings,
  recommendations,
  candles,
  companyNews,
}) {
  const format = (num) => Number(parseInt(num)).toLocaleString("en");

  const formatDecimal = (num) =>
    Number(parseFloat(num).toFixed(2)).toLocaleString("en", {
      minimumFractionDigits: 2,
    });

  return (
    <div className="stocks">
      <div className="stocks__container">
        <div className="stocks__basicInfo">
          <StockName name={basicInfo.name} ticker={basicInfo.ticker} />
          <StockPrice
            price={formatDecimal(basicInfo.price)}
            change={basicInfo.change}
          />
        </div>
        <div className="stocks__chart">
          <StockChart candles={candles} />
        </div>
        <div className="stocks__daily">
          <StockDaily
            todayHigh={formatDecimal(basicInfo.todayHigh)}
            todayLow={formatDecimal(basicInfo.todayLow)}
            openPrice={formatDecimal(basicInfo.openPrice)}
            prevClose={formatDecimal(basicInfo.prevClose)}
          />
        </div>
        <div className="stocks__infowrapper">
          <div className="infowrapper__top">
            <div className="stocks__info">
              <StockInfo
                industry={companyInfo.finnhubIndustry}
                marketCap={format(companyInfo.marketCapitalization)}
                ipoDate={companyInfo.ipo}
                companyURL={companyInfo.weburl}
              />
            </div>
            <div className="stocks__earnings">
              <StockEarnings
                quarter={earnings.quarter}
                year={earnings.year}
                date={earnings.date}
                epsEstimate={formatDecimal(earnings.epsEstimate)}
                epsActual={formatDecimal(earnings.epsActual)}
                revenueEstimate={format(earnings.revenueEstimate)}
                revenueActual={format(earnings.revenueActual)}
              />
            </div>
          </div>
          <div className="infowrapper__btm">
            <div className="stocks__recommendations">
              <StockRecommend
                buy={recommendations.buy}
                sell={recommendations.sell}
                hold={recommendations.hold}
                strongBuy={recommendations.strongBuy}
                strongSell={recommendations.strongSell}
              />
            </div>
            <div className="stocks__news">
              <StockNews companyNews={companyNews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stocks;
