import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph5ApiResponse = {
	uv: number;
};

async function getGraph5Data() {
	return await axios.get<Graph5ApiResponse[]>(
		"http://localhost:3000/graph5Data"
	);
}

export function useGetGraph5Data() {
	return useQuery({
		queryKey: ["Graph5Data"],
		queryFn: getGraph5Data,
	});
}
