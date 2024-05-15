import { ProgressColumns } from "../components/ProgressColumns";
import { useEffect } from "react";

const GRAPH_3_DATA = [
	{
		label: "cillum",
		value: 30,
	},
	{
		label: "molit",
		value: 60,
	},
	{
		label: "fugiat",
		value: 80,
	},
];

// TODO: USE GRID INSTEAD OF FLEX
export function Graph3() {
	useEffect(() => {
		fetch("http://localhost:3000/graphData3")
			.then((response) => response.json())
			.then((data) => {
				console.log("graphData3", data);
			})
			.catch((error) => {
				console.error("Błąd pobierania danych:", error);
			});
	}, []);
	return (
		<div className="flex flex-col h-full gap-4 justify-center">
			{GRAPH_3_DATA.map(({ label, value }, index) => (
				<ProgressColumns
					key={label}
					label={label}
					value={value}
					colorVariant={index}
				/>
			))}
		</div>
	);
}
