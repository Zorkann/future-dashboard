import { ProgressCircle } from "../components/ProgressCircle";
const data = [
	{
		label: "MAGNA",

		count: 878,
	},
	{
		label: "VELIT",

		count: 618,
	},
	{
		label: "DOLOR",

		count: 521,
	},
	{
		label: "CUPLA",

		count: 221,
	},
];
const maxData = 1000;

const percentages = data.map((item) =>
	Math.round((item.count / maxData) * 100)
);

export function Graph12() {
	return (
		<div className="mt-2">
			<div className="flex items-center gap-3 w-[250px] ml-3">
				<div className="bg-blue-500 h-3 w-3 rounded-full block"></div>
				<span className="uppercase text-[0.5rem]">
					Lorem Ipsum is simply dummy lorem dummy lorem
				</span>
			</div>
			<div className="flex">
				{percentages.map((percent, index) => (
					<ProgressCircle
						key={index}
						label={data[index].label}
						percent={percent}
						value={data[index].count}
						colorVariant={((index % 3) + 1) as 1 | 2 | 3}
						transparentVariant={index === data.length - 1 ? 1 : 2}
					/>
				))}
			</div>
		</div>
	);
}
