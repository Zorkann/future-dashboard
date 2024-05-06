import { ProgressBar } from "../components/ProgressBar";
import { useGraphsContext } from "@features/themes";
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
	const { graphStates } = useGraphsContext();

	return graphStates.Graph1 ? (
		<div className="flex flex-col h-full gap-1">
			{GRAPH_1_DATA.map(({ label, value }, index) => (
				<ProgressBar
					key={label}
					label={label}
					value={value}
					colorVariant={index}
				/>
			))}
		</div>
	) : null;
}
