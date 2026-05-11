import React, { JSX } from 'react';
import clsx from 'clsx';
import IconWrapper from './IconWrapper';

type TitleBlockProps = {
  title: string;
  icon?: JSX.Element;
  iconPosition?: 'start' | 'finish';
  bgColor?: string;
  textColor?: string;
};

type ContentBlockProps = {
  title: string;
  content?: string;
  bgColor?: string;
  textColor?: string;
};

type PureContentBlockProps = {
  content: string;
  bgColor?: string;
  textColor?: string;
};

type SpeciesInfoBlockProps = {
  title: string;
  pronunciation: string;
  scientificName: string;
  description: string;
  icon?: JSX.Element;
  className?: string;
  showPunchHoles?: boolean;
  holesCount?: number;
  holeColorClassName?: string;
};

type HeroBlockProps = {
  title: string;
  content: string;
  titleColor1?: string;
  contentColor1?: string;
  contentColor2?: string;
  bgColor1?: string;
  bgColor2?: string;
  imageSrc: string;
};

const HERO_COLOR_MAP: Record<string, string> = {
  // stone
  'stone-900': '#1c1917',

  // sky / blue / indigo / teal / green / lime / amber / rose
  'sky-300': '#7dd3fc',
  'sky-500': '#0ea5e9',
  'teal-300': '#5eead4',
  'teal-900': '#134e4a',
  'blue-700': '#1d4ed8',
  'green-300': '#86efac',
  'green-500': '#22c55e',
  'lime-400': '#a3e635',
  'amber-500': '#f59e0b',
  'rose-300': '#fda4af',
  'rose-500': '#f43f5e',
  'indigo-400': '#818cf8',
  'indigo-700': '#4338ca',
  'teal-400': '#2dd4bf',
};

const resolveHeroColor = (color: string) => {
  if (
    color === 'transparent' ||
    color.startsWith('#') ||
    color.startsWith('rgb') ||
    color.startsWith('hsl') ||
    color.startsWith('var(')
  ) {
    return color;
  }

  return HERO_COLOR_MAP[color] ?? `var(--color-${color}, #000)`;
};

export function TitleBlock({
  title,
  icon,
  iconPosition = 'start',
  bgColor = 'bg-stone-300',
  textColor = 'text-black dark:text-white',
}: TitleBlockProps) {
  return (
    <div
      className={clsx(
        'flex flex-col md:flex-row items-center md:items-center gap-4 rounded-lg',
        bgColor
      )}
    >
      {icon && iconPosition === 'start' && (
        <IconWrapper
          icon={icon}
          bgColor={'bg-sky-500'}
          color={'text-stone-100'}
        />
      )}
      <h1
        className={clsx(
          'text-3xl font-serif font-light italic tracking-tight text-center md:text-left pt-2.5',
          textColor
        )}
      >
        {title}
      </h1>
      {icon && iconPosition === 'finish' && (
        <IconWrapper
          icon={icon}
          bgColor={'bg-sky-500'}
          color={'text-stone-100'}
        />
      )}
    </div>
  );
}

export function ContentBlock({
  title,
  content,
  bgColor = 'bg-stone-300',
  textColor = 'text-black dark:text-white',
}: ContentBlockProps) {
  return (
    <div className={clsx('p-6 rounded-lg', bgColor)}>
      <h3 className={clsx('text-xl font-semibold mb-2', textColor)}>{title}</h3>
      {content && <p className={clsx('text-base', textColor)}>{content}</p>}
    </div>
  );
}

export function PureContentBlock({
  content,
  bgColor = 'bg-stone-300',
  textColor = 'text-black dark:text-white',
}: PureContentBlockProps) {
  return (
    <div className={clsx('p-6 rounded-2xl', bgColor)}>
      <p className={clsx('text-base leading-7 text-pretty', textColor)}>{content}</p>
    </div>
  );
}

export function SpeciesInfoBlock({
  title,
  pronunciation,
  scientificName,
  description,
  icon,
  className,
  showPunchHoles = true,
  holesCount = 10,
  holeColorClassName = 'bg-stone-300 dark:bg-stone-900',
}: SpeciesInfoBlockProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-50 px-8 py-16 text-stone-900 shadow-[0_24px_60px_rgba(28,25,23,0.12)] dark:border-white/10 dark:bg-stone-800 dark:text-stone-100',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(132,204,22,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_34%)]"></div>

      {showPunchHoles && (
        <div className="absolute top-5 left-[-7px] h-[calc(100%-2.5rem)] flex flex-col justify-between">
          {Array.from({ length: holesCount }).map((_, i) => (
            <div key={i} className={clsx('h-4 w-4 rounded-full shadow-inner', holeColorClassName)}></div>
          ))}
        </div>
      )}

      <div className="relative container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
          {icon && <div className="shrink-0">{icon}</div>}
          <h2 className="pt-2.5 text-center font-serif text-3xl font-light italic tracking-tight md:text-left">{title}</h2>
        </div>

        <div className="max-w-3xl">
          <p className="mb-2 text-lg italic text-stone-600 dark:text-stone-300">{pronunciation}</p>
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
            <span className="italic">{scientificName}</span>
          </p>
          <p className="leading-7 text-pretty text-stone-700 dark:text-stone-100/90">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function HeroBlock({
  title,
  content,
  contentColor1 = 'sky-300',
  contentColor2 = 'teal-900',
  bgColor1 = 'sky-300',
  bgColor2 = 'teal-900',
  imageSrc,
}: HeroBlockProps) {
  const textGradient = `linear-gradient(to right, ${resolveHeroColor(contentColor1)}, ${resolveHeroColor(contentColor2)})`;
  const panelGradient = `linear-gradient(135deg, ${resolveHeroColor(bgColor1)} 0%, ${resolveHeroColor(bgColor2)} 100%)`;

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-16 bg-stone-300 dark:bg-stone-900 text-white h-screen overflow-hidden py-24 px-8">
      <div className="items-center">
        <h1 className="text-3xl md:text-5xl font-serif font-light text-stone-700 dark:text-stone-300 text-center lg:text-left">
          {title}<br />
          <span
            className="mr-8 inline-block font-normal text-transparent bg-clip-text"
            style={{ backgroundImage: textGradient }}
          >
            {content}
          </span>
        </h1>
      </div>
      <div
        className="rounded-xl w-full lg:w-2/5 h-64 md:h-96 p-4 bg-cover shadow-xl bg-center"
        style={{
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundImage: panelGradient,
          backgroundColor: resolveHeroColor(bgColor1),
        }}
      >
        <div
          className="bg-stone-800 rounded-xl h-full bg-cover"
          style={{
            backgroundImage: `url('${imageSrc}')`,
            backgroundPositionX: 'center',
          }}
        >
        </div>
      </div>
    </div>
  );
}
