import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for the hero section
const HeroSection = styled(Box)({
    backgroundColor: '#000000',
    color: 'white',
    padding: '6rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
    height: '600px',
  });
  
  const HeroImage = styled(Box)({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '80%',
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
      background: 'linear-gradient(to top, #000000, transparent) 80%, linear-gradient(to right, #000000, transparent) 80%',
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
        </HeroContent>
      </HeroSection>

      {/* Mission and Our Story (Overlapping Sections) */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#f5f5f5',
          py: 8,
        }}
      >
        <Container>
          <Box
            sx={{
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              position: 'relative',
              width: 'fit-content'
            }}
          >
            <Box
              sx={{
                flex: 1,
                py: 4,
                px: 2,
                backgroundColor: '#ffffff',
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 2,
                width: '40vw',
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1">
                At GreenLens, our mission is to protect ecosystems through precision-driven, AI-powered environmental monitoring.
                We equip conservationists, landowners, and policymakers with cutting-edge tools to detect and combat invasive species efficiently — saving time, resources, and habitats.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                py: 4,
                px: 2,
                floating: 'right',
                backgroundColor: 'rgb(151, 151, 151)',
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 1,
                width: '40vw',
                left: '-2rem',
                top: '5rem',
                position: 'absolute',
                mt: { xs: 4, md: -4 }, // Overlap effect for larger screens
              }}
            >
              <Typography variant="h5" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                Born from a passion for ecology and innovation, GreenLens began as a high school research project entered into the
                <strong> BT Young Scientist & Technology Exhibition</strong>. Recognising the urgent threat posed by
                <em> Rhododendron ponticum</em> and other invasive species, we developed a unique solution using multispectral analysis
                and deep learning to map and manage infestations with unprecedented accuracy.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Since then, GreenLens has grown into a full-featured platform, designed in collaboration with ecologists and land managers,
                and tested across real-world landscapes. What began as a student innovation is now a mission-driven company at the
                intersection of ecology, AI, and sustainability.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Our Technology */}
      <Box
        sx={{
          backgroundColor: '#e0f7fa',
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h5" gutterBottom>
            Our Technology
          </Typography>
          <Typography variant="body1">
            Powered by machine learning and advanced image processing, our platform can identify invasive species from drone and satellite imagery,
            classify risk zones, and generate vector shapefiles in real time. By integrating AI with ecological data, we reduce
            manual surveying, cut operational costs, and enable rapid response to emerging threats.
          </Typography>
        </Container>
      </Box>

      {/* Our Values */}
      <Box
        sx={{
          backgroundImage: 'url(/images/our-values-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 8,
        }}
      >
        <Container>
          <Box
            sx={{
              py: 4,
              px: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="body1">
              Sustainability. Precision. Innovation. Integrity. We believe that technology should serve the planet — not the other way around.
              Our work is rooted in a respect for the natural world, and we’re committed to building tools that help protect it.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Looking Ahead */}
      <Box
        sx={{
          backgroundColor: '#fce4ec',
          py: 8,
        }}
      >
        <Container>
          <Typography variant="h5" gutterBottom>
            Looking Ahead
          </Typography>
          <Typography variant="body1">
            Our vision extends far beyond rhododendrons. From Japanese knotweed to giant hogweed, we’re expanding our capabilities to tackle
            diverse ecological challenges across the globe. As we grow, we continue to collaborate with environmental agencies,
            scientific communities, and land stewards to co-create the future of conservation technology.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;
