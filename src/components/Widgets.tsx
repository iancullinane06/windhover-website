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
      
      {/* Frosted Glass Card */}
      <div className="relative rounded-xl p-2 bg-gradient-to-r from-sky-300 to-green-300">
        <div className="bg-stone-600/80 dark:bg-stone-800/80 rounded-lg p-8 shadow-lg max-w-sm text-white text-shadow-lg backdrop-blur-sm">
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