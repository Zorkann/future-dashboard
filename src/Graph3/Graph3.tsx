import { ProgressColumns } from "../components/ProgressColumns";
import { useGraphsContext } from "@features/themes";

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
	const { graphStates } = useGraphsContext();
	return graphStates.Graph3 ? (
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
	) : null;
}
