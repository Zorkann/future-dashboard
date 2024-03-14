import { ProgressColumns } from "../components/ProgressColumns";

const GRAPH_3_DATA = [
  {
    label: "cillum",
    value: 30,
  },
  {
    label: "molit",
    value: 60,
  },
  {
    label: "fugiat",
    value: 80,
  },
];

// TODO: USE GRID INSTEAD OF FLEX
export function Graph3() {
  return (
    <div className="flex flex-col gap-4">
      {GRAPH_3_DATA.map(({ label, value }, index) => (
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
