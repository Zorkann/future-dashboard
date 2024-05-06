import { createContext, useState, ReactNode } from "react";
import { GraphState } from "../types";
import { GraphsContextType } from "../types";

export const GraphsContext = createContext<GraphsContextType | undefined>(
	undefined
);

export function GraphsContextProvider({ children }: { children: ReactNode }) {
	const initialGraphStates: GraphState = {
		Graph1: true,
		Graph2: true,
		Graph3: true,
		Graph4: true,
		Graph5: true,
		Graph6: true,
		Graph7: true,
		Graph8: true,
		Graph9: true,
		Graph10: true,
	};

	const [graphStates, setGraphStates] = useState(initialGraphStates);

	function toggleGraphVisibility(graphName: keyof GraphState) {
		setGraphStates((prevGraphStates) => ({
			...prevGraphStates,
			[graphName]: !prevGraphStates[graphName],
		}));
	}

	return (
		<GraphsContext.Provider value={{ graphStates, toggleGraphVisibility }}>
			{children}
		</GraphsContext.Provider>
	);
}
