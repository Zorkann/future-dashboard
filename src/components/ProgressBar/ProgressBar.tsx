type ProgressBarProps = {
  label: string;
  value: number;
  colorVariant: keyof typeof COLOR_VARIANTS;
};

const DEFAULT_VARIANT = {
  color: "text-zinc-600",
  bgColor: "[&::-webkit-progress-value]:bg-zinc-600",
};

const COLOR_VARIANTS = {
  1: {
    color: "text-teal-300",
    bgColor: "[&::-webkit-progress-value]:bg-teal-300",
  },
  2: {
    color: "text-blue-500",
    bgColor: "[&::-webkit-progress-value]:bg-blue-500",
  },
  3: {
    color: "text-blue-700",
    bgColor: "[&::-webkit-progress-value]:bg-blue-700",
  },
};

export function ProgressBar({ label, value, colorVariant }: ProgressBarProps) {
  return (
    <div className="flex items-center justify-center">
      <span className="font-bold uppercase min-w-14">{label}</span>
      <progress
        value={value}
        max={"100"}
        className={`
        [&]:w-full
        [&]:h-1
        [&]:rounded-lg
        [&::-webkit-progress-bar]:rounded-lg
      [&::-webkit-progress-bar]:bg-zinc-800/70
        [&::-webkit-progress-value]:rounded-lg
        ${COLOR_VARIANTS[colorVariant]?.bgColor || DEFAULT_VARIANT.bgColor}
      `}
      >
        Progress Bar
      </progress>
      <span
        className={`${
          COLOR_VARIANTS[colorVariant]?.color || DEFAULT_VARIANT.color
        } text-sm min-w-10 text-end`}
      >
        {value}%
      </span>
    </div>
  );
}
