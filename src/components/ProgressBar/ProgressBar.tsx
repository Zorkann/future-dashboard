import { clsx } from 'clsx';

type ProgressBarProps = {
  label: string;
  value: number;
  colorVariant: number;
};

const DEFAULT_VARIANT = {
  color: 'text-default',
  bgColor: '[&::-webkit-progress-value]:bg-default',
};

const COLOR_VARIANTS = [
  {
    color: 'text-primary',
    bgColor: '[&::-webkit-progress-value]:bg-primary',
  },
  {
    color: 'text-secondary',
    bgColor: '[&::-webkit-progress-value]:bg-secondary',
  },
  {
    color: 'text-secondary-700',
    bgColor: '[&::-webkit-progress-value]:bg-secondary-700',
  },
];

export function ProgressBar({ label, value, colorVariant }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center">
      <span className="font-bold uppercase min-w-14">{label}</span>
      <progress
        value={value}
        max={'100'}
        className={clsx(
          '[&]:w-full [&]:h-1 [&]:rounded-lg [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-bar]:bg-default-800/70 [&::-webkit-progress-value]:rounded-lg',
          COLOR_VARIANTS[colorVariant]?.bgColor || DEFAULT_VARIANT.bgColor,
        )}
      >
        Progress Bar
      </progress>
      <span
        className={clsx(
          'text-sm min-w-10 text-end',
          COLOR_VARIANTS[colorVariant]?.color || DEFAULT_VARIANT.color,
        )}
      >
        {value}%
      </span>
    </div>
  );
}
