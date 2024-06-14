import { createContext, useState, ReactNode } from 'react';
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

type GraphsContextType = {
  graphStates: GraphState;
  toggleGraphVisibility: (graphName: keyof GraphState) => void;
};

export const GraphsContext = createContext<GraphsContextType | undefined>({
  graphStates: initialGraphStates,
  toggleGraphVisibility: () => null,
});

export function GraphsContextProvider({ children }: { children: ReactNode }) {
  const [graphStates, setGraphStates] = useState(() => {
    const storedGraphStates = localStorage.getItem('graphStates');
    return storedGraphStates
      ? JSON.parse(storedGraphStates)
      : initialGraphStates;
  });

  const toggleGraphVisibility = (graphName: keyof GraphState) => {
    setGraphStates((prevGraphStates: GraphState) => {
      const updatedGraphStates = {
        ...prevGraphStates,
        [graphName]: !prevGraphStates[graphName],
      };

      localStorage.setItem('graphStates', JSON.stringify(updatedGraphStates));

      return updatedGraphStates;
    });
  };

  return (
    <GraphsContext.Provider value={{ graphStates, toggleGraphVisibility }}>
      {children}
    </GraphsContext.Provider>
  );
}
