import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph2ApiResponse = {
	name: string;
	uv: number;
	pv: number;
	amt: number;
};

export async function getGraph2Data() {
	return await axios.get<Graph2ApiResponse[]>(
		"http://localhost:3000/graph2Data"
	);
}

export function useGetGraph2Data() {
	return useQuery({
		queryKey: ["Graph2Data"],
		queryFn: getGraph2Data,
	});
}
