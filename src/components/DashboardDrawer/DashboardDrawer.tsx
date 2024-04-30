import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/Button";
import { useGraphsContext } from "@features/themes/GraphsContextProvider";

type DashboardDrawerProps = DrawerProps;
export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
	const { graphStates, toggleGraphVisibility } = useGraphsContext(); // Użycie hooka
	return (
		<Drawer {...rest}>
			<CheckboxButton
				label="Graph 1"
				checked={graphStates.Graph1}
				onChange={() => toggleGraphVisibility("Graph1")}
			/>
			<CheckboxButton
				label="Graph 2"
				checked={graphStates.Graph2}
				onChange={() => toggleGraphVisibility("Graph2")}
			/>
		</Drawer>
	);
}
