import { createContext, useState, ReactNode } from "react";
import { GraphState } from "../types";
import { GraphsContextType } from "../types";

export const GraphsContext = createContext<GraphsContextType | undefined>(
	undefined
);

export function GraphsContextProvider({ children }: { children: ReactNode }) {
	const initialGraphStates: GraphState = {
		"Graph 1": true,
		"Graph 2": true,
		"Graph 3": true,
		"Graph 4": true,
		"Graph 5": true,
		"Graph 6": true,
		"Graph 7": true,
		"Graph 8": true,
		"Graph 9": true,
		"Graph 10": true,
	};

	const [graphStates, setGraphStates] = useState(initialGraphStates);

	const toggleGraphVisibility = (graphName: keyof GraphState) => {
		setGraphStates((prevGraphStates) => ({
			...prevGraphStates,
			[graphName]: !prevGraphStates[graphName],
		}));
	};

	return (
		<GraphsContext.Provider value={{ graphStates, toggleGraphVisibility }}>
			{children}
		</GraphsContext.Provider>
	);
}
