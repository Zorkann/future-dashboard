import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Point = { coordinates: [number, number]; value: number };

type Marker = {
	label: string;
	points: Array<Point>;
	value: number;
};

export type Graph9ApiResponse = {
	markers: {
		value: number;
		data: Array<Marker>;
	};
};

async function getGraph9Data() {
	return await axios.get<Graph9ApiResponse>("http://localhost:3000/graph9Data");
}

export function useGetGraph9Data() {
	return useQuery({
		queryKey: ["Graph9Data"],
		queryFn: getGraph9Data,
		select: (data) => data.data,
	});
}
