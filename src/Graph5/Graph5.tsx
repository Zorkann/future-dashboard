import { AreaChart, Area, ResponsiveContainer } from "recharts";
import data from "./DataGraph5.json";

function findHighestUV(data: { name: string; uv: number }[]): number {
	const uvValues = data.map((item) => item.uv);
	const highestUV = Math.max(...uvValues);
	return highestUV;
}

const highestUVValue = findHighestUV(data);

export function Graph5() {
	return (
		<div>
			<h1 className="text-2xl  font-bold">{highestUVValue}</h1>
			<span className="bg-teal-400 h-2 w-2 rounded-full inline-block"></span>
			<ResponsiveContainer width="100%" height={150}>
				<AreaChart
					width={200}
					height={60}
					data={data}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
					<defs>
						<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#0772d7" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#0772d7" stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area
						type="monotone"
						dataKey="uv"
						stroke="#0772d7"
						fillOpacity={1}
						fill="url(#colorUv)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
