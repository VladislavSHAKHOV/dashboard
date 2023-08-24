import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import Flex from "../../../Flex/Flex";

function Graph() {
  const chartData = useSelector((state) => state.chartList.chartList);

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const month = formattedDate.getMonth() + 1;
    const day = formattedDate.getDay() + 1;
    const year = formattedDate.getFullYear();
    return `${day}/0${month}/${year}`;
  };

  const Font = {
    fontFamily: "Metropolis-R",
    fontSize: 11,
  };

  return (
    <Flex width={"72.35577%"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: -8, right: 26.5, left: -35, bottom: 0 }}
        >
       
<defs>
  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(15, 129, 206, 1)" />
    <stop offset="100%" stopColor="rgba(15, 129, 206, 0.2)" />
  </linearGradient>
  <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(197, 45, 129, 1)" />
    <stop offset="100%" stopColor="rgba(197, 45, 129, 0.2)" />
  </linearGradient>
  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="rgba(27, 186, 100, 1)" />
    <stop offset="100%" stopColor="rgba(27, 186, 100, 0.2)" />
  </linearGradient>
</defs>
          <XAxis
            dataKey="date"
            tickFormatter={formatDate}
            tick={{ style: Font, dy: 12 }}
          />
          <YAxis tick={{ style: Font }} />
          <CartesianGrid stroke="#333" />
          <Tooltip contentStyle={{ background: "#242731", color: "#646464", border: "none", borderRadius: "5px",     fontFamily: "Metropolis-R", fontSize: "14px" }} />
          <Area
            type="monotone"
            dataKey="blue"
            stroke="#18A0FB"
            fill="url(#blueGradient)"
            dot={{ fill: "#18A0FB" }}
            strokeWidth="2px"
          />
          <Area
            type="monotone"
            dataKey="red"
            stroke="#C52D81"
            fill="url(#redGradient)"
            dot={{ fill: "#ED2D95" }}
            strokeWidth="2px"
          />
          <Area
            type="monotone"
            dataKey="green"
            stroke="#3CDC86"
            fill="url(#greenGradient)"
            dot={{ fill: "#3CDC86"}}
            strokeWidth="2px"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
}

export default Graph;
