import { DottedCircleBlock } from "../components/DottedCircleBlock";
import { useGraphsContext } from "@features/themes";
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
	const { graphStates } = useGraphsContext();
	return graphStates.Graph4 ? (
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
	) : null;
}
