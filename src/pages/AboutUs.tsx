import IconWrapper from '../components/IconWrapper';
import { Compost, Timeline, RocketLaunch, Balance, LocalFlorist } from '@mui/icons-material';
import clsx from 'clsx';

function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center bg-black text-text-light h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/coding.jpg')",
            backgroundAttachment: "fixed",
          }}
          role="img"
          aria-label="Forest background image"
        >
          <div className="absolute inset-0 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white text-lg md:text-xl">Merging Ecology and AI to Protect Natural Habitats</p>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-stone-300 dark:bg-stone-900 text-black py-16 px-8">
        <div className="container mx-auto px-4">
          <h5 className="text-7xl font-semibold mb-4 text-black dark:text-white">
            <IconWrapper icon={<LocalFlorist />} bgColor={'bg-sky-500'} color={'text-stone-100'} /> Our Values
          </h5>
          <p className="text-base mb-8 ml-20 dark:text-white">
            Sustainability. Precision. Innovation. Integrity. We believe that technology should serve the planet <br /> not the other way around.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lime-white">
            {[
              {
                icon: <IconWrapper icon={<Compost />} bgColor={'bg-stone-300 dark:bg-stone-900'} color={'text-sky-500'} />,
                title: 'Sustainability',
                description: 'Protecting the planet through innovation.',
                bgColor: 'bg-stone-500',
              },
              {
                icon: <IconWrapper icon={<Timeline />} bgColor={'bg-sky-100'} color={'text-black'} />,
                title: 'Precision',
                description: 'Data-driven solutions for conservation.',
                bgColor: 'bg-sky-100',
              },
              {
                icon: <IconWrapper icon={<RocketLaunch />} bgColor={'bg-sky-200'} color={'text-black'} />,
                title: 'Innovation',
                description: 'Pioneering AI for ecological challenges.',
                bgColor: 'bg-sky-200',
              },
              {
                icon: <IconWrapper icon={<Balance />} bgColor={'bg-sky-300'} color={'text-black'} />,
                title: 'Integrity',
                description: 'Committed to ethical environmental practices.',
                bgColor: 'bg-sky-300',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`relative text-center ${value.bgColor} text-text-dark p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
              >
                <div className="absolute top-[-10px] right-[-10px] rounded-full p-2">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                <p className="text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-stone-300 dark:bg-stone-900 dark:text-white px-8">
        <div className="container mx-auto">
          <h2 className="text-7xl font-semibold mb-4 dark:text-white">
            <IconWrapper icon={<Timeline />} bgColor={'bg-sky-500'} color={'text-stone-100'} /> Our Story
          </h2>
          <div className="relative flex flex-col md:grid md:grid-cols-3 md:grid-rows-5 gap-8 text-stone-800">
            {/* Central Line */}
            <div className="absolute w-3 md:w-5 bg-gradient-to-b from-sky-500 to-green-500 h-full left-1/2 top-[160px] rounded-t-full transform -translate-x-1/2 row-span-5 row-start-1"></div>

            {/* Introductory Text */}
            <div className="relative p-6 rounded-2xl transform transition-transform col-span-2 m-5 mx-auto w-4/5">
              <p className="text-base mb-8 text-stone-700 text-shadow-lg dark:text-white">
                GreenLens was born out of a passion for the environment and a desire to make a difference. Our journey has been one of discovery, innovation, and a commitment to using technology for good.
              </p>
            </div>

            {/* Timeline Items */}
            {[
              {
                icon: <Timeline />,
                title: "The Spark",
                description:
                  "It all began in secondary school, driven by a deep concern for the environment and a growing fascination with how AI could be harnessed for good. What started as a simple idea — detecting invasive rhododendron using multispectral imagery — quickly became a full-blown research project. Armed with nothing but determination and curiosity, the journey began.",
                bgColor: "sky-100",
              },
              {
                icon: <RocketLaunch />,
                title: "Hitting the Ground Running",
                description:
                  "Over the course of 8 intense months, the GreenLens platform took shape. From data collection and training deep learning models, to mapping real-world environments, every line of code and every field trip brought the project closer to reality. A trip to Killarney National Park — one of Ireland’s most affected regions — helped validate the model in rugged, real-world conditions.",
                bgColor: "cyan-200",
              },
              {
                icon: <Balance />,
                title: "Recognition & Growth",
                description:
                  "The project made its debut at the BT Young Scientist & Technology Exhibition, earning not just Second Place in its category but also the prestigious EPA Award in 2025. This wasn’t the first recognition — in 2023, a related prototype had already earned the Geological Survey Ireland (GSI) Award. These milestones were more than just trophies — they were proof that young people can lead in environmental innovation.",
                bgColor: "teal-300",
              },
              {
                icon: <LocalFlorist />,
                title: "From Prototype to Platform",
                description:
                  "What started as a science fair project has now evolved into a full-featured, mission-driven platform. GreenLens uses AI to turn raw multispectral data into actionable insights for conservationists and land managers. Built from scratch, tested in the wild, and validated through accolades — GreenLens is now geared to scale its impact beyond rhododendron to other invasive species threatening biodiversity.",
                bgColor: "emerald-400",
              },
            ].map((story, index) => (
              <div
                key={index}
                className={clsx(
                  'relative p-6 rounded-2xl shadow-lg transform transition-transform duration-300 row-span-2 hover:scale-105',
                  index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1',
                  `md:row-start-${index + 1}`,
                  {
                    'bg-sky-100': story.bgColor === 'sky-100',
                    'bg-cyan-200': story.bgColor === 'cyan-200',
                    'bg-teal-300': story.bgColor === 'teal-300',
                    'bg-emerald-400': story.bgColor === 'emerald-400',
                  }
                )}
              >
                {/* Branching Line */}
                <div
                  className={clsx(
                    'absolute h-1 bg-stone-700 dark:bg-white top-1/2 transform -translate-y-1/2',
                    index % 2 === 0 ? '-left-1/2 w-[calc(50%-1rem)]' : '-right-1/2 w-[calc(50%-1rem)]'
                  )}
                ></div>

                {/* Content */}
                <div className="absolute top-[-10px] right-[-10px]">
                  <IconWrapper icon={story.icon} bgColor={'bg-stone-900'} color={clsx({
                    'text-sky-100': story.bgColor === 'sky-100',
                    'text-cyan-200': story.bgColor === 'cyan-200',
                    'text-teal-300': story.bgColor === 'teal-300',
                    'text-emerald-400': story.bgColor === 'emerald-400',
                  })} />
                </div>
                <h4 className="text-xl font-bold text-shadow-black mb-2">{story.title}</h4>
                <p className="text-base">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="bg-stone-900 py-16">
        <div className="p-6 rounded-2xl shadow-lg container mx-auto px-4 w-3/5 bg-green-500 z-4">
          <h5 className="text-2xl font-semibold mb-4 text-black">
            <IconWrapper icon={<RocketLaunch />} bgColor={'bg-stone-900'} color={'text-green-600'} /> Looking Ahead
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
