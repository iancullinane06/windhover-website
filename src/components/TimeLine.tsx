import { Box, Typography } from '@mui/material';

const TimelineItem = ({
  title,
  description,
  children,
  isLast,
}: {
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
  isLast?: boolean;
}) => (
  <div className={`flex items-start ${isLast ? '' : 'mb-4'}`}>
    <div className="flex flex-col items-center mr-2">
      <div className="w-3 h-3 bg-sky-500 rounded-full mt-1"></div>
      {!isLast && <div className="w-[2px] h-16 bg-sky-500 mt-1"></div>}
    </div>
    <div>
      <h5 className="text-lg font-bold">{title}</h5>
      {description}
      {children && <div className="mt-2">{children}</div>}
    </div>
  </div>
);

export default TimelineItem;