import React from 'react';

interface IconWrapperProps {
  icon: React.ReactElement<SVGElement>; // Ensure the icon is an SVG element
  color: string;
  bgColor: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon, color, bgColor }) => {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-full p-2 w-min h-min my-auto ${bgColor}`}
    >
      {React.cloneElement(icon, { className: 'fill-current ' + color })}
    </div>
  );
};

export default IconWrapper;