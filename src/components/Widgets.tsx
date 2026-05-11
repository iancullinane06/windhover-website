import React, { ReactNode } from 'react';
import { CheckIcon } from '@phosphor-icons/react';
import clsx from 'clsx';

interface FrostedGlassCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonLink: string;
  badge?: string;
  features?: string[];
  highlighted?: boolean;
  children?: ReactNode;
}

const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({
  title,
  description,
  price,
  buttonText,
  buttonLink,
  badge,
  features = [],
  highlighted = false,
  children,
}) => {
  return (
    <div className="w-full max-w-[24rem]">
      <div className="rounded-[2rem] bg-white p-3 shadow-[0_30px_80px_rgba(28,25,23,0.12)] ring-1 ring-white/80 dark:bg-stone-950 dark:shadow-[0_34px_90px_rgba(0,0,0,0.48)] dark:ring-white/10">
        <div
          className={clsx(
            'rounded-[1.7rem] px-6 pb-6 pt-5',
            highlighted
              ? 'bg-gradient-to-br from-lime-300 to-sky-300 dark:from-emerald-500 dark:via-teal-500 dark:to-cyan-500'
              : 'bg-gradient-to-br from-stone-200 via-stone-100 to-stone-300 dark:from-stone-900 dark:via-stone-800 dark:to-stone-700'
          )}
        >
          <span className="inline-flex rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-stone-700 shadow-sm dark:bg-black/30 dark:text-stone-100 dark:ring-1 dark:ring-white/10">
            {badge ?? title}
          </span>
          <div className="mt-10 min-h-[8.5rem] text-stone-950 dark:text-white">
            <p className="text-4xl font-semibold tracking-tight">{price}</p>
            <p className="mt-5 text-base font-medium text-stone-700 dark:text-stone-200/90">{description}</p>
          </div>
        </div>

        <div className="px-3 pb-3 pt-5">
          <a
            href={buttonLink}
            className="block rounded-full bg-stone-900 px-6 py-4 text-center text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_24px_rgba(28,25,23,0.24)] transition hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:shadow-[0_14px_30px_rgba(8,145,178,0.2)] dark:hover:bg-stone-100"
          >
            {buttonText}
          </a>

          {children && <div className="mt-5">{children}</div>}

          <ul className="mt-7 space-y-4 px-2 pb-6 text-left text-stone-900 dark:text-stone-100">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-stone-100 text-stone-400 dark:bg-white/8 dark:text-cyan-300 dark:ring-1 dark:ring-white/8">
                  <CheckIcon size={12} weight="bold" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrostedGlassCard;