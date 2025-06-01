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
          [`text-${colour}-700 hover:text-white border-${colour}-700 hover:bg-${colour}-800 focus:ring-${colour}-300 dark:border-${colour}-500 dark:text-${colour}-500 dark:hover:text-white dark:hover:bg-${colour}-500 dark:focus:ring-${colour}-800`]: colour,
        }
      )}
    >
      {text}
    </a>
  );
};

export default Button;