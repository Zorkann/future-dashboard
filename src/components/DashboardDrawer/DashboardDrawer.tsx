import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/Button";
import { useGraphsContext } from "@features/themes/hooks/useGraphsContext";

type DashboardDrawerProps = DrawerProps;

export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
	const { graphStates, toggleGraphVisibility } = useGraphsContext();

	return (
		<Drawer {...rest}>
			<div className="flex flex-col">
				{Object.keys(graphStates).map((key) => (
					<CheckboxButton
						key={key}
						label={`${key}`}
						checked={graphStates[key] || false}
						onChange={() => toggleGraphVisibility(key)}
					/>
				))}
			</div>
		</Drawer>
	);
}
