import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Paper, Button } from '@mui/material';

const EcoLytixSection = styled(Box)({
  backgroundColor: '#d3d3d3',
  padding: '6rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '500px', // Use minHeight instead of height
});

const FrostedGlass = styled(Paper)({
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: '2rem',
  maxWidth: '400px',
  margin: '0 2rem 0',
  width: 'auto',
});

const ECO_LYTIX_PRICE = 99.99;

function Products() {
  return (
    <div>
        {/* EcoLytix Section */}
        <EcoLytixSection>
        <Box sx={{ maxWidth: '45%' }}>
            <Typography variant="h4" gutterBottom>
            EcoLytix
            </Typography>
            <Typography variant="h6" gutterBottom>
            Revolutionising Environmental Intelligence
            </Typography>
            <Typography variant="body1" paragraph>
            EcoLytix is more than a tool — it's your strategic partner in the battle against invasive species. Designed for precision, speed, and scalability, our software empowers land managers, ecologists, and environmental agencies to make data-driven decisions faster than ever before.
            </Typography>
            <Typography variant="body1" paragraph>
            Harness the power of machine learning to reduce operational overheads, optimise site visits, and eliminate guesswork. Whether you're safeguarding biodiversity or ensuring regulatory compliance, EcoLytix delivers measurable results.
            </Typography>
        </Box>
        <Box sx={{ position: 'relative', width: '50%' }}>
            <Box
            sx={{
                background: 'linear-gradient(90deg,rgba(34, 172, 227, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(83, 237, 88, 1) 100%)',
                borderRadius: '16px',
                position: 'absolute',
                top: '20px',
                bottom: '20px',
                left: 0,
                right: 0,
                zIndex: 0,
            }}
            />
            <FrostedGlass elevation={3}>
            <Typography variant="h5" gutterBottom>
                Buy EcoLytix
            </Typography>
            <Typography variant="body1" gutterBottom>
                Experience precision-led, cost-effective environmental monitoring.
            </Typography>
            <Typography variant="h6" gutterBottom>
                From ${ECO_LYTIX_PRICE.toFixed(2)}
            </Typography>
            <Button variant="contained" color="primary" aria-label="Explore EcoLytix pricing" href="/pricing">
                Explore Pricing
            </Button>
            </FrostedGlass>
        </Box>
        </EcoLytixSection>

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
            Why Choose EcoLytix?
        </Typography>
        <Typography variant="h6" gutterBottom>
            Drive Down Costs. Accelerate Insight. Maximise Impact.
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', marginBottom: '2rem' }}>
            EcoLytix delivers unparalleled efficiency at every stage of your workflow. With our proprietary AI-driven analysis, you’ll eliminate manual detection delays, drastically reduce time spent in the field, and see measurable reductions in operational expenditure.
            <br /><br />
            🚀 <strong>Faster:</strong> Instant analysis at scale. No bottlenecks, no lag.<br />
            💰 <strong>Cheaper:</strong> Reduce monitoring and labor costs by up to 60%.<br />
            🎯 <strong>Smarter:</strong> Hyper-precise detection algorithms for pinpoint accuracy.<br />
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