import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import TimelineItem from '../components/TimeLine';

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
  backgroundImage: 'url(/rnd-hero.jpg)', // Replace with your R&D hero image
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
  'aria-label': 'R&D background image',
});

const HeroContent = styled(Box)({
  zIndex: 3,
  textAlign: 'center',
  maxWidth: '800px',
});

const ImageSlider = styled(Box)({
  position: 'relative',
  height: '400px',
  width: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  backgroundColor: '#000',
});

const SliderImage = styled(motion.img)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const SliderTab = styled(motion.div)({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '80px',
  height: '20px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  cursor: 'grab',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  color: '#333',
  zIndex: 3,
});

function RnD() {
  const [dragX, setDragX] = React.useState(200); // Default position in the middle

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <HeroImage />
        <HeroContent>
          <Typography component="h1" variant="h2" gutterBottom>
            Research & Development
          </Typography>
          <Typography variant="h6">Innovating for a Sustainable Future</Typography>
        </HeroContent>
      </HeroSection>

      {/* Technology Section */}
      <Box sx={{ py: 8, px: 2, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h5" gutterBottom>
            Technology
          </Typography>
          <TimelineItem
            title="Multispectral Imagery"
            description={
              <>
                Using advanced multispectral sensors, we capture data beyond the visible spectrum to identify invasive species and monitor ecosystems.
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Interactive Image Slider
                  </Typography>
                  <ImageSlider>
                    {/* First Image */}
                    <SliderImage
                      src="/VisibleImage.png"
                      alt="Visible Spectrum"
                      style={{ zIndex: 1 }}
                    />
                    {/* Second Image */}
                    <SliderImage
                      src="/IrImage.png"
                      alt="Infrared Spectrum"
                      style={{
                        zIndex: 2,
                        clipPath: `inset(0 0 0 ${dragX}px)`,
                      }}
                    />
                    {/* Draggable Tab */}
                    <SliderTab
                      drag="x"
                      dragConstraints={{ left: -400, right: 400 }}
                      onDrag={(event, info) => setDragX(info.point.x)}
                      whileTap={{ cursor: 'grabbing' }}
                    >
                      Drag
                    </SliderTab>
                  </ImageSlider>
                </Box>
              </>
            }
          />

          {/* Machine Learning Section */}
          <TimelineItem
            title="Machine Learning"
            description={
              <>
                Our AI models are designed for speed and accuracy, processing vast amounts of data in real-time to deliver actionable insights.
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  sx={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#00796b',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    mt: 4,
                  }}
                >
                  Fast & Accurate AI
                </Box>
              </>
            }
          />

          {/* Drone Section */}
          <TimelineItem
            title="Drones"
            description={
              <>
                Leveraging drone technology, we collect high-resolution data from hard-to-reach areas, enabling precise monitoring and analysis.
              </>
            }
          />
        </Container>
      </Box>
    </Box>
  );
}

export default RnD;