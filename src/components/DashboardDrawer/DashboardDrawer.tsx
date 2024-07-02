import { DrawerProps, Drawer } from '../Drawer';
import { CheckboxButton } from '@components/CheckboxButton';
import { useGraphsContext } from '@features/themes/hooks/useGraphsContext';
import { GraphState } from '@features/themes/types';
import Box from '@mui/material/Box';

type DashboardDrawerProps = DrawerProps;

const mapGraphKeyToLabel: Record<keyof GraphState, string> = {
  Graph_1: 'Graph 1',
  Graph_2: 'Graph 2',
  Graph_3: 'Graph 3',
  Graph_4: 'Graph 4',
  Graph_5: 'Graph 5',
  Graph_6: 'Graph 6',
  Graph_7: 'Graph 7',
  Graph_8: 'Graph 8',
  Graph_9: 'Graph 9',
  Graph_10: 'Graph 10',
};

export function DashboardDrawer({ ...rest }: DashboardDrawerProps) {
  const { graphStates, toggleGraphVisibility, toggleAllGraphsVisibility } =
    useGraphsContext();
  const graphStatesKeys = Object.keys(graphStates) as Array<
    keyof typeof graphStates
  >;

  return (
    <Drawer {...rest}>
      <div>
        <CheckboxButton
          label="All Graphs"
          checked={Object.values(graphStates).every(Boolean)}
          onChange={toggleAllGraphsVisibility}
          indeterminate={
            Object.values(graphStates).some(Boolean) &&
            !Object.values(graphStates).every(Boolean)
          }
        />
        {graphStatesKeys.map((graphName) => (
          <Box className="flex flex-col ml-12" key={graphName}>
            <CheckboxButton
              label={mapGraphKeyToLabel[graphName]}
              checked={graphStates[graphName]}
              onChange={() => toggleGraphVisibility(graphName)}
            />
          </Box>
        ))}
      </div>
    </Drawer>
  );
}
