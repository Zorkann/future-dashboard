import { DottedCircleBlock } from "../components/DottedCircleBlock";
import { useEffect } from "react";
const GRAPH_4_DATA = [
	{
		label: "lorem",
		description:
			"example description of graph 4 data, example some text blabla",
		value: 878,
	},
	{
		label: "ipsum",
		description:
			"example description of graph 4 data, example some text blabla",
		value: 618,
	},
	{
		label: "dolor",
		description:
			"example description of graph 4 data, example some text blabla",
		value: 521,
	},
];

const HIGHEST_VALUE = Math.max(...GRAPH_4_DATA.map((data) => data.value));

export function Graph4() {
	useEffect(() => {
		fetch("http://localhost:3000/graphData4")
			.then((response) => response.json())
			.then((data) => {
				console.log("graphData4", data);
			})
			.catch((error) => {
				console.error("Błąd pobierania danych:", error);
			});
	}, []);
	return (
		<div className="flex h-full gap-4">
			{GRAPH_4_DATA.map(({ label, value, description }, index) => (
				<DottedCircleBlock
					key={label}
					label={label}
					value={value}
					description={description}
					highlighted={value === HIGHEST_VALUE}
					colorVariant={index}
				/>
			))}
		</div>
	);
}
