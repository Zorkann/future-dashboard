import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2020",
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    name: "2021",
    uv: 20,
    pv: 60,
    amt: 22,
  },
  {
    name: "2022",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "2023",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "2024",
    uv: 23,
    pv: 38,
    amt: 25,
  },
];

// TODO: HOW TO GET CSS HEX FROM TAILWIND
export function Graph2() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: -24,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#27272a" />
        <XAxis
          dataKey="name"
          stroke="white"
          tickLine={false}
          axisLine={{ stroke: "#27272a" }}
          tickMargin={10}
        />
        <YAxis
          stroke="white"
          tickLine={false}
          axisLine={{ stroke: "#27272a" }}
          tickMargin={10}
        />
        {/*TODO: HANDLE DYNAMIC DATA*/}
        <Line dataKey="pv" stroke="#5eead4" dot={false} strokeWidth={2} />
        <Line dataKey="uv" stroke="#3b82f6" dot={false} strokeWidth={2} />
        <Line dataKey="amt" stroke="#1d4ed8" dot={false} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
