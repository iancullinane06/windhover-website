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
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border p-2 my-auto shadow-[0_8px_20px_rgba(28,25,23,0.12)] backdrop-blur-sm ${bgColor} ${borderColour}`}
    >
      {React.cloneElement(icon, { className: 'fill-current ' + color })}
    </div>
  );
};

export default IconWrapper;