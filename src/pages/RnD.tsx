import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ApertureIcon, CaretUpDownIcon, BrainIcon, DroneIcon, PlantIcon } from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import { TitleBlock, HeroBlock } from '../components/Blocks';

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
    <>
      {/* Hero Section */}
      <HeroBlock
        title="Innovation for a"
        content="sustainable future."
        contentColor1="lime-400"
        contentColor2="amber-500"
        bgColor1="rose-300"
        bgColor2="indigo-700"
        imageSrc="/coding.jpg"
      />

      {/* Technology Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center -gap-8">
            {/* Text Content on the Left */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:grow-1 bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 -mr-2">
              <TitleBlock
              title='Technology'
              icon={<ApertureIcon/>}
              bgColor= 'bg-transparent'
              textColor='text-black dark:text-white'
              />
              <p>
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
                  className="absolute bottom-[-40px] w-auto h-10 cursor-grab shadow-md flex items-center justify-center z-40"
                >
                  <IconWrapper
                  icon={<CaretUpDownIcon style={{ transform: 'rotate(90deg)' }} />}
                  color="text-gray-800"
                  bgColor="bg-stone-300"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
N
      {/* Machine Learning Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Sankey Diagram */}
            <div className="relative mx-auto my-auto w-2/5 h-[400px] bg-stone-700 rounded-lg shadow-lg">
              <div className="w-100 h-100 rounded-full bg-stone-100 dark:bg-stone-900 -ml-50 mt-25 flex items-center justify-center">
                <PlantIcon color="var(--color-red-500)" size={48}/>
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 rounded-lg shadow-lg bg-white dark:bg-stone-800 dark:text-black p-6 md:pl-20 md:-ml-20">
            <TitleBlock
            title='Machine Learning'
            bgColor='bg-transparent'
            textColor='text-black dark:text-white'
            icon={<BrainIcon />}
            />
              <p className="text-base mb-4 text-black dark:text-white">
                Our AI models are designed for speed and accuracy, processing vast amounts of data in real-time to deliver actionable insights.
              </p>
              <ul className="text-base list-disc list-inside space-y-2 text-black dark:text-white">
                <li>97% accuracy in detecting invasive species</li>
                <li>Real-time data processing</li>
                <li>Scalable for large ecosystems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Drones Section */}
      <div className="py-8 px-4 dark:text-white bg-stone-100 dark:bg-stone-900">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:grow-1 bg-white dark:bg-stone-800 rounded-lg shadow-lg p-6 -mr-2">
            <TitleBlock
            title='Drones'
            icon={<DroneIcon/>}
            bgColor= 'bg-transparent'
            textColor='text-black dark:text-white'
            />
            <p className="text-lg mb-6">
              Leveraging drone technology, we collect high-resolution data from hard-to-reach areas, enabling precise monitoring and analysis.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>High-resolution imaging</li>
              <li>Access to remote areas</li>
              <li>Efficient data collection</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
          {/* Trapezoid */}
            <div className="relative w-full shadow-lg border-b-400 border-x-50 border-x-transparent border-b-stone-700 z-5" />
            <div className="w-25 border-b-100 border-x-25 border-x-transparent border-b-green-500 mx-auto -my-20 z-10"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default RnD;