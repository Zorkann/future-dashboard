import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import countries from "./features.json";
import { Markers } from "./components/Markers";
import { Legend } from "./components/Legend";
import { GRAPH_10_DATA } from "./data";

export function Graph10() {
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
                className="fill-zinc-800 stroke-zinc-800"
              />
            ))
          }
        </Geographies>
        <Markers markersData={GRAPH_10_DATA.markers} />
      </ComposableMap>
      <Legend markersData={GRAPH_10_DATA.markers} />
    </div>
  );
}
