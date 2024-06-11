import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { useGetGraph5Data } from "../../src/api/getGraph5Data";

export function Graph5() {
	const { status, data } = useGetGraph5Data();

	if (status === "pending") return <h2>Loading...</h2>;

	if (status === "error") return <h2>Error</h2>;

	const HIGHEST_UV_VALUE = Math.max(...data.data.map((item) => item.uv));
	return (
		<div className="flex flex-col gap-4 h-full w-full">
			<div>
				<span className="text-2xl font-bold">{HIGHEST_UV_VALUE}</span>
				<div className="bg-primary h-2 w-2 rounded-full block" />
			</div>

			<ResponsiveContainer width={"100%"} height={"100%"}>
				<AreaChart
					width={200}
					height={60}
					data={data.data}
					margin={{
						top: 5,
						right: 0,
						left: 0,
						bottom: 5,
					}}
					className="text-secondary-700"
				>
					<defs>
						<linearGradient id="graph5-colorUV" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="currentColor" stopOpacity={0.8} />
							<stop offset="95%" stopColor="currentColor" stopOpacity={0} />
						</linearGradient>
					</defs>
					<Area
						type="monotone"
						dataKey="uv"
						stroke="currentColor"
						strokeWidth="2"
						fillOpacity={1}
						fill="url(#graph5-colorUV)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
