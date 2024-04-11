import clsx from "clsx";

type ProgressCircleProps = {
  value: number;
  colorVariant: number;
  label: string;
  max?: number;
};

const COLOR_VARIANTS = [
  "stroke-primary",
  "stroke-secondary",
  "stroke-secondary-700",
  "stroke-secondary-800",
];

const MAX_DATA = 1000;
const CIRCLE_RADIUS = 50;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

export function ProgressCircle({
  value,
  colorVariant,
  label,
  max = MAX_DATA,
}: ProgressCircleProps) {
  const percent = Math.round((value / max) * 100);
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  const color = COLOR_VARIANTS[colorVariant];

  return (
    <div className="flex flex-col h-full items-center justify-center gap-2">
      <div className="relative min-h-0">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-lg">
          {value}
        </span>
        <svg
          width={"100%"}
          height={"100%"}
          viewBox={`0, 0, 120, 120`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(-90deg)" }}
        >
          <circle
            className="stroke-zinc-800/50 fill-transparent"
            r={CIRCLE_RADIUS}
            cx={60}
            cy={60}
            strokeWidth={10}
          ></circle>
          <circle
            r={CIRCLE_RADIUS}
            cx={60}
            cy={60}
            className={clsx("fill-transparent", color)}
            strokeWidth={10}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
          >
            <animate
              attributeName="stroke-dashoffset"
              from={CIRCUMFERENCE}
              to={offset}
              dur="1s"
              repeatCount="1"
            ></animate>
          </circle>
        </svg>
      </div>
      <div className="font-bold uppercase text-sm">{label}</div>
    </div>
  );
}
