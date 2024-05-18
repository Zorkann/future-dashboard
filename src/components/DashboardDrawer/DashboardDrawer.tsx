import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/CheckboxButton";
import { useGraphsContext } from "@features/themes/hooks/useGraphsContext";
import { GraphState } from "@features/themes/types";

type DashboardDrawerProps = DrawerProps;

const mapGraphKeyToLabel: Record<keyof GraphState, string> = {
	Graph_1: "Graph 1",
	Graph_2: "Graph 2",
	Graph_3: "Graph 3",
	Graph_4: "Graph 4",
	Graph_5: "Graph 5",
	Graph_6: "Graph 6",
	Graph_7: "Graph 7",
	Graph_8: "Graph 8",
	Graph_9: "Graph 9",
	Graph_10: "Graph 10",
};

export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
	const { graphStates, toggleGraphVisibility } = useGraphsContext();
	const graphStatesKeys = Object.keys(graphStates) as Array<
		keyof typeof graphStates
	>;

	return (
		<Drawer {...rest}>
			<div className="flex flex-col">
				{graphStatesKeys.map((graphName) => (
					<CheckboxButton
						key={graphName}
						label={mapGraphKeyToLabel[graphName]}
						checked={graphStates[graphName]}
						onChange={() => toggleGraphVisibility(graphName)}
					/>
				))}
			</div>
		</Drawer>
	);
}
