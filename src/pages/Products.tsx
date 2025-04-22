import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import FrostedGlassCard from '../components/Widgets'; // Import the reusable widget

const RhodoLensSection = styled(Box)({
  backgroundColor: '#d3d3d3',
  padding: '6rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  minHeight: '500px',
});

const ECO_LYTIX_PRICE = 99.99;

function Products() {
  return (
    <div>
      {/* RhodoLens Section */}
      <RhodoLensSection>
        <Box sx={{ maxWidth: '45%' }}>
          <Typography variant="h4" gutterBottom>
            RhodoLens
          </Typography>
          <Typography variant="h6" gutterBottom>
            Revolutionising Environmental Intelligence
          </Typography>
          <Typography variant="body1">
            RhodoLens is more than a tool — it's your strategic partner in the battle against invasive species. Designed for precision, speed, and scalability, our software empowers land managers, ecologists, and environmental agencies to make data-driven decisions faster than ever before.
          </Typography>
          <Typography variant="body1">
            Harness the power of machine learning to reduce operational overheads, optimise site visits, and eliminate guesswork. Whether you're safeguarding biodiversity or ensuring regulatory compliance, RhodoLens delivers measurable results.
          </Typography>
        </Box>
        <FrostedGlassCard
          title="Buy RhodoLens"
          description="Experience precision-led, cost-effective environmental monitoring."
          price={`From $${ECO_LYTIX_PRICE.toFixed(2)}`}
          buttonText="Explore Pricing"
          buttonLink="/pricing"
        />
      </RhodoLensSection>

      <Box
        sx={{
          backgroundColor: '#121212',
          color: 'white',
          padding: '6rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Why Choose RhodoLens?
        </Typography>
        <Typography variant="h6" gutterBottom>
          Drive Down Costs. Accelerate Insight. Maximise Impact.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', marginBottom: '2rem' }}>
          RhodoLens delivers unparalleled efficiency at every stage of your workflow. With our proprietary AI-driven analysis, you’ll eliminate manual detection delays, drastically reduce time spent in the field, and see measurable reductions in operational expenditure.
          <br />
          <br />
          🚀 <strong>Faster:</strong> Instant analysis at scale. No bottlenecks, no lag.
          <br />
          💰 <strong>Cheaper:</strong> Reduce monitoring and labor costs by up to 60%.
          <br />
          🎯 <strong>Smarter:</strong> Hyper-precise detection algorithms for pinpoint accuracy.
          <br />
          ♻️ <strong>Greener:</strong> Make informed decisions that protect ecosystems and save money.
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Box>
    </div>
  );
}

export default Products;