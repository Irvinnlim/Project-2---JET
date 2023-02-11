import axios from "axios";
import React, { useEffect, useState } from "react";
import StatsRow from "../StatsRow/StatsRow";
import { db } from "../FireBase/FireBase";
import { collection, getDocs } from "firebase/firestore";
import "./Stats.css";
import { Link } from "react-router-dom";
import { TOKEN } from "../../../config";

const URL = "https://finnhub.io/api/v1";

function Stats() {
  const [stockData, setStockData] = useState([]);

  const [myStocks, setMyStocks] = useState([]);

  async function getMyStocks() {
    const stockCollection = collection(db, "myStocks");
    const stockSnapshot = await getDocs(stockCollection);

    let promises = [];
    let tempData = [];
    stockSnapshot.docs.map((doc) => {
      promises.push(
        getStockData(doc.data().ticker).then((res) => {
          tempData.push({
            id: doc.id,
            data: doc.data(),
            info: res.data,
          });
        })
      );
    });
    Promise.all(promises).then(() => {
      // console.log(tempData);
      setMyStocks(tempData);
    });
  }

  const getStockData = (stock) => {
    return axios.get(`${URL}/quote?symbol=${stock}&token=${TOKEN}`);
  };

  useEffect(() => {
    let tempStockData = [];
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "META",
      "BABA",
      "INTC",
      "AMZN",
      "NVDA",
      "GOOG",
      "UBER",
    ];

    let promises = [];
    getMyStocks();
    stocksList.map((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          // console.log(res);
          tempStockData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      // console.log(tempStockData);
      setStockData(tempStockData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header stats__header__portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                previousClose={stock.info.pc}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__header__list">
          <p>Watchlist</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                previousClose={stock.pc}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
