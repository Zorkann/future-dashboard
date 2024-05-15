import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "./features.json";
import { Markers } from "./components/Markers";
import { Legend } from "./components/Legend";
import { GRAPH_9_DATA } from "./data";
import { useEffect } from "react";
export function Graph9() {
	useEffect(() => {
		fetch("http://localhost:3000/graphData9")
			.then((response) => response.json())
			.then((data) => {
				console.log("graphData9", data);
			})
			.catch((error) => {
				console.error("Błąd pobierania danych:", error);
			});
	}, []);
	return (
		<div className="flex flex-col w-full h-full gap-4 justify-between">
			<span className="uppercase font-bold">excepteur</span>
			<ComposableMap
				projection="geoEqualEarth"
				width={800}
				height={500}
				projectionConfig={{ center: [20, 0] }}
			>
				<Geographies geography={countries}>
					{({ geographies }) =>
						geographies.map((geo) => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								className="fill-default-800/70 stroke-none"
							/>
						))
					}
				</Geographies>
				<Markers markersData={GRAPH_9_DATA.markers} />
			</ComposableMap>
			<Legend markersData={GRAPH_9_DATA.markers} />
		</div>
	);
}
