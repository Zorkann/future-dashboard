import { ProgressCircle } from "../components/ProgressCircle";
import { useEffect } from "react";

const DATA = [
	{
		label: "MAGNA",
		value: 878,
	},
	{
		label: "VELIT",
		value: 618,
	},
	{
		label: "DOLOR",
		value: 500,
	},
	{
		label: "CUPLA",
		value: 221,
	},
];

export function Graph10() {
	useEffect(() => {
		fetch("http://localhost:3000/graphData10")
			.then((response) => response.json())
			.then((data) => {
				console.log("graphData10", data);
			})
			.catch((error) => {
				console.error("Błąd pobierania danych:", error);
			});
	}, []);
	return (
		<div className="flex flex-col w-full h-full gap-4">
			<div className="flex items-center gap-3">
				<div className="bg-primary h-3 w-3 rounded-full block"></div>
				<span className="uppercase text-2xs">
					Lorem Ipsum is simply dummy lorem dummy lorem
				</span>
			</div>
			<div className="flex gap-4 h-full min-h-0">
				{DATA.map((data, index) => {
					return (
						<ProgressCircle
							key={data.label}
							label={data.label}
							value={data.value}
							colorVariant={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
