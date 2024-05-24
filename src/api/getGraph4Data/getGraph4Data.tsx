import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph4ApiResponse = {
	label: string;
	description: string;
	value: number;
};

async function getGraph4Data() {
	return await axios.get<Graph4ApiResponse[]>(
		"http://localhost:3000/graph4Data"
	);
}

export function useGetGraph4Data() {
	return useQuery({
		queryKey: ["Graph4Data"],
		queryFn: getGraph4Data,
	});
}
