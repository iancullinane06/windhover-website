import IconWrapper from '../components/IconWrapper';
import { Compost, Timeline, RocketLaunch, Balance, LocalFlorist } from '@mui/icons-material';

function TimelineItem({ title, description, isLast }: { title: string; description: string; isLast?: boolean }) {
  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-Lime-400 rounded-full mt-1"></div>
        {!isLast && <div className="w-px h-16 bg-Lime-400 mt-1"></div>}
      </div>
      <div>
        <h5 className="text-xl font-semibold text-text-light">{title}</h5>
        <p className="mt-2 text-base text-text-light">{description}</p>
      </div>
    </div>
  );
}

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
            backgroundPositionY: "calc(50% - var(--scroll-offset, 0px))",
          }}
          role="img"
          aria-label="Forest background image"
          onScroll={(e) => {
            const offset = window.scrollY * 0.5; // Adjust the multiplier for slower scrolling
            document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
          }}
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
          <h5 className="text-7xl font-semibold mb-4 ml-10 text-white">
            <IconWrapper icon={<LocalFlorist />} bgColor={'bg-sky-500'} color={'text-stone-100'} /> Our Values
          </h5>
          <p className="text-base mb-8 dark:text-white">
            Sustainability. Precision. Innovation. Integrity. We believe that technology should serve the planet — not the other way around.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lime-white">
            {[
              {
                icon: <IconWrapper icon={<Compost />} bgColor={'bg-stone-300 dark:bg-stone-900'} color={'text-lime-500'} />,
                title: 'Sustainability',
                description: 'Protecting the planet through innovation.',
                bgColor: 'bg-stone-500',
              },
              {
                icon: <IconWrapper icon={<Timeline />} bgColor={'bg-green-100'} color={'text-black'} />,
                title: 'Precision',
                description: 'Data-driven solutions for conservation.',
                bgColor: 'bg-green-100',
              },
              {
                icon: <IconWrapper icon={<RocketLaunch />} bgColor={'bg-green-200'} color={'text-black'} />,
                title: 'Innovation',
                description: 'Pioneering AI for ecological challenges.',
                bgColor: 'bg-green-200',
              },
              {
                icon: <IconWrapper icon={<Balance />} bgColor={'bg-green-300'} color={'text-black'} />,
                title: 'Integrity',
                description: 'Committed to ethical environmental practices.',
                bgColor: 'bg-green-300',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`relative text-center ${value.bgColor} text-text-dark p-6 rounded-2xl shadow-lg transform transition-transform hover:scale-105`}
              >
                <div className="absolute top-[-10px] right-[-10px] bg-dark text-text-light rounded-full p-2">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">{value.title}</h4>
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
          <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-4 gap-8 text-stone-800">
            <div className="relative p-6 rounded-2xl shadow-lg transform transition-transform col-span-2 bg-stone-700 m-5 mx-auto w-4/5">
              <p className="text-base mb-8 text-white">
                GreenLens was born out of a passion for the environment and a desire to make a difference. Our journey has been one of discovery, innovation, and a commitment to using technology for good.
              </p>
            </div>
            {[
              {
                icon: <Timeline />,
                title: "The Spark",
                description:
                  "It all began in secondary school, driven by a deep concern for the environment and a growing fascination with how AI could be harnessed for good. What started as a simple idea — detecting invasive rhododendron using multispectral imagery — quickly became a full-blown research project. Armed with nothing but determination and curiosity, the journey began.",
                bgColor: "bg-green-100",
              },
              {
                icon: <RocketLaunch />,
                title: "Hitting the Ground Running",
                description:
                  "Over the course of 8 intense months, the GreenLens platform took shape. From data collection and training deep learning models, to mapping real-world environments, every line of code and every field trip brought the project closer to reality. A trip to Killarney National Park — one of Ireland’s most affected regions — helped validate the model in rugged, real-world conditions.",
                bgColor: "bg-green-200",
              },
              {
                icon: <Balance />,
                title: "Recognition & Growth",
                description:
                  "The project made its debut at the BT Young Scientist & Technology Exhibition, earning not just Second Place in its category but also the prestigious EPA Award in 2025. This wasn’t the first recognition — in 2023, a related prototype had already earned the Geological Survey Ireland (GSI) Award. These milestones were more than just trophies — they were proof that young people can lead in environmental innovation.",
                bgColor: "bg-green-300",
              },
              {
                icon: <LocalFlorist />,
                title: "From Prototype to Platform",
                description:
                  "What started as a science fair project has now evolved into a full-featured, mission-driven platform. GreenLens uses AI to turn raw multispectral data into actionable insights for conservationists and land managers. Built from scratch, tested in the wild, and validated through accolades — GreenLens is now geared to scale its impact beyond rhododendron to other invasive species threatening biodiversity.",
                bgColor: "bg-green-400",
              },
            ].map((story, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl shadow-lg transform transition-transform duration-300 row-span-2 hover:scale-105 ${
                  index % 2 === 0 ? "md:col-start-3" : "md:col-start-1"
                } md:row-start-${index + 1} ${story.bgColor}`}
              >
                <div className="absolute top-[-10px] right-[-10px]">
                  <IconWrapper icon={story.icon} bgColor={story.bgColor} color={'text-black'} />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">{story.title}</h4>
                <p className="text-base">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Looking Ahead */}
      <div className="bg-stone-900 py-16">
        <div className="p-6 rounded-2xl shadow-lg container mx-auto px-4 w-3/5 bg-amber-600">
          <h5 className="text-2xl font-semibold mb-4 text-text-light">
            <IconWrapper icon={<RocketLaunch />} bgColor={'bg-stone-900'} color={'text-amber-600'} /> Looking Ahead
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
