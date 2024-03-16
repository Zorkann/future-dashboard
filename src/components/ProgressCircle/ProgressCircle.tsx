import clsx from "clsx";

type ProgressCircleProps = {
	value: number;
	colorVariant: number;
	label: string;
	max?: number;
};

const COLOR_VARIANTS = [
	"stroke-teal-300",
	"stroke-blue-500",
	"stroke-blue-700",
	"stroke-blue-600",
];
const MAX_DATA = 1000;

const SVG_SIZE = 100;
const CIRCLE_RADIUS = 50;
const FONT_SIZE = (SVG_SIZE * 1.125) / 100;
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
		<div className="relative flex flex-col items-center gap-4">
			<div className="relative">
				<span
					className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold"
					style={{
						fontSize: `${FONT_SIZE}rem`,
					}}
				>
					{value}
				</span>
				<svg
					width={SVG_SIZE}
					height={SVG_SIZE}
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
