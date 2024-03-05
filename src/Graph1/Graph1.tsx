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

// TODO: USE GRID INSTEAD OF FLEX 
export function Graph1() {
  return (
    <div className="flex flex-col gap-1">
      {GRAPH_1_DATA.map(({ label, value }, index) => (
        <ProgressBar
          key={label}
          label={label}
          value={value}
          colorVariant={(index + 1) as 1 | 2 | 3}
        />
      ))}
    </div>
  );
}
