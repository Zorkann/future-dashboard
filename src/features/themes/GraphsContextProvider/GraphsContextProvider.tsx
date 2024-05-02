import { createContext, useContext, useState, ReactNode } from "react";

type GraphState = {
	Graph1: boolean;
	Graph2: boolean;
	Graph3: boolean;
	Graph4: boolean;
	Graph5: boolean;
	Graph7: boolean;
	Graph8: boolean;
	Graph9: boolean;
	Graph10: boolean;
	Graph12: boolean;
};

type GraphsContextType = {
	graphStates: GraphState;
	toggleGraphVisibility: (graphName: keyof GraphState) => void;
};

export const GraphsContext = createContext<GraphsContextType | undefined>(
	undefined
);

export const useGraphsContext = () => {
	const context = useContext(GraphsContext);
	if (!context) {
		throw new Error("useGraphsContext must be used within a GraphsProvider");
	}
	return context;
};

export function GraphsProvider({ children }: { children: ReactNode }) {
	const [graphStates, setGraphStates] = useState<GraphState>({
		Graph1: true,
		Graph2: true,
		Graph3: true,
		Graph4: true,
		Graph5: true,
		Graph7: true,
		Graph8: true,
		Graph9: true,
		Graph10: true,
		Graph12: true,
	});

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
