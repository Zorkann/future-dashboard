import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph1ApiResponse = {
	label: string;
	value: number;
};

export async function getGraph1Data() {
	return await axios.get<Graph1ApiResponse[]>(
		"http://localhost:3000/graphData1"
	);
}

export function useGetGraph1Data() {
	return useQuery({
		queryKey: ["super-heroes"],
		queryFn: getGraph1Data,
	});
}
