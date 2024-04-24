import { ProgressBar } from "../components/ProgressBar";

const GRAPH_1_DATA = [
	{
		label: "etc",
		value: 30,
	},
	{
		label: "elit",
		value: 60,
	},
	{
		label: "ess",
		value: 80,
	},
];

export function Graph1() {
	return (
		<div className="flex flex-col h-full gap-1">
			<div>
				{GRAPH_1_DATA.map(({ label, value }, index) => (
					<ProgressBar
						key={label}
						label={label}
						value={value}
						colorVariant={index}
					/>
				))}
			</div>
		</div>
	);
}
