import { DottedCircle } from './DottedCircle';
import clsx from 'clsx';

type DottedCircleBlockProps = {
  label: string;
  value: number;
  description: string;
  colorVariant: number;
  highlighted?: boolean;
};

const COLOR_VARIANTS = ['fill-primary', 'fill-secondary', 'fill-secondary-700'];

export function DottedCircleBlock({
  label,
  value,
  description,
  colorVariant,
  highlighted,
}: DottedCircleBlockProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="relative min-h-0">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-lg">
          {value}
        </span>
        <DottedCircle
          highlighted={highlighted}
          className={clsx(COLOR_VARIANTS[colorVariant] || 'fill-zinc-600')}
        />
      </div>
      <div className="font-bold uppercase text-sm">{label}</div>
      <span className="uppercase text-2xs text-center">{description}</span>
    </div>
  );
}
