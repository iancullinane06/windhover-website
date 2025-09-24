import React, { ReactNode } from 'react';
import ButtonStyled from './Button'; // Import the Button component

interface FrostedGlassCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonLink: string;
  children?: ReactNode;
}

const FrostedGlassCard: React.FC<FrostedGlassCardProps> = ({
  title,
  description,
  price,
  buttonText,
  buttonLink,
  children,
}) => {
  return (
    <div className="relative w-fit m-8">
      {/* Background Rectangle */}
      <div className="absolute inset-0 -mx-5 bg-gradient-to-r from-sky-500 dark:from-sky-300 to-green-500 dark:to-green-300 rounded-lg blur-lg mb-6"></div>

      {/* Frosted Glass Card */}
      <div className="relative rounded-xl pt-4 bg-gradient-to-r from-sky-500 dark:from-sky-300 to-green-500 dark:to-green-300">
        <div className="bg-stone-800 rounded-lg p-8 -mx-4 shadow-lg max-w-sm text-white text-shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-base mb-4">{description}</p>
          <p className="text-lg font-semibold mb-6">{price}</p>
          {children && <div className="mb-4">{children}</div>}
          <ButtonStyled text={buttonText} link={buttonLink}/> {/* Use the Button component */}
        </div>
      </div>
    </div>
  );
};

export default FrostedGlassCard;