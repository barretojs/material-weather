import { Hourly } from "@interfaces/Forecast";
import Unit from "@interfaces/Unit";
import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

type Props = {
  data: Hourly[];
  unit: Unit;
};

const DailyEvolutionGraph: React.FC<Props> = ({ data, unit }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dtFormatted" hide />
        <YAxis unit={unit.unit} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="temp"
          unit={unit.unit}
          stroke="#000"
          activeDot={{ r: 8 }}
          animationDuration={500}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default React.memo(DailyEvolutionGraph);
