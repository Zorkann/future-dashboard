import type { Graph10Data } from "../../types";
import { Line, LineChart } from "recharts";

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

const COLOR_VARIANTS = ["fill-teal-300", "fill-blue-500", "fill-blue-700"];
const LINE_COLORS = ["#5eead4", "#3b82f6", "#1d4ed8"];
const DRAW_LINE_ANIMATION_DURATION = 4000;
const SLIDE_LEFT_ANIMATION_DURATION = DRAW_LINE_ANIMATION_DURATION / 2.75;
const GRAPH_VIEWBOX_WIDTH = 150;
const GRAPH_WIDTH = GRAPH_VIEWBOX_WIDTH * 2;

export function Legend({ markersData }: LegendProps) {
  return (
    <div className="flex gap-2 justify-between flex-wrap">
      {markersData.data.map((dataset, index) => {
        return (
          <div
            className="flex items-center gap-2 uppercase font-bold"
            key={dataset.label}
          >
            <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50%"
                cy="50%"
                r="50%"
                className={COLOR_VARIANTS[index]}
              />
            </svg>
            <span>{dataset.label}</span>
            <div
              className="relative flex items-center overflow-hidden h-full"
              style={{
                width: GRAPH_VIEWBOX_WIDTH,
              }}
            >
              <LineChart
                margin={{
                  left: 0,
                  right: 0,
                }}
                width={GRAPH_WIDTH}
                height={20}
                data={addZeroPointsForMarkersData(dataset)}
                style={{
                  position: "absolute",
                  animation: `slide-left infinite 5s linear ${SLIDE_LEFT_ANIMATION_DURATION}ms`,
                }}
              >
                <Line
                  type="linear"
                  dataKey="value"
                  dot={false}
                  strokeWidth={2}
                  stroke={LINE_COLORS[index]}
                  // HAS TO BE LONGER BECAUSE OF 2X GRAPH DATA
                  animationDuration={DRAW_LINE_ANIMATION_DURATION}
                />
              </LineChart>
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
