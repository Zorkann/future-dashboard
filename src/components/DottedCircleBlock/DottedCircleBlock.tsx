import { DottedCircle } from "./DottedCircle";
import clsx from "clsx";

type DottedCircleBlockProps = {
  label: string;
  value: number;
  description: string;
  colorVariant: number;
  highlighted?: boolean;
};

const COLOR_VARIANTS = ["fill-teal-300", "fill-blue-500", "fill-blue-700"];

export function DottedCircleBlock({
  label,
  value,
  description,
  colorVariant,
  highlighted,
}: DottedCircleBlockProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="relative">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-lg">
          {value}
        </span>
        <DottedCircle
          highlighted={highlighted}
          className={clsx(COLOR_VARIANTS[colorVariant] || "fill-zinc-600")}
        />
      </div>
      <div className="font-bold uppercase text-sm">{label}</div>
      <div className="uppercase text-[0.5rem] text-center">{description}</div>
    </div>
  );
}
