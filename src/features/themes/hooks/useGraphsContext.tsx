import { useContext } from "react";
import { GraphsContext } from "../GraphsContextProvider";

export function useGraphsContext() {
	const context = useContext(GraphsContext);
	if (!context) {
		throw new Error("useGraphsContext must be used within a GraphsProvider");
	}
	return context;
}
