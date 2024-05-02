import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/Button";
import { useGraphsContext } from "@features/themes/GraphsContextProvider";

type DashboardDrawerProps = DrawerProps;

export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
	const { graphStates, toggleGraphVisibility } = useGraphsContext();
	return (
		<Drawer {...rest}>
			<div className="flex flex-col">
				{Object.keys(graphStates).map((graphKey) => (
					<CheckboxButton
						key={graphKey}
						label={`${graphKey}`}
						checked={graphStates[graphKey as keyof typeof graphStates]}
						onChange={() =>
							toggleGraphVisibility(graphKey as keyof typeof graphStates)
						}
					/>
				))}
			</div>
		</Drawer>
	);
}
