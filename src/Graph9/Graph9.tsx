import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "./features.json";
import { Markers } from "./components/Markers";
import { Legend } from "./components/Legend";
import { useGetGraph9Data } from "../../src/api/getGraph9Data";

export function Graph9() {
	const { status, data } = useGetGraph9Data();
	if (status === "pending") return <h2>Loading...</h2>;

	if (status === "error") return <h2>Error</h2>;

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
				<Markers markersData={data.markers} />
			</ComposableMap>
			<Legend markersData={data.markers} />
		</div>
	);
}
