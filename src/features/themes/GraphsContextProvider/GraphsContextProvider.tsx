import { createContext, ReactNode } from 'react';
import { GraphState } from '../types';
import { GraphsStateManager } from './GraphsStateManager';

type GraphsContextType = {
  graphStates: GraphState;
  toggleGraphVisibility: (graphName: keyof GraphState) => void;
  toggleAllGraphsVisibility: () => void;
};

export const GraphsContext = createContext<GraphsContextType | undefined>(
  undefined,
);

export function GraphsContextProvider({ children }: { children: ReactNode }) {
  const { graphStates, toggleGraphVisibility, toggleAllGraphsVisibility } =
    GraphsStateManager();

  return (
    <GraphsContext.Provider
      value={{ graphStates, toggleGraphVisibility, toggleAllGraphsVisibility }}
    >
      {children}
    </GraphsContext.Provider>
  );
}
