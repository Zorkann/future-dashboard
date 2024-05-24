import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph1ApiResponse = {
	uv: number;
};

async function getGraph8Data() {
	return await axios.get<Graph1ApiResponse[]>(
		"http://localhost:3000/graph8Data"
	);
}

export function useGetGraph8Data() {
	return useQuery({
		queryKey: ["Graph8Data"],
		queryFn: getGraph8Data,
	});
}
