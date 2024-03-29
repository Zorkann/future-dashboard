import { AreaChart, Area, ResponsiveContainer } from "recharts";

const DATA = [
  { uv: 1800 },
  { uv: 2400 },
  { uv: 1400 },
  { uv: 2800 },
  { uv: 2000 },
  { uv: 2600 },
  { uv: 1700 },
  { uv: 2400 },
  { uv: 1000 },
  { uv: 3400 },
  { uv: 900 },
];

const HIGHEST_UV_VALUE = Math.max(...DATA.map((item) => item.uv));

export function Graph5() {
  return (
    <div className="flex flex-col gap-4 h-full w-full">
      <div>
        <span className="text-2xl font-bold">{HIGHEST_UV_VALUE}</span>
        <div className="bg-teal-300 h-2 w-2 rounded-full block" />
      </div>

      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart
          width={200}
          height={60}
          data={DATA}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="graph5-colorUV" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0772d7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0772d7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#0e69ce"
            strokeWidth="2"
            fillOpacity={1}
            fill="url(#graph5-colorUV)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
