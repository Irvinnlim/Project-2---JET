import React, { useEffect, useState } from "react";
import Stocks from "../../Stocks/Stocks";
import "./StockEngine.css";
import SearchInput from "../../Stocks/SearchInput";
import { TOKEN } from "../../../config";

function StockEngine() {
  const [ticker, setTicker] = useState("AAPL");
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    setTicker(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      getStockData();
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTicker(e.target.value);
    getStockData();
  };

  const URL = "https://finnhub.io/api/v1";

  const [basicInfo, setBasicInfo] = useState({
    name: null,
    ticker: null,
    price: 0,
    change: 0,
    todayHigh: 0,
    todayLow: 0,
    openPrice: 0,
    prevClose: 0,
  });

  const [candles, setCandles] = useState({
    ticker: "SYMBOL",
    c: [],
    h: [],
    l: [],
    o: [],
    t: [],
    v: [],
  });

  const [companyInfo, setCompanyInfo] = useState({
    finnhubIndustry: null,
    marketCapitalization: 0,
    ipo: null,
    weburl: null,
  });

  const [earnings, setEarnings] = useState({
    quarter: 0,
    date: null,
    year: null,
    epsEstimate: 0,
    epsActual: 0,
    revenueEstimate: 0,
    revenueActual: 0,
  });

  const [recommendations, setRecommendations] = useState({
    buy: 0,
    sell: 0,
    strongBuy: 0,
    strongSell: 0,
    hold: 0,
  });

  const [companyNews, setCompanyNews] = useState([
    {
      date: null,
      headline: null,
      link: null,
      source: null,
    },
  ]);

  const getStockData = async () => {
    setLoading(true);

    //get today's date
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = String(today.getFullYear());
    const todayFormat = yyyy + "-" + mm + "-" + dd;

    //get last week's date
    const oneWeek = new Date();
    oneWeek.setDate(today.getDate() - 7);
    dd = String(oneWeek.getDate()).padStart(2, "0");
    mm = String(oneWeek.getMonth() + 1).padStart(2, "0");
    yyyy = oneWeek.getFullYear();
    const oneWeekFormat = yyyy + "-" + mm + "-" + dd;

    //get last month's date
    const oneMonth = new Date();
    oneMonth.setDate(today.getDate() - 30);
    dd = String(oneMonth.getDate()).padStart(2, "0");
    mm = String(oneMonth.getMonth() + 1).padStart(2, "0");
    yyyy = oneMonth.getFullYear();
    const oneMonthFormat = yyyy + "-" + mm + "-" + dd;

    //get UNIX time for current moment
    let unixNow = Math.floor(Date.now() / 1000);

    const stockInfo = await fetch(
      `${URL}/stock/profile2?symbol=${ticker}&token=${TOKEN}`
    );
    const stockInfoJSON = await stockInfo.json();

    const stockDaily = await fetch(
      `${URL}/quote?symbol=${ticker}&token=${TOKEN}`
    );
    const stockDailyJSON = await stockDaily.json();

    const stockCandle = await fetch(
      `${URL}/stock/candle?symbol=${ticker}&resolution=1&from=788918400&to=${unixNow}&token=${TOKEN}`
    );
    const stockCandleJSON = await stockCandle.json();

    const stockEarnings = await fetch(
      `${URL}/calendar/earnings?from=${oneMonthFormat}&to=${todayFormat}&symbol=${ticker}&token=${TOKEN}`
    );
    const stockEarningsJSON = await stockEarnings.json();

    const stockRecommendation = await fetch(
      `${URL}/stock/recommendation?symbol=${ticker}&token=${TOKEN}`
    );
    const stockRecommendationsJSON = await stockRecommendation.json();

    const stockNews = await fetch(
      `${URL}/company-news?symbol=${ticker}&from=${oneWeekFormat}&to=${todayFormat}&token=${TOKEN}`
    );
    const stockNewsJSON = await stockNews.json();

    try {
      setBasicInfo({
        name: stockInfoJSON.name.toUpperCase(),
        ticker: stockInfoJSON.ticker,
        price: stockDailyJSON.c,
        change: stockDailyJSON.dp.toFixed(2),
        todayHigh: stockDailyJSON.h,
        todayLow: stockDailyJSON.l,
        openPrice: stockDailyJSON.o,
        prevClose: stockDailyJSON.pc,
      });
    } catch (err) {
      console.log("Could not set basic info");
    }

    try {
      setCompanyInfo({
        finnhubIndustry: stockInfoJSON.finnhubIndustry,
        marketCapitalization: stockInfoJSON.marketCapitalization,
        ipo: stockInfoJSON.ipo.split("-").reverse().join("-"),
        weburl: stockInfoJSON.weburl,
      });
    } catch (err) {
      console.log("Could not set stock info");
    }

    try {
      setCandles({
        ticker: stockInfoJSON.ticker,
        c: stockCandleJSON.c,
        h: stockCandleJSON.h,
        l: stockCandleJSON.l,
        o: stockCandleJSON.o,
        t: stockCandleJSON.t,
        v: stockCandleJSON.v,
      });
    } catch (error) {
      console.log("error mapping candles");
    }

    try {
      setEarnings({
        quarter: stockEarningsJSON.earningsCalendar[0].quarter,
        date: stockEarningsJSON.earningsCalendar[0].date
          .split("-")
          .reverse()
          .join("-"),
        year: stockEarningsJSON.earningsCalendar[0].year,
        epsEstimate: stockEarningsJSON.earningsCalendar[0].epsEstimate,
        epsActual: stockEarningsJSON.earningsCalendar[0].epsActual,
        revenueEstimate: stockEarningsJSON.earningsCalendar[0].revenueEstimate,
        revenueActual: stockEarningsJSON.earningsCalendar[0].revenueActual,
      });
    } catch (error) {
      console.log("could not set earnings");
    }

    try {
      setRecommendations({
        buy: stockRecommendationsJSON[0].buy,
        sell: stockRecommendationsJSON[0].sell,
        strongBuy: stockRecommendationsJSON[0].strongBuy,
        strongSell: stockRecommendationsJSON[0].strongSell,
        hold: stockRecommendationsJSON[0].hold,
      });
    } catch (error) {
      console.log("could not set recommendations");
    }

    try {
      let i = stockNewsJSON.length > 3 ? 3 : stockNewsJSON.length;
      let latestNews = [];
      for (let j = 0; j < i; j++) {
        let UNIXDate = new Date(stockNewsJSON[j].datetime * 1000);
        let year = UNIXDate.getFullYear();
        let month = UNIXDate.getMonth();
        let day = UNIXDate.getDate();
        let convertedDate = day + "-" + month + "-" + year;
        latestNews.push({
          date: convertedDate,
          headline: stockNewsJSON[j].headline,
          link: stockNewsJSON[j].url,
          source: stockNewsJSON[j].source,
        });
      }
      setCompanyNews(latestNews);
    } catch (err) {
      console.log("Could not set company news");
    }

    setLoading(false);
    setTicker("");
  };

  useEffect(() => {
    getStockData();
  }, []);

  if (loading) {
    return <div className="loading">Loading ...</div>;
  }

  return (
    <div>
      <SearchInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        ticker={ticker}
      />
      <Stocks
        basicInfo={basicInfo}
        candles={candles}
        companyInfo={companyInfo}
        earnings={earnings}
        recommendations={recommendations}
        companyNews={companyNews}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        ticker={ticker}
      />
    </div>
  );
}

export default StockEngine;
