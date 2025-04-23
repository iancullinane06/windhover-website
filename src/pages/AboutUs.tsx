import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Compost, Timeline, RocketLaunch, Balance } from '@mui/icons-material';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)({
  backgroundColor: '#000000',
  color: 'white',
  padding: '6rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  height: '600px',
});

const HeroImage = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  backgroundImage: 'url(/coding.jpg)',
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
    background: 'rgba(0,0,0,0.6)',
    zIndex: 2,
  },
  role: 'img',
  'aria-label': 'Forest background image',
});

const HeroContent = styled(Box)({
  zIndex: 3,
  textAlign: 'center',
  maxWidth: '800px',
});

const StatCard = styled(motion.div)(({ theme }) => ({
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

const SectionTitle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& .dot': {
    width: '12px',
    height: '12px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    marginRight: '1rem',
  },
  '& .line': {
    flex: 1,
    height: '2px',
    backgroundColor: '#007bff',
    marginRight: '1rem',
  },
});

function TimelineItem({ title, description, isLast }: { title: string; description: string; isLast?: boolean }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: isLast ? 0 : 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
        <Box
          className="dot"
          sx={{
            width: '12px',
            height: '12px',
            backgroundColor: '#007bff',
            borderRadius: '50%',
            marginTop: '4px', // Slight top margin for separation
          }}
        />
        {!isLast && (
          <Box
            className="line"
            sx={{
              width: '2px',
              height: '60px', // Set a static height for the line
              backgroundColor: '#007bff',
              marginTop: '4px', // Align with the dot
            }}
          />
        )}
      </Box>
      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

function AboutUs() {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage />
        <HeroContent>
          <Typography component="h1" variant="h2" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6">Merging Ecology and AI to Protect Natural Habitats</Typography>
        </HeroContent>
      </HeroSection>

      {/* Our Values */}
      <Box
        sx={{
          backgroundColor: '#000000',
          color: 'white',
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'black' }}>
            Sustainability. Precision. Innovation. Integrity. We believe that technology should serve the planet — not the other way around.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 4,
            }}
          >
            <StatCard
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box className="icon">
                <Compost />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Sustainability
              </Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>
                Protecting the planet through innovation.
              </Typography>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05, y: -15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box className="icon">
                <Timeline />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Precision
              </Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>
                Data-driven solutions for conservation.
              </Typography>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05, y: -20 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box className="icon">
                <RocketLaunch />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Innovation
              </Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>
                Pioneering AI for ecological challenges.
              </Typography>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Box className="icon">
                <Balance />
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }}>
                Integrity
              </Typography>
              <Typography variant="body1" sx={{ color: 'black' }}>
                Committed to ethical environmental practices.
              </Typography>
            </StatCard>
          </Box>
        </Container>
      </Box>

      {/* Our Story */}
      <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Story
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            GreenLens was born out of a passion for the environment and a desire to make a difference. Our journey has been one of discovery, innovation, and a commitment to using technology for good.
          </Typography>
        </Container>
        <Container>
          <TimelineItem
            title="The Spark"
            description="It all began in secondary school, driven by a deep concern for the environment and a growing fascination with how AI could be harnessed for good. What started as a simple idea — detecting invasive rhododendron using multispectral imagery — quickly became a full-blown research project. Armed with nothing but determination and curiosity, the journey began."
          />
          <TimelineItem
            title="Hitting the Ground Running"
            description="Over the course of 8 intense months, the GreenLens platform took shape. From data collection and training deep learning models, to mapping real-world environments, every line of code and every field trip brought the project closer to reality. A trip to Killarney National Park — one of Ireland’s most affected regions — helped validate the model in rugged, real-world conditions."
          />
          <TimelineItem
            title="Recognition & Growth"
            description="The project made its debut at the BT Young Scientist & Technology Exhibition, earning not just Second Place in its category but also the prestigious EPA Award in 2025. This wasn’t the first recognition — in 2023, a related prototype had already earned the Geological Survey Ireland (GSI) Award. These milestones were more than just trophies — they were proof that young people can lead in environmental innovation."
          />
          <TimelineItem
            title="From Prototype to Platform"
            description="What started as a science fair project has now evolved into a full-featured, mission-driven platform. GreenLens uses AI to turn raw multispectral data into actionable insights for conservationists and land managers. Built from scratch, tested in the wild, and validated through accolades — GreenLens is now geared to scale its impact beyond rhododendron to other invasive species threatening biodiversity."
            isLast
          />
        </Container>
      </Box>

      {/* Looking Ahead */}
      <Box sx={{ backgroundColor: '#fce4ec', py: 8 }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Looking Ahead
          </Typography>
          <Typography variant="body1">
            Our vision extends far beyond rhododendrons. From Japanese knotweed to giant hogweed, we’re expanding our capabilities to tackle diverse ecological challenges across the globe.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;
