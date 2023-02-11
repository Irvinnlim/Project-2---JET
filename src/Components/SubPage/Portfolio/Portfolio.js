import React from "react";
import "./Portfolio.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const data = {
    labels: ["MSFT", "TSLA", "APPL", "Cash"],
    datasets: [
      {
        data: [74400, 160270, 28792, 50000],
        backgroundColor: ["#5AC53B", "#5AC53B", "#5AC53B", "#3F6934"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="portfolio">
      <div className="portfolio__container">
        <div className="portfolio__value">
          <h1>PORTFOLIO VALUE</h1>
          <p>$300,000</p>
        </div>
        <div className="portfolio__shares">
          <table className="portfolio__shares__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Shares</th>
                <th>Price</th>
                <th>Average Cost</th>
                <th>Total Return</th>
                <th>Equity</th>
              </tr>
            </thead>
            <tbody className="portfolio__shares__table">
              <tr className="tr__hover">
                <td>Microsoft</td>
                <td>MSFT</td>
                <td>300</td>
                <td>$248.00</td>
                <td>$100.00</td>
                <td>$44,400.00</td>
                <td>$74,400.00</td>
              </tr>
              <tr className="tr__hover">
                <td>Tesla</td>
                <td>TSLA</td>
                <td>1000</td>
                <td>$160.27</td>
                <td>$20.00</td>
                <td>$140,270.00</td>
                <td>$160,270.00</td>
              </tr>
              <tr className="tr__hover">
                <td>Apple</td>
                <td>APPL</td>
                <td>200</td>
                <td>$143.96</td>
                <td>$20.00</td>
                <td>$24,792.00</td>
                <td>$28,792.00</td>
              </tr>
            </tbody>
          </table>
          <div className="portfolio__shares__chart">
            <Doughnut data={data} options={options}></Doughnut>
          </div>
        </div>
        <div className="portfolio__balance">
          <div className="portfolio__balance__power">
            <p>Buying Power</p>
            <h1>$50,000.00</h1>
            <table className="balance__table">
              <tbody>
                <tr>
                  <td> Options Buying Power</td>
                  <td className="portfolio__balance__td__right">$50,000.00</td>
                </tr>
                <tr>
                  <td>Stock Buying Power</td>
                  <td className="portfolio__balance__td__right">$50,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="portfolio__balance__withdraw">
            <p>Withdrawable Cash</p>
            <h1>$50,000.00</h1>
            <table className="balance__table">
              <tbody>
                <tr>
                  <td>Cash</td>
                  <td className="portfolio__balance__td__right">$50,000.00</td>
                </tr>
                <tr>
                  <td>Withdrawable Cash</td>
                  <td className="portfolio__balance__td__right">$50,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
