import { THEMES } from "./const";

export type Theme = (typeof THEMES)[number];

export type GraphState = {
	[key: string]: boolean;
};

export type GraphsContextType = {
	graphStates: GraphState;
	toggleGraphVisibility: (graphName: keyof GraphState) => void;
};
