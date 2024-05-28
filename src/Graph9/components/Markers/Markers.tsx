import { Marker } from "react-simple-maps";
import clsx from "clsx";
import type { Graph9ApiResponse } from "src/api/getGraph9Data";

type MarkersProps = {
	markersData: Graph9ApiResponse["markers"];
};

const COLOR_VARIANTS = ["fill-primary", "fill-secondary", "fill-secondary-700"];

export function Markers({ markersData }: MarkersProps) {
	return markersData.data.map((dataset, index) => {
		return dataset.points.map((point, i) => (
			<Marker coordinates={point.coordinates} key={i}>
				<circle
					r={point.value / 50}
					className={clsx(COLOR_VARIANTS[index] || "fill-zinc-400")}
				/>
			</Marker>
		));
	});
}
