import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import { useGetGraph2Data } from "../../src/api/getGraph2Data";

// TODO: HOW TO GET CSS HEX FROM TAILWIND
export function Graph2() {
	const { status, data } = useGetGraph2Data();

	if (status === "pending") return <h2>Loading...</h2>;

	if (status === "error") return <h2>Error</h2>;

	console.log(data);
	console.log(data.data);
	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={data.data}
				margin={{
					top: 5,
					right: 20,
					left: -24,
					bottom: 5,
				}}
			>
				<CartesianGrid className="stroke-default-800" />
				<XAxis
					dataKey="name"
					tickLine={false}
					axisLine={{
						className: "stroke-default-800",
					}}
					tickMargin={10}
					stroke="currentColor"
					className="text-text"
				/>
				<YAxis
					tickLine={false}
					axisLine={{
						className: "stroke-default-800",
					}}
					tickMargin={10}
					stroke="currentColor"
					className="text-text"
				/>
				<Line
					dataKey="pv"
					dot={false}
					strokeWidth={2}
					className="text-primary"
					stroke="currentColor"
				/>
				<Line
					dataKey="uv"
					dot={false}
					strokeWidth={2}
					className="text-secondary"
					stroke="currentColor"
				/>
				<Line
					dataKey="amt"
					dot={false}
					strokeWidth={2}
					className="text-secondary-700"
					stroke="currentColor"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
