import { DrawerProps, Drawer } from '../Drawer';
// import { CheckboxButton } from '@components/CheckboxButton';
import { useGraphsContext } from '@features/themes/hooks/useGraphsContext';
import { GraphState } from '@features/themes/types';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { useState } from 'react';

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
  const { graphStates, toggleGraphVisibility } = useGraphsContext();
  const graphStatesKeys = Object.keys(graphStates) as Array<
    keyof typeof graphStates
  >;

  const [checked, setChecked] = useState(
    graphStatesKeys.map((key) => graphStates[key]),
  );

  const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = graphStatesKeys.map(() => event.target.checked);
    setChecked(newChecked);
    graphStatesKeys.forEach((key, index) => {
      toggleGraphVisibility(key, newChecked[index]);
    });
  };

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = [...checked];
      newChecked[index] = event.target.checked;
      setChecked(newChecked);
      toggleGraphVisibility(graphStatesKeys[index], event.target.checked);
    };

  return (
    <Drawer {...rest}>
      <div>
        <FormControlLabel
          label="Select All"
          control={
            <Checkbox
              checked={checked.every(Boolean)}
              indeterminate={checked.some(Boolean) && !checked.every(Boolean)}
              onChange={handleChangeAll}
            />
          }
        />
        {graphStatesKeys.map((graphName, index) => (
          <Box
            sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}
            key={graphName}
          >
            <FormControlLabel
              control={
                <Checkbox
                  className="accent-secondary-800"
                  checked={checked[index]}
                  onChange={handleChange(index)}
                />
              }
              label={mapGraphKeyToLabel[graphName]}
            />
          </Box>
        ))}
      </div>
    </Drawer>
  );
}
