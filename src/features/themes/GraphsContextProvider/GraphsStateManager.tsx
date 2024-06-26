import { useState } from 'react';
import { GraphState } from '../types';

const initialGraphStates: GraphState = {
  Graph_1: true,
  Graph_2: true,
  Graph_3: true,
  Graph_4: true,
  Graph_5: true,
  Graph_6: true,
  Graph_7: true,
  Graph_8: true,
  Graph_9: true,
  Graph_10: true,
};

const initGraphStates = (): GraphState => {
  const storedGraphStates = localStorage.getItem('graphStates');
  return storedGraphStates ? JSON.parse(storedGraphStates) : initialGraphStates;
};

export function GraphsStateManager() {
  const [graphStates, setGraphStates] = useState<GraphState>(initGraphStates);

  const toggleGraphVisibility = (graphName: keyof GraphState) => {
    setGraphStates((prevGraphStates) => {
      const updatedGraphStates = {
        ...prevGraphStates,
        [graphName]: !prevGraphStates[graphName],
      };

      localStorage.setItem('graphStates', JSON.stringify(updatedGraphStates));

      return updatedGraphStates;
    });
  };

  return { graphStates, toggleGraphVisibility };
}
