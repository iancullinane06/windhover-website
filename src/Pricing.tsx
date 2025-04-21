import React from 'react';
import { Typography, Box } from '@mui/material';

function Pricing() {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Pricing
      </Typography>
      <Typography variant="body1">
        Explore our competitive pricing plans tailored to your needs.
      </Typography>
    </Box>
  );
}

export default Pricing;