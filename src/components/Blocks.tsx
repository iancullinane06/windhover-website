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