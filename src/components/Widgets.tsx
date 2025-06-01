import React, { ReactNode } from 'react';
import Button from './Button'; // Import the Button component

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
      <div className="absolute inset-0 -top-5 -left-5 -right-5 -bottom-5 bg-gradient-to-r from-sky-400 to-green-400 rounded-lg blur-md mb-6"></div>

      {/* Frosted Glass Card */}
      <div className="relative bg-stone-900/50 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-sm text-white text-shadow-lg">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-base mb-4">{description}</p>
        <p className="text-lg font-semibold mb-6">{price}</p>
        {children && <div className="mb-4">{children}</div>}
        <Button text={buttonText} link={buttonLink} colour="amber"/> {/* Use the Button component */}
      </div>
    </div>
  );
};

export default FrostedGlassCard;