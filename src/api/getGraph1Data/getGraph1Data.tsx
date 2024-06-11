import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph1ApiResponse = {
	label: string;
	value: number;
};

async function getGraph1Data() {
	return await axios.get<Graph1ApiResponse[]>(
		"http://localhost:3000/graph1Data"
	);
}

export function useGetGraph1Data() {
	return useQuery({
		queryKey: ["Graph1Data"],
		queryFn: getGraph1Data,
	});
}
