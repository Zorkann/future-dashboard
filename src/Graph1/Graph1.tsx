import { ProgressBar } from "../components/ProgressBar";
import { useGraphsContext } from "@features/themes/GraphsContextProvider";
const GRAPH_1_DATA = [
	{
		label: "etc",
		value: 30,
	},
	{
		label: "elit",
		value: 60,
	},
	{
		label: "ess",
		value: 80,
	},
];

// TODO: USE GRID INSTEAD OF FLEX
export function Graph1() {
	const { graphStates } = useGraphsContext(); // Użycie hooka

	console.log("Stan Graph1:", graphStates.Graph1); // Dodaj to logowanie
	return (
		<div className="flex flex-col h-full gap-1">
			{graphStates.Graph1 && // Warunkowe renderowanie
				GRAPH_1_DATA.map(({ label, value }, index) => (
					<ProgressBar
						key={label}
						label={label}
						value={value}
						colorVariant={index}
					/>
				))}
		</div>
	);
}
