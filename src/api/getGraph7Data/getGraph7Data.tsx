import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph7ApiResponse = {
	uv: number;
};

async function getGraph7Data() {
	return await axios.get<Graph7ApiResponse[]>(
		"http://localhost:3000/graph7Data"
	);
}

export function useGetGraph7Data() {
	return useQuery({
		queryKey: ["Graph7Data"],
		queryFn: getGraph7Data,
	});
}
