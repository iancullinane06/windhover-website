import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  text: string;
  link: string;
  colour?: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, colour = "sky" }) => {
  return (
    <a
      href={link}
      className={clsx(
        `border font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 focus:ring-4 focus:outline-none`,
        {
          [`text-${colour}-500 hover:text-${colour}-700 border-${colour}-300 hover:bg-${colour}-700 focus:ring-${colour}-800 dark:border-${colour}-700 dark:text-${colour}-700 dark:hover:text-${colour}-300 dark:hover:bg-${colour}-300 dark:focus:ring-${colour}-300`]: colour,
        }
      )}
    >
      {text}
    </a>
  );
};

export default Button;

export const ButtonStyled: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a href={link} className="button-86" role="button">
      {text}
    </a>
  );
};