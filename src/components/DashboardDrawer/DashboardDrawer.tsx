import { DrawerProps, Drawer } from "../Drawer";
import { CheckboxButton } from "@components/Button";

type GraphState = {
  Graph1: boolean;
  Graph2: boolean;
};

type DashboardDrawerProps = {
  graphStates: GraphState;
  toggleGraphVisibility: (graphName: keyof GraphState) => void;
} & DrawerProps;
export function DashboardDrawer({
  toggleGraphVisibility,
  graphStates,
  ...rest
}: DashboardDrawerProps) {
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
