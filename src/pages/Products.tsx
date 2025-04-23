import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import FrostedGlassCard from '../components/Widgets';
import pricingPlans from '../config/PricingPlans.json';


const RhodoLensSection = styled(Box)({
  backgroundColor: '#d3d3d3',
  padding: '6rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  minHeight: '500px',
});

const StatCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  background: '#ffffff',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  '& .icon': {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#000000',
    color: 'white',
    borderRadius: '50%',
    padding: theme.spacing(1),
    zIndex: 2,
  },
}));

function Products() {
  return (
    <div>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#000000',
          color: 'white',
          padding: '6rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          height: '600px',
        }}
      >
        <Box sx={{ zIndex: 3, maxWidth: '50%' }}>
          <Typography variant="h3" gutterBottom>
            Products
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our software is designed to help as many people as possible. Your support through donations and priced plans ensures we can keep improving and serving our community.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/pricing">
            Explore Pricing
          </Button>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '80%',
            backgroundImage: 'url(/forest.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              background: 'linear-gradient(to top, #000000, transparent) 80%, linear-gradient(to right, #000000, transparent) 80%',
              zIndex: 2,
            },
          }}
          role="img"
          aria-label="Forest background image"
        ></Box>
      </Box>

      {/* Our Technology with Stats */}
      <Box sx={{ backgroundColor: '#e0f7fa', py: 8 }}>
        <Container>
          <Typography variant="h5" gutterBottom>Our Technology</Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Powered by machine learning and advanced image processing, our platform can identify invasive species from drone and satellite imagery, classify risk zones, and generate vector shapefiles in real time.
          </Typography>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={4}>
            <StatCard>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>97%</Typography>
              <Typography variant="body1">Accuracy detecting Rhododendron</Typography>
            </StatCard>
            <StatCard>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>12x</Typography>
              <Typography variant="body1">Faster than manual surveying</Typography>
            </StatCard>
            <StatCard>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>1.2M+</Typography>
              <Typography variant="body1">Acres scanned to date</Typography>
            </StatCard>
          </Box>
        </Container>
      </Box>

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
          price={`From $${pricingPlans[1].price}`}
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