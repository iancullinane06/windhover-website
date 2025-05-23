import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import TimelineItem from '../components/TimeLine';
import IconWrapper from '../components/IconWrapper';

function RnD() {
  const dragX = useMotionValue(200); // Motion value for tracking x position
  const clipPath = useTransform(dragX, (x) => `inset(0 0 0 ${x + 494.5}px)`); // Transform x to clipPath

  const imageRef = useRef<HTMLImageElement>(null); // Ref to get the image element
  const [imageWidth, setImageWidth] = useState(0); // State to store the image width

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth); // Get the image width
    }
  }, [imageRef]);

  const sliderBoundaries = imageWidth / 2; // Calculate boundaries dynamically

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[600px] bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: 'url(/rnd-hero.jpg)',
          }}
          role="img"
          aria-label="R&D background image"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>
        </div>
        <div className="relative z-30 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Research & Development</h1>
          <p className="text-lg md:text-xl">Innovating for a Sustainable Future</p>
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-8 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Technology</h2>
          <TimelineItem
            title="Multispectral Imagery"
            description={
              <>
                <p className="mb-4">
                  Using advanced multispectral sensors, we capture data beyond the visible spectrum to identify invasive species and monitor ecosystems.
                </p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Interactive Image Slider</h3>
                  <div className="relative h-[400px] w-full rounded-lg bg-black ">
                    {/* First Image */}
                    <motion.img
                      ref={imageRef} // Attach ref to the first image
                      src="/VisibleImage.png"
                      alt="Visible Spectrum"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                    {/* Second Image */}
                    <motion.img
                      src="/IrImage.png"
                      alt="Infrared Spectrum"
                      className="absolute inset-0 w-full h-full object-cover z-20"
                      style={{
                        clipPath, // Dynamically update clipPath using motion value
                      }}
                    />
                    {/* Draggable Tab */}
                    <motion.div
                      drag="x"
                      dragConstraints={{ left: -sliderBoundaries, right: sliderBoundaries }} // Use dynamic boundaries
                      style={{ x: dragX }} // Bind dragX to the draggable tab
                      whileTap={{ cursor: 'grabbing' }}
                      className="absolute bottom-[-40px] bg-white/100 rounded-full left-1/2 transform -translate-x-1/2 w-auto h-10 cursor-grab shadow-md flex items-center justify-center z-40"
                    >
                      <IconWrapper
                        icon={<CodeIcon />}
                        color="text-gray-800"
                        bgColor="bg-stone-300"
                      />
                    </motion.div>
                  </div>
                </div>
              </>
            }
          />

          {/* Machine Learning Section */}
          <TimelineItem
            title="Machine Learning"
            description={
              <>
                <p className="mb-4">
                  Our AI models are designed for speed and accuracy, processing vast amounts of data in real-time to deliver actionable insights.
                </p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-[300px] bg-teal-700 rounded-lg flex items-center justify-center text-white text-xl font-bold mt-4"
                >
                  Fast & Accurate AI
                </motion.div>
              </>
            }
          />

          {/* Drone Section */}
          <TimelineItem
            title="Drones"
            description={
              <p>
                Leveraging drone technology, we collect high-resolution data from hard-to-reach areas, enabling precise monitoring and analysis.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RnD;