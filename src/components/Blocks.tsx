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
        'flex flex-col md:flex-row items-center md:items-start justify-items-end flex-end gap-4 rounded-lg',
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
          'text-3xl font-serif font-light italic text-center md:text-left pt-2.5',
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
    <div className={clsx('p-6 rounded-lg text-justify', bgColor)}>
      <p className={clsx('text-base', textColor)}>{content}</p>
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
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-around bg-stone-300 dark:bg-stone-900 text-white h-screen overflow-hidden py-24 px-8">
      <div className="items-center">
        <h1 className="text-3xl md:text-5xl font-serif font-light text-stone-700 dark:text-stone-300 text-center lg:text-left">
          {title}<br />
          <span className={`font-regular text-transparent bg-clip-text bg-gradient-to-r from-${contentColor1} to-${contentColor2} mr-8`}>
            {content}
          </span>
        </h1>
      </div>
      <div
        className="rounded-xl w-4/5 md:w-2/5 h-96 p-4 bg-cover shadow-xl bg-center"
        style={{
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundImage: `linear-gradient(135deg, var(--color-${bgColor1}) 0%, var(--color-${bgColor2}) 100%)`,
          backgroundColor: `var(--color-${bgColor1})`, // Default to white
        }}
      >
        <div className="bg-stone-800 rounded-xl h-full bg-cover"
            style={{
              backgroundImage: `url('${imageSrc}')`
              }}>

          </div>
      </div>
    </div>
  );
}
