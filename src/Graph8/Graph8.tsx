import { BarChart, Bar, ResponsiveContainer } from "recharts";

function generateRandomNumbers() {
	const data = [];
	for (let i = 0; i < 150; i++) {
		const randomNumber = Math.floor(Math.random() * 1001);

		if (randomNumber > 300) {
			const uvObject = { uv: randomNumber };
			data.push(uvObject);
		}
	}

	return data;
}
const randomNumbersArray = generateRandomNumbers();

const HIGHEST_UV_VALUE = Math.max(...randomNumbersArray.map((item) => item.uv));
export function Graph8() {
	return (
		<div>
			<ResponsiveContainer width="100%" height={150}>
				<BarChart width={150} height={40} data={randomNumbersArray}>
					<defs>
						<linearGradient id="graph9-colorUV" x1="0" y1="0" x2="0" y2="1">
							<stop
								offset="35%"
								className="text-primary-400"
								stopOpacity={0.8}
								style={{
									stopColor: "currentColor",
								}}
							/>
							<stop
								offset="95%"
								className="text-secondary-700"
								style={{
									stopColor: "currentColor",
								}}
								stopOpacity={0.2}
							/>
						</linearGradient>
					</defs>
					<Bar
						dataKey="uv"
						stroke="url(#graph9-colorUV)"
						fillOpacity={1}
						fill="url(#graph9-colorUV)"
					/>
				</BarChart>
			</ResponsiveContainer>
			<div className="flex items-center gap-3">
				<div className="bg-primary h-2 w-2 rounded-full block" />
				<span className="text-2xl font-bold">{HIGHEST_UV_VALUE}</span>
				<span className="uppercase text-2xs">
					Lorem Ipsum is simply dummy lorem dummy lorem
				</span>
			</div>
		</div>
	);
}
