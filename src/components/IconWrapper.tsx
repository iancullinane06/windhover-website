import React from 'react';

interface IconWrapperProps {
  icon: React.ReactElement<SVGElement>; // Ensure the icon is an SVG element
  color: string;
  bgColor: string;
  borderColour?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  color,
  bgColor,
  borderColour = 'border-transparent',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full border p-2 w-12 h-12 my-auto ${bgColor} ${borderColour}`}
    >
      {React.cloneElement(icon, { className: 'fill-current ' + color })}
    </div>
  );
};

export default IconWrapper;