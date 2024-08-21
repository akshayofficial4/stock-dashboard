/*import React, { useContext, useState, useEffect } from 'react';
import { convertUnixTimestampToDate, createDate, convertDateToUnixTimestamp } from '../helpers/date-helper';
import Cards from './Cards';
import { chartConfig } from '../constants/config'; 
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import ChartFilter from './ChartFilter';
import ThemeContext from '../context/ThemeContext';
import StockContext from '../context/StockContext';
import { fetchHistoricalData } from '../api/stock-api';

const Chart = () => {
  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);

  const { stockSymbol } = useContext(StockContext);

  const [data, setData] = useState([]);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <Cards>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fill="url(#chartColor)"
            fillOpacity={1}
            strokeWidth={0.5}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Cards>
  );
};

export default Chart;*/

import React, { useContext, useState } from "react";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import { mockHistoricalData } from "../constants/mock";
import Cards from "./Cards";
import { chartConfig } from "../constants/config";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext";

const Chart = () => {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");
  const { darkMode } = useContext(ThemeContext);

  // here where the data passes and recharts understand it...

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };
  
 //chart data....
    /* useEffect(() => {
        const getDateRange = () => {
            const { days, weeks, months, years } = chartConfig[filter];
            const endDate = new Date();
            const startDate = createDate(endDate, -days, -weeks, -months, -years);
            const startTimestampUnix = convertDateToUnixTimestamp(startDate);
            const endTimestampUnix = convertDateToUnixTimestamp(endDate);

            return { startTimestampUnix, endTimestampUnix };
        };

        const updateChartData = async () => {
            try {
                const { startTimestampUnix, endTimestampUnix } = getDateRange();
                const resolution = chartConfig[filter].resolution;
                const result = await fetchHistoricalData(stockSymbol, resolution, startTimestampUnix, endTimestampUnix);
                setData(formatData(result));
            } catch (error) {
                setData([]);
                console.log(error);
            }
        }
        updateChartData();
    } ,[stockSymbol, filter] );*/

  return (
    <Cards>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart className="p-3" data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Cards>
  );
};

export default Chart;
