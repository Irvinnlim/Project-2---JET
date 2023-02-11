import React, { useEffect, useRef } from "react";
import { createChart, ColorType } from "lightweight-charts";

function StockChart({ candles }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: "black",
        },
        textColor: "white",
      },
      priceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
      },
      grid: {
        vertLines: {
          color: "black",
        },
        horzLines: {
          color: "grey",
        },
      },
      borderVisible: false,
      height: 400,
    });

    chart.timeScale().fitContent();

    const newSeries = chart.addCandlestickSeries();

    const candleData = candles.t.map(function (time, i) {
      return {
        time: time,
        open: candles.o[i],
        high: candles.h[i],
        low: candles.l[i],
        close: candles.c[i],
      };
    });

    newSeries.setData(candleData);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [candles.c, candles.t, candles.h, candles.o, candles.l]);

  return <div ref={chartContainerRef} />;
}

export default StockChart;
