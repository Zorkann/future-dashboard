import { ReactNode } from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof VARIANTS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const VARIANTS = {
  text: 'hover:bg-default/20',
  contained:
    'text-secondary border border-secondary bg-secondary/20 hover:bg-secondary/30',
  outlined: 'border border-default hover:bg-default/20',
};

export function Button({
  variant = 'outlined',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center w-full min-w-[64px] px-4 py-2 font-bold',
        VARIANTS[variant],
      )}
      {...props}
    >
      {children}
    </button>
  );
}
