import { Bar, BarChart, ResponsiveContainer } from 'recharts';
import { EllipseBar } from './EllipseBar';
import { useGetGraph7Data } from '../../../src/api/getGraph7Data';

const CHART_MARGIN = {
  top: 10,
  left: 5,
  bottom: 10,
  right: 5,
};

export function Graph7() {
  const { status, data } = useGetGraph7Data();
  if (status === 'pending') return <h2>Loading...</h2>;

  if (status === 'error') return <h2>Error</h2>;

  const HIGHEST_UV_VALUE = Math.max(...data.data.map((item) => item.uv));
  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <div className="flex items-center gap-3">
        <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="50%" r="50%" className="fill-primary" />
        </svg>
        <span className="text-2xl font-bold">{HIGHEST_UV_VALUE}</span>
      </div>

      <span className="uppercase text-2xs w-[60%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, labore!
        Explicabo ipsam.
      </span>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.data} margin={CHART_MARGIN}>
          <defs>
            <linearGradient id="graph8-colorUV">
              <stop
                offset="15%"
                className="text-secondary"
                stopOpacity={0.9}
                style={{
                  stopColor: 'currentColor',
                }}
              />
              <stop
                offset="95%"
                className="text-primary"
                style={{
                  stopColor: 'currentColor',
                }}
                stopOpacity={0.9}
              />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient
              id="graph8-colorUV-rotated"
              gradientTransform="rotate(90)"
            >
              <stop
                offset="15%"
                className="text-secondary"
                style={{
                  stopColor: 'currentColor',
                }}
                stopOpacity={0.9}
              />
              <stop
                offset="95%"
                className="text-primary"
                style={{
                  stopColor: 'currentColor',
                }}
                stopOpacity={0.9}
              />
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
