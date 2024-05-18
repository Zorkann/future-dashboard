import { DrawerProps, Drawer } from '../Drawer';
import { CheckboxButton } from '@components/CheckboxButton';
import { useGraphsContext } from '@features/themes/hooks/useGraphsContext';
import { GraphState } from '@features/themes/types';

type DashboardDrawerProps = DrawerProps;

const mapGraphKeyToLabel: Record<keyof GraphState, string> = {
  Graph_1: 'true',
  Graph_2: 'true',
  Graph_3: 'true',
  Graph_4: 'true',
  Graph_5: 'true',
  Graph_6: 'true',
  Graph_7: 'true',
  Graph_8: 'true',
  Graph_9: 'true',
  Graph_10: 'true',
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
