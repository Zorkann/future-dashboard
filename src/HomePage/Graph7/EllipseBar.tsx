import { BarProps } from 'recharts';

const RY = 5;

export function EllipseBar(props: BarProps) {
  const { fill, x = 0, y, width = 0, height = 0 } = props;
  const cx = Number(x) + width / 2;
  const rx = width / 2;

  return (
    <>
      <path
        d={`M ${x},${y} h ${width} v ${height} h -${width} Z`}
        fill={fill}
      />
      <ellipse
        cx={cx}
        cy={y}
        rx={rx}
        ry={RY}
        fill="url(#graph8-colorUV)"
        className="stroke-secondary-700"
      />

      <ellipse
        cx={cx}
        cy={Number(y) + height}
        rx={rx - 1}
        ry={RY}
        className="fill-primary stroke-primary"
      />
    </>
  );
}
