import { ProgressCircle } from "../components/ProgressCircle";
const DATA = [
	{
		label: "MAGNA",
		value: 878,
	},
	{
		label: "VELIT",
		value: 618,
	},
	{
		label: "DOLOR",
		value: 500,
	},
	{
		label: "CUPLA",
		value: 221,
	},
];

export function Graph12() {
	return (
		<div className="mt-2">
			<div className="flex items-center gap-3">
				<div className="bg-blue-500 h-3 w-3 rounded-full block"></div>
				<span className="uppercase text-2xs">
					Lorem Ipsum is simply dummy lorem dummy lorem
				</span>
			</div>
			<div className="flex gap-4">
				{DATA.map((data, index) => {
					return (
						<ProgressCircle
							key={data.label}
							label={data.label}
							value={data.value}
							colorVariant={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
