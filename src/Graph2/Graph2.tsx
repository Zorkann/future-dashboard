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
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: -24,
          bottom: 5,
        }}
      >
        <CartesianGrid className="stroke-default-800" />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{
            className: "stroke-default-800",
          }}
          tickMargin={10}
          stroke="currentColor"
          className="text-text"
        />
        <YAxis
          tickLine={false}
          axisLine={{
            className: "stroke-default-800",
          }}
          tickMargin={10}
          stroke="currentColor"
          className="text-text"
        />
        <Line
          dataKey="pv"
          dot={false}
          strokeWidth={2}
          className="text-primary"
          stroke="currentColor"
        />
        <Line
          dataKey="uv"
          dot={false}
          strokeWidth={2}
          className="text-secondary"
          stroke="currentColor"
        />
        <Line
          dataKey="amt"
          dot={false}
          strokeWidth={2}
          className="text-secondary-700"
          stroke="currentColor"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
