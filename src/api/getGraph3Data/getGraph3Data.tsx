import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Graph3ApiResponse = {
	label: string;
	value: number;
};

async function getGraph3Data() {
	return await axios.get<Graph3ApiResponse[]>(
		"http://localhost:3000/graph3Data"
	);
}

export function useGetGraph3Data() {
	return useQuery({
		queryKey: ["Graph3Data"],
		queryFn: getGraph3Data,
	});
}
