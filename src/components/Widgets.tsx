import React, { ReactNode } from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const FrostedGlass = styled(Paper)({
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '2rem',
  maxWidth: '400px',
  width: 'auto',
  zIndex: 1,
});

interface FrostedGlassCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  buttonLink: string;
  children?: ReactNode; // Add this line to allow nested content
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
    <Box sx={{ position: 'relative', width: 'fit-content', margin: '2rem' }}>
      {/* Background Rectangle */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, rgba(34, 172, 227, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 88, 1) 100%)',
          borderRadius: '16px',
          position: 'absolute',
          top: '20px',
          bottom: '20px',
          left: '-1rem',
          right: '-1rem',
          zIndex: 0,
        }}
      />
      {/* Frosted Glass Card */}
      <FrostedGlass elevation={3}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {price}
        </Typography>
        {children && <Box className="card-children">{children}</Box>}
        <Button variant="contained" color="primary" href={buttonLink}>
          {buttonText}
        </Button>
      </FrostedGlass>
    </Box>
  );
};

export default FrostedGlassCard;