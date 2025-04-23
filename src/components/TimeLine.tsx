import { Box, Typography, Container } from '@mui/material';

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
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: isLast ? 0 : 4 }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
      <Box
        sx={{
          width: '12px',
          height: '12px',
          backgroundColor: '#007bff',
          borderRadius: '50%',
          marginTop: '4px',
        }}
      />
      {!isLast && (
        <Box
          sx={{
            width: '2px',
            height: '60px',
            backgroundColor: '#007bff',
            marginTop: '4px',
          }}
        />
      )}
    </Box>
    <Box>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {description}
      </Typography>
      {children && <Box sx={{ mt: 2 }}>{children}</Box>}
    </Box>
  </Box>
);

export default TimelineItem;