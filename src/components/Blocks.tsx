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
  textColor = 'text-black',
}: TitleBlockProps) {
  return (
    <div className={clsx('flex items-center gap-4 p-4 rounded-lg shadow-lg', bgColor)}>
      {icon && iconPosition === 'start' && (
        <IconWrapper icon={icon} bgColor={'bg-sky-500'} color={'text-stone-100'} />
      )}
      <h1 className={clsx('text-4xl font-serif font-light italic', textColor)}>{title}</h1>
      {icon && iconPosition === 'finish' && (
        <IconWrapper icon={icon} bgColor={'bg-sky-500'} color={'text-stone-100'} />
      )}
    </div>
  );
}

export function ContentBlock({
  title,
  content,
  bgColor = 'bg-stone-300',
  textColor = 'text-black',
}: ContentBlockProps) {
  return (
    <div className={clsx('p-6 rounded-lg shadow-lg', bgColor)}>
      <h3 className={clsx('text-xl font-semibold mb-4', textColor)}>{title}</h3>
      {content && <p className={clsx('text-base', textColor)}>{content}</p>}
    </div>
  );
}

export function PureContentBlock({
  content,
  bgColor = 'bg-stone-300',
  textColor = 'text-black',
}: PureContentBlockProps) {
  return (
    <div className={clsx('p-6 rounded-lg shadow-lg', bgColor)}>
      <p className={clsx('text-base', textColor)}>{content}</p>
    </div>
  );
}