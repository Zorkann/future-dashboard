import { ProgressColumns } from "../components/ProgressColumns";
import { useGetGraph3Data } from "../../src/api/getGraph3Data";

// TODO: USE GRID INSTEAD OF FLEX
export function Graph3() {
	const { status, data } = useGetGraph3Data();

	if (status === "pending") return <h2>Loading...</h2>;

	if (status === "error") return <h2>Error</h2>;
	return (
		<div className="flex flex-col h-full gap-4 justify-center">
			{data.data.map(({ label, value }, index) => (
				<ProgressColumns
					key={label}
					label={label}
					value={value}
					colorVariant={index}
				/>
			))}
		</div>
	);
}
