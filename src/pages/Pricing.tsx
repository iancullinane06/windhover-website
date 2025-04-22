import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import FrostedGlassCard from '../components/Widgets';
import pricingPlans from '../config/PricingPlans.json';

function Pricing() {
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          background: 'black',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
          height: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Our software is designed to help as many people as possible. Your support through donations and priced plans ensures we can keep improving and serving our community.
        </Typography>
      </Box>

      {/* Pricing Plans Section */}
      <Box sx={{ padding: '2rem', backgroundColor: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Pricing
        </Typography>
        <Typography variant="body1" gutterBottom>
          Explore our competitive pricing plans tailored to your needs.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            marginTop: '2rem',
            justifyContent: 'center',
          }}
        >
          {pricingPlans.map((plan, index) => (
            <Box
              key={index}
              sx={{
                flex: '1 1 calc(33.333% - 2rem)',
                minWidth: '300px',
                maxWidth: '400px',
              }}
            >
              <FrostedGlassCard
                title={plan.title}
                description={plan.description}
                price={plan.price}
                buttonText={plan.buttonText}
                buttonLink={plan.buttonLink}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Donations Section */}
      <Box
        sx={{
          padding: '4rem 2rem',
          height: '400px',
          background: 'linear-gradient(0deg,rgba(128, 252, 83, 1) 0%, rgba(20, 143, 84, 1) 100%)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Support Us with a Donation
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', marginBottom: '2rem' }}>
          Your donations help us continue to improve and provide this software to as many people as possible. Every contribution, big or small, makes a difference.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/donate"
          sx={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
        >
          Donate Now
        </Button>
      </Box>
    </Box>
  );
}

export default Pricing;