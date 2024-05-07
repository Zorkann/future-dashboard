import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/Button";
import { useGraphsContext } from "@features/themes/hooks/useGraphsContext";

type DashboardDrawerProps = DrawerProps;

export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
	const { graphStates, toggleGraphVisibility } = useGraphsContext();

	return (
		<Drawer {...rest}>
			<div className="flex flex-col">
				{Object.keys(graphStates).map((graphName) => (
					<CheckboxButton
						key={graphName}
						label={`${graphName}`}
						checked={graphStates[graphName] || false}
						onChange={() => toggleGraphVisibility(graphName)}
					/>
				))}
			</div>
		</Drawer>
	);
}
