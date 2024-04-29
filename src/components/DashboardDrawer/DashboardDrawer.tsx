import { DrawerProps, Drawer } from "../Drawer";

type DashboardDrawerProps = {
	toggleGraph5Visibility: () => void;
} & DrawerProps;

export function DashboardDrawer({
	toggleGraph5Visibility,
	...rest
}: DashboardDrawerProps) {
	return (
		<Drawer {...rest}>{<div onClick={toggleGraph5Visibility}>raz</div>}</Drawer>
	);
}
