import type { Graph10Data } from "../../types";
import { Line, LineChart, ResponsiveContainer } from "recharts";

type LegendProps = {
	markersData: Graph10Data["markers"];
};

/** This will generate 0 points for the beginning and end of a data. It's required for smooth animation between beginning and end of a dataset*/
function addZeroPointsForMarkersData(
	dataset: Graph10Data["markers"]["data"][number]
) {
	return [
		{ value: 0 },
		...dataset.points,
		{ value: 0 },
		...dataset.points,
		{ value: 0 },
	];
}

const COLOR_VARIANTS = [
	{ fill: "fill-primary", stroke: "stroke-primary" },
	{ fill: "fill-secondary", stroke: "stroke-secondary" },
	{ fill: "fill-secondary-700", stroke: "stroke-secondary-700" },
];
const DRAW_LINE_ANIMATION_DURATION = 4000;
const SLIDE_LEFT_ANIMATION_DURATION = DRAW_LINE_ANIMATION_DURATION / 2.75;

export function Legend({ markersData }: LegendProps) {
	return (
		<div className="flex gap-4 w-full justify-between">
			{markersData.data.map((dataset, index) => {
				return (
					<div
						className="flex flex-1 items-center gap-2 uppercase font-bold max-w-[240px]"
						key={dataset.label}
					>
						<div>
							<svg width={12} height={12} xmlns="http://www.w3.org/2000/svg">
								<circle
									cx="50%"
									cy="50%"
									r="50%"
									className={COLOR_VARIANTS[index]?.fill}
								/>
							</svg>
						</div>
						<span>{dataset.label}</span>
						<div className="relative flex items-center overflow-hidden h-full w-full">
							<ResponsiveContainer
								className="absolute"
								height={20}
								width="200%"
							>
								<LineChart
									margin={{
										left: 0,
										right: 0,
									}}
									height={20}
									data={addZeroPointsForMarkersData(dataset)}
									className="animate-slide-left"
									style={{
										position: "absolute",
										animationDelay: `${SLIDE_LEFT_ANIMATION_DURATION}ms`,
									}}
								>
									<Line
										type="linear"
										dataKey="value"
										dot={false}
										strokeWidth={2}
										stroke=""
										className={COLOR_VARIANTS[index]?.stroke}
										// HAS TO BE LONGER BECAUSE OF 2X GRAPH DATA
										animationDuration={DRAW_LINE_ANIMATION_DURATION}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
						<span>
							{Math.round((dataset.value * 100) / markersData.value)}%
						</span>
					</div>
				);
			})}
		</div>
	);
}
