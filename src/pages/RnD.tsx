import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import IconWrapper from '../components/IconWrapper';
import Button from '../components/Button';

function RnD() {
  const dragX = useMotionValue(200); // Motion value for tracking x position
  const clipPath = useTransform(dragX, (x) => `inset(0 0 0 ${x+20}px)`); // Transform x to clipPath

  const imageRef = useRef<HTMLImageElement>(null); // Ref to get the image element
  const [imageWidth, setImageWidth] = useState(0); // State to store the image width
  const [sliderBoundaries, setSliderBoundaries] = useState({ left: 0, right: 0 }); // State to store slider boundaries

  useEffect(() => {
    const updateSliderBoundaries = () => {
      if (imageRef.current) {
        const imageElement = imageRef.current;

        // Get the image's width
        const imageWidth = imageElement.getBoundingClientRect().right - imageElement.getBoundingClientRect().left;

        // Set the slider boundaries relative to the image's center
        setSliderBoundaries({
          left: .5*imageWidth-20, // Start at the left edge of the image
          right: 1.5*imageWidth-20, // End at the right edge of the image
        });

        // Update the image width state
        setImageWidth(imageWidth);
      }
    };

    // Initial calculation
    updateSliderBoundaries();

    // Add resize event listener
    window.addEventListener('resize', updateSliderBoundaries);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSliderBoundaries);
    };
  }, [imageRef]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[600px] bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: 'url(/coding.jpg)',
          }}
          role="img"
          aria-label="R&D background image"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-20"></div>
        </div>
        <div className="relative z-30 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-stencil mb-4 drop-shadow-lg">
            Research & Development
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Innovating for a Sustainable Future
          </p>
          <Button text="Explore Our Work" link="#technology" />
        </div>
      </div>

      {/* Technology Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Technology</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center -gap-8">
            {/* Text Content on the Left */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:grow-1 bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6">
              <p className="mb-4">
                Using advanced multispectral sensors, we capture data beyond the visible spectrum to identify invasive species and monitor ecosystems.
              </p>
            </div>
            {/* Image Slider on the Right */}
            <div className="w-full md:grow-2 pr-0 md:pr-6">
              <div className="relative h-[400px] w-full rounded-lg bg-black">
                {/* First Image */}
                <motion.img
                  ref={imageRef} // Attach ref to the first image
                  src="/VisibleImage.png"
                  alt="Visible Spectrum"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
                />
                {/* Second Image */}
                <motion.img
                  src="/IrImage.png"
                  alt="Infrared Spectrum"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg z-20"
                  style={{
                    clipPath, // Dynamically update clipPath using motion value
                  }}
                />
                {/* Draggable Tab */}
                <motion.div
                  drag="x"
                  dragConstraints={{
                    left: sliderBoundaries.left - imageWidth / 2, // Adjust left boundary relative to the image center
                    right: sliderBoundaries.right - imageWidth / 2, // Adjust right boundary relative to the image center
                  }} // Adjusted boundaries
                  style={{ x: dragX }} // Bind dragX to the draggable tab
                  whileTap={{ cursor: 'grabbing' }}
                  className="absolute bottom-[-40px] bg-white/100 rounded-full w-auto h-10 cursor-grab shadow-md flex items-center justify-center z-40"
                >
                  <IconWrapper
                    icon={<CodeIcon />}
                    color="text-gray-800"
                    bgColor="bg-stone-300"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Machine Learning Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Machine Learning</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2 rounded-2xl dark:bg-stone-400 dark:text-black p-6 md:pr-20 md:-mr-20">
              <p className="text-lg mb-6">
                Our AI models are designed for speed and accuracy, processing vast amounts of data in real-time to deliver actionable insights.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>97% accuracy in detecting invasive species</li>
                <li>Real-time data processing</li>
                <li>Scalable for large ecosystems</li>
              </ul>
            </div>

            {/* Neural Network Graphic */}
            <div className="relative w-full max-w-[50vw] h-[400px] bg-gradient-to-r from-teal-800 to-teal-800 rounded-lg shadow-lg overflow-hidden">
              {/* Background Layers */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 800 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Streamlines */}
                  <path
                    d="M 0 50 C 300 100 500 50 700 150 C 850 200 950 200 1000 200 C 1000 200 1000 300 1000 300 C 950 300 850 300 700 350 C 500 450 300 400 0 450 Z"
                    fill="#4FD1C5"
                    opacity="0.8"
                  />
                  <path
                    d="M 0 100 C 300 150 500 100 700 175 C 850 225 950 225 1000 225 C 1000 225 1000 325 1000 325 C 950 325 850 325 700 375 C 500 475 300 425 0 475 Z"
                    fill="#38B2AC"
                    opacity="0.6"
                  />
                  <path
                    d="M 0 150 C 300 200 500 150 700 200 C 850 250 950 250 1000 250 C 1000 250 1000 350 1000 350 C 950 350 850 350 700 400 C 500 500 300 450 0 500 Z"
                    fill="#319795"
                    opacity="0.4"
                  />
                </svg>
              </div>

              {/* Labels */}
              <div className="absolute top-10 left-10 text-white">
                <h3 className="text-xl font-bold">Raw Data</h3>
                <p className="text-sm">Collected from sensors and drones</p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h3 className="text-xl font-bold">Machine Learning</h3>
                <p className="text-sm">Processing and analyzing data</p>
              </div>
              <div className="absolute bottom-10 right-10 text-white text-right">
                <h3 className="text-xl font-bold">Actionable Insights</h3>
                <p className="text-sm">Delivered to conservationists</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drones Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Drones</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Content */}
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-6">
                Leveraging drone technology, we collect high-resolution data from hard-to-reach areas, enabling precise monitoring and analysis.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>High-resolution imaging</li>
                <li>Access to remote areas</li>
                <li>Efficient data collection</li>
              </ul>
            </div>

            {/* Drone Image */}
            <div className="w-full md:w-1/2">
              <img
                src="/Drone-shot.webp"
                alt="Drone in action"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RnD;