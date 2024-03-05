import { useCallback, useState } from "react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import clsx from "clsx";

type ProgressBarProps = {
  label: string;
  value: number;
  colorVariant: keyof typeof COLOR_VARIANTS;
};

type ProgressColumn = { id: number; highlighted: boolean };

const DEFAULT_VARIANT = {
  bgColor: "bg-zinc-600",
};

const COLOR_VARIANTS = {
  1: {
    bgColor: "bg-teal-300",
  },
  2: {
    bgColor: "bg-blue-500",
  },
  3: {
    bgColor: "bg-blue-700",
  },
};

export function ProgressColumns({
  label,
  value,
  colorVariant,
}: ProgressBarProps) {
  const [columns, setColumns] = useState<Array<ProgressColumn>>([]);

  const onResize = useCallback(
    (target: HTMLDivElement) => {
      const { width } = target.getBoundingClientRect();
      const allColumns = Math.floor(width / 20); // Column width + gap
      const highlightedColumns = Math.round(allColumns * (value / 100));

      setColumns(
        [...Array(allColumns).keys()].map((id) => {
          return {
            id,
            highlighted: id < highlightedColumns,
          };
        })
      );
    },
    [value]
  );

  const progressRef = useResizeObserver(onResize);

  // TODO: USE TW-MERGE 
  return (
    <div className="flex items-center justify-center">
      <span className="font-bold uppercase min-w-20">{label}</span>
      <div className="w-full flex gap-[8px]" ref={progressRef}>
        {columns.map(({ id, highlighted }) => (
          <div
            key={id}
            className={clsx("w-[12px] h-8 rounded-sm", {
              [COLOR_VARIANTS[colorVariant]?.bgColor || DEFAULT_VARIANT.bgColor]:
                highlighted,
              ["bg-zinc-800/70"]: !highlighted,
            })}
          />
        ))}
      </div>
      <span className={`text-sm min-w-10 text-end font-bold`}>{value}%</span>
    </div>
  );
}
