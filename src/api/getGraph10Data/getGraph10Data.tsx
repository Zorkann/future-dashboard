import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph1ApiResponse = {
	label: string;
	value: number;
};

async function getGraph10Data() {
	return await axios.get<Graph1ApiResponse[]>(
		"http://localhost:3000/graph10Data"
	);
}

export function useGetGraph10Data() {
	return useQuery({
		queryKey: ["Graph10Data"],
		queryFn: getGraph10Data,
	});
}
