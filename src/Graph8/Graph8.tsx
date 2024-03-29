import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { EllipseBar } from "./EllipseBar";

const GRAPH_8_DATA = [
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

const HIGHEST_UV_VALUE = Math.max(...GRAPH_8_DATA.map((item) => item.uv));

const CHART_HEIGHT = 150;
const CHART_MARGIN = {
  top: 10,
  left: 5,
  bottom: 10,
  right: 5,
};

const COLORS = ["#5eead4", "#3b82f6", "#1d4ed8"];

export function Graph8() {
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex items-center gap-3">
        <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="50%" className="fill-teal-300" />
        </svg>
        <span className="text-2xl font-bold">{HIGHEST_UV_VALUE}</span>
      </div>

      <span className="uppercase text-2xs w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, labore!
        Explicabo ipsam.
      </span>

      <ResponsiveContainer width="100%" height='100%'>
        <BarChart data={GRAPH_8_DATA} margin={CHART_MARGIN}>
          <defs>
            <linearGradient id="graph8-colorUV">
              <stop offset="15%" stopColor={COLORS[1]} stopOpacity={0.9} />
              <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="graph8-colorUV-rotated"
              gradientTransform="rotate(90)"
            >
              <stop offset="15%" stopColor={COLORS[1]} stopOpacity={0.9} />
              <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <Bar
            dataKey="uv"
            fill="url(#graph8-colorUV-rotated)"
            shape={EllipseBar}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
