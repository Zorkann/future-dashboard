type ProgressCircleProps = {
	percent: number;
	value: number;
	colorVariant: keyof typeof COLOR_VARIANTS;
	transparentVariant: keyof typeof TRANSPARENT_VARIANTS;
	label: string;
};

const TRANSPARENT_VARIANTS = {
	1: {
		opacity: "0.5",
	},
	2: {
		opacity: "1",
	},
};

const COLOR_VARIANTS = {
	1: {
		stroke: "stroke-blue-700",
	},
	2: {
		stroke: "stroke-blue-500",
	},
	3: {
		stroke: "stroke-teal-300",
	},
};

export function ProgressCircle({
	percent,
	value,
	colorVariant,
	transparentVariant,
	label,
}: ProgressCircleProps) {
	const circleRadius = 60;
	const circleSize = 70;
	const circumference = 2 * Math.PI * circleRadius;
	const offset = circumference - (percent / 100) * circumference;
	const color = COLOR_VARIANTS[colorVariant].stroke;
	const transparent = TRANSPARENT_VARIANTS[transparentVariant].opacity;

	return (
		<div className="flex flex-col items-center">
			<svg
				width="100"
				height="100"
				viewBox="-17.5 -17.5 175 175"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				style={{ transform: "rotate(-90deg)" }}
			>
				<circle
					r={circleRadius}
					cx={circleSize}
					cy={circleSize}
					fill="transparent"
					stroke="#222b3f"
					strokeOpacity="0.5"
					strokeWidth="16px"
				></circle>
				<circle
					r={circleRadius}
					cx={circleSize}
					cy={circleSize}
					fill="transparent"
					className={color}
					strokeOpacity={transparent}
					strokeWidth="16px"
					strokeLinecap="butt"
					strokeDasharray={`${circumference}`}
					strokeDashoffset={offset}
				>
					<animate
						attributeName="stroke-dashoffset"
						from="360"
						to={offset}
						dur="1s"
						repeatCount="1"
					></animate>
				</circle>

				<text
					x="43px"
					y="85px"
					fill="white"
					font-size="30px"
					font-weight="bold"
					style={{
						transform: "rotate(90deg) translateY(-145px) ",
					}}
				>
					{value}
				</text>
			</svg>

			<div className="font-bold uppercase text-sm">{label}</div>
		</div>
	);
}
