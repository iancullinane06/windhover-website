import IconWrapper from '../components/IconWrapper';
import { LeafIcon, RocketLaunchIcon, ScalesIcon, FlowerLotusIcon, LineSegmentsIcon, TargetIcon } from '@phosphor-icons/react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TitleBlock, PureContentBlock, HeroBlock, SpeciesInfoBlock } from '../components/Blocks';

function AboutUs() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroBlock
        title="Merging Ecology and AI"
        content="to Protect Natural Habitats."
        contentColor1="indigo-400"
        contentColor2="rose-500"
        bgColor1="teal-300"
        bgColor2="sky-700"
        imageSrc="/coding.jpg"
      />
      
      {/* Our Name */}
      <div className="flex justify-center py-16 px-4 bg-stone-300 dark:bg-stone-900">
        <SpeciesInfoBlock
          className="w-5/6 lg:w-1/2"
          title="Windhover"
          icon={
            <img
              src="/svg/falcon.png"
              alt="Windhover Falcon"
              className="w-12 h-12 invert dark:invert-0"
            />
          }
          pronunciation="/'wɪndˌhɒvər/"
          scientificName="Falco tinnunculus"
          description="The Windhover, or Common Kestrel, is a bird renowned for its precision and agility in flight. Just as the kestrel hovers effortlessly while scanning the ground for prey, our platform hovers over vast landscapes, utilising cutting-edge AI to detect and manage invasive species with pinpoint accuracy."
        />
      </div>

      {/* Our Values */}
      <div className="bg-stone-300 dark:bg-stone-900 text-black py-16 px-8">
        <div className="flex flex-col md:grid mx-auto px-4 grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 gap-8"
        style={{backgroundImage: "url('/TopographicImages/topo-1.png')", backgroundSize: "contain",
        backgroundRepeat: "no-repeat", backgroundPosition: "80%"}}>
          <div className="md:col-span-2 col-start-1 row-start-1">
            <TitleBlock
              title="Our Values"
              icon={<FlowerLotusIcon />}
              iconPosition="start"
              bgColor="bg-transparent"
              textColor="text-black dark:text-sky-400"
            />
            <PureContentBlock
              content="Sustainability. Precision. Innovation. Integrity. We believe that technology should serve the planet not the other way around."
              bgColor="bg-transparent"
              textColor="text-black dark:text-white"
            />
          </div>
          {[
            {
              icon: <IconWrapper icon={<LeafIcon />} bgColor={'bg-stone-300 dark:bg-stone-900'} color={'text-sky-500'} />,
              title: 'Sustainability',
              description: 'Protecting the planet through innovation.',
              bgColor: 'bg-stone-500/70',
              gridPosition: 'row-start-2 md:col-start-3 md:row-start-1'
            },
            {
              icon: <IconWrapper icon={<TargetIcon />} bgColor={'bg-sky-100'} color={'text-black'} />,
              title: 'Precision',
              description: 'Data-driven solutions for conservation.',
              bgColor: 'bg-sky-100/60',
              gridPosition: 'row-start-3 md:col-start-1 md:row-start-2'
            },
            {
              icon: <IconWrapper icon={<RocketLaunchIcon />} bgColor={'bg-sky-200'} color={'text-black'} />,
              title: 'Innovation',
              description: 'Pioneering AI for ecological challenges.',
              bgColor: 'bg-sky-200/60',
              gridPosition: 'row-start-4 md:col-start-2 md:row-start-2'
            },
            {
              icon: <IconWrapper icon={<ScalesIcon />} bgColor={'bg-sky-300'} color={'text-black'} />,
              title: 'Integrity',
              description: 'Committed to ethical environmental practices.',
              bgColor: 'bg-sky-300/60',
              gridPosition: 'row-start-5 md:col-start-3 md:row-start-2'
            },
          ].map((value, index) => (
            <div
              key={index}
              className={`relative text-center w-auto sm:w-3/5 md:w-full mx-auto ${value.gridPosition} ${value.bgColor} ${
                index == 0 ? 'text-white' : 'text-black'
              } p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
            >
              <div className="absolute top-[-10px] right-[-10px] rounded-full p-2">
                {value.icon}
              </div>
              <h4 className={`text-xl font-semibold font-mono mb-2`}>
                {value.title}
              </h4>
              <p className={`text-base`}>{value.description}</p>
            </div>
            ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-stone-300 dark:bg-stone-900 dark:text-white px-8">
        <div className="container mx-auto">
          <TitleBlock
            title="Our Story"
            icon={<LineSegmentsIcon />}
            iconPosition="start"
            bgColor="bg-stone-300 dark:bg-stone-900"
            textColor="text-black dark:text-sky-400"
          />
          <div className="relative flex flex-col md:grid md:grid-cols-[3fr_2fr_3fr] md:grid-rows-5 gap-16 text-stone-800 text-justify">
            {/* Central Line */}
            <div className="absolute w-3 md:w-5 bg-gradient-to-b from-sky-200 to-green-200 h-full left-1/2 top-[190px] sm:top-[160px] rounded-t-full transform -translate-x-1/2 row-span-5 row-start-1 z-1"></div>

            {/* Introductory Text */}
            <div className="relative rounded-2xl transform transition-transform col-span-2 m-4 mr-auto w-4/5">
              <p className="text-base mb-8 text-stone-700 text-shadow-lg dark:text-white z-2">
                Windhover was born out of a passion for the environment and a desire to make a difference. Our journey has been one of discovery, innovation, and a commitment to using technology for good.
              </p>
            </div>

            {/* Timeline Items */}
            {[
              {
                icon: <LineSegmentsIcon />,
                title: "The Spark",
                description:
                  "It all began in secondary school, driven by a deep concern for the environment and a growing fascination with how AI could be harnessed for good. What started as a simple idea — detecting invasive rhododendron using multispectral imagery — quickly became a full-blown research project. Armed with nothing but determination and curiosity, the journey began.",
                bgColor: "sky-200",
              },
              {
                icon: <RocketLaunchIcon />,
                title: "Hitting the Ground Running",
                description:
                  "Over the course of 8 intense months, the Windhover platform took shape. From data collection and training deep learning models, to mapping real-world environments, every line of code and every field trip brought the project closer to reality. A trip to Killarney National Park — one of Ireland’s most affected regions — helped validate the model in rugged, real-world conditions.",
                bgColor: "cyan-200",
              },
              {
                icon: <ScalesIcon />,
                title: "Recognition & Growth",
                description:
                  "The project made its debut at the BT Young Scientist & Technology Exhibition, earning not just Second Place in its category but also the prestigious EPA Award in 2025. This wasn’t the first recognition — in 2023, a related prototype had already earned the Geological Survey Ireland (GSI) Award. These milestones were more than just trophies — they were proof that young people can lead in environmental innovation.",
                bgColor: "teal-200",
              },
              {
                icon: <FlowerLotusIcon />,
                title: "From Prototype to Platform",
                description:
                  "What started as a science fair project has now evolved into a full-featured, mission-driven platform. Windhover uses AI to turn raw multispectral data into actionable insights for conservationists and land managers. Built from scratch, tested in the wild, and validated through accolades — Windhover is now geared to scale its impact beyond rhododendron to other invasive species threatening biodiversity.",
                bgColor: "emerald-200",
              },
            ].map((story, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

              return (
                <div
                  key={index}
                  ref={ref}
                  className={clsx(
                    'relative p-4 md:p-8 lg:p-12 rounded-2xl shadow-lg transform transition-transform duration-300 row-span-2 z-2 hover:scale-105',
                    index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1',
                    `md:row-start-${index + 1}`,
                    {
                      'bg-sky-200': story.bgColor === 'sky-200',
                      'bg-cyan-200': story.bgColor === 'cyan-200',
                      'bg-teal-200': story.bgColor === 'teal-200',
                      'bg-emerald-200': story.bgColor === 'emerald-200',
                    }
                  )}
                >
                  {/* Branching Line */}
                  <motion.div
                    className={clsx(
                      'absolute h-1 md:bg-stone-700 dark:md:bg-white top-1/2 transform -translate-y-1/2',
                      index % 2 === 0 ? '-left-2/5 w-[calc(50%-1rem)] md:w-[calc(40%-1rem)]' : '-right-2/5 w-[calc(50%-1rem)] md:w-[calc(40%-1rem)]'
                    )}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ transformOrigin: index % 2 === 0 ? 'right' : 'left' }}
                  ></motion.div>

                  {/* Content */}
                  <div className="absolute top-[-10px] right-[-10px]">
                    <IconWrapper
                      icon={story.icon}
                      bgColor={'bg-stone-900'}
                      color={clsx({
                        'text-sky-200': story.bgColor === 'sky-200',
                        'text-cyan-200': story.bgColor === 'cyan-200',
                        'text-teal-200': story.bgColor === 'teal-200',
                        'text-emerald-200': story.bgColor === 'emerald-200',
                      })}
                    />
                  </div>
                  <h4 className="text-xl font-semibold font-mono text-shadow-black mb-2">{story.title}</h4>
                  <p className="text-base">{story.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="bg-stone-300 dark:bg-stone-900 py-16">
        <div className="p-6 rounded-2xl shadow-lg container mx-auto px-4 w-3/5 bg-green-200 z-2">
          <h5 className="text-2xl font-semibold mb-4 text-black z-10">
            <IconWrapper icon={<RocketLaunchIcon />} bgColor={'bg-stone-900'} color={'text-amber-200'} /> Looking Ahead
          </h5>
          <p className="text-base text-text-dark">
            Our vision extends far beyond rhododendrons. From Japanese knotweed to giant hogweed, we’re expanding our capabilities to tackle diverse ecological challenges across the globe.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
