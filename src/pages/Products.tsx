import { ChartPolarIcon, LineSegmentsIcon, RecycleIcon, RocketLaunchIcon, WalletIcon} from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import FrostedGlassCard from '../components/Widgets';
import Button from '../components/Button';
import { TitleBlock, HeroBlock } from '../components/Blocks';
import pricingPlans from '../config/PricingPlans.json';

const ECO_LYTIX_PRICE = pricingPlans.find(plan => plan.title === 'Professional')?.price || 0;

function Products() {
  return (
    <div>
      {/* Hero Section */}
      <HeroBlock
        title="Explore our"
        content="versatile range of products."
        contentColor1="sky-500"
        contentColor2="green-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/IrImage.png"
      />

      {/* Our Technology Section */}
      <div className="py-16 px-8 bg-stone-300 dark:bg-stone-900 text-black dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-4 md:grid-rows-2 gap-8"
              style={{backgroundImage: "url('/TopographicImages/topo-3.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right"
        }}>
          <div className="md:col-span-4 md:col-start-3 row-span-1">
            <h2 className="text-4xl font-bold text-center mb-8">Our Technology</h2>
            <p className="text-base text-center mb-8 max-w-3xl mx-auto">
              Powered by machine learning and advanced image processing, our platform identifies invasive species, classifies risk zones, and generates actionable insights in real time.
            </p>
          </div>
          {[
            {
              icon: <IconWrapper icon={<RecycleIcon />} bgColor="bg-cyan-100" color="text-cyan-600" />,
              stat: '97%',
              description: 'Accuracy detecting Rhododendron',
              grid: 'md:col-start-1 md:row-start-1 col-span-2',
            },
            {
              icon: <IconWrapper icon={<LineSegmentsIcon />} bgColor="bg-sky-200" color="text-sky-600" />,
              stat: '12x',
              description: 'Faster than manual surveying',
              grid: 'md:col-start-2 md:row-start-2 col-span-2',
            },
            {
              icon: <IconWrapper icon={<RocketLaunchIcon />} bgColor="bg-blue-200" color="text-blue-600" />,
              stat: '1.2M+',
              description: 'Acres scanned to date',
              grid: 'md:col-start-4 md:row-start-2 col-span-2',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-white/30 dark:bg-stone-800/60 rounded-xl flex flex-row justify-center md:justify-start items-center gap-4 backdrop-blur-sm shadow-lg text-center ${item.grid}`}
            >
              <div className="flex flex-col items-center -mt-16 sm:ml-4 lg:ml-12 xl:ml-16">
                <div className="mb-4 scale-125">{item.icon}</div>
                <h3 className="text-4xl font-bold text-primary mb-2">{item.stat}</h3>
              </div>
              <p className="text-base text-black dark:text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RhodoLens Section */}
      <div className="bg-stone-300 dark:bg-stone-900 dark:text-white py-16 px-8 flex items-center justify-between md:flex-row flex-col">
        <div className="md:max-w-[45%]">
          <TitleBlock 
            title="RhodoLens"
            bgColor="transparent"
            textColor="text-stone-700 dark:text-sky-400"
          />
          <p className="text-base mb-2">
            RhodoLens is more than a tool — it's your strategic partner in the
            battle against invasive species. Designed for precision, speed, and
            scalability, our software empowers land managers, ecologists, and
            environmental agencies to make data-driven decisions faster than
            ever before.
          </p>
          <p className="text-base">
            Harness the power of machine learning to reduce operational
            overheads, optimise site visits, and eliminate guesswork. Whether
            you're safeguarding biodiversity or ensuring regulatory compliance,
            RhodoLens delivers measurable results.
          </p>
        </div>

        {/* To Go */}
        <FrostedGlassCard
          title="Buy RhodoLens"
          description="Experience precision-led, cost-effective environmental monitoring."
          price={`From ${ECO_LYTIX_PRICE}`}
          buttonText="Explore Pricing"
          buttonLink="/pricing"
        />
      </div>

      {/* Why Choose RhodoLens */}
      <div className="bg-stone-900 text-white py-24 -gap-5 px-8">
        <div className="lg:w-1/2 mx-auto flex items-center flex-col">
          {/* Text Content */}
          <div className="space-y-6 bg-stone-800 p-16 rounded-xl pr-30 z-2">
            <h2 className="text-4xl font-bold">Why Choose RhodoLens?</h2>
            <p className="text-lg text-justify">
              RhodoLens is your trusted partner in environmental intelligence. Designed to deliver precision, speed, and cost-effectiveness, it empowers you to make data-driven decisions that protect ecosystems and reduce operational costs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <RocketLaunchIcon className="text-sky-300 mr-4" />
                <span>
                  <strong className="text-sky-300">Faster:</strong> Instant analysis at scale with no bottlenecks or lag.
                </span>
              </li>
              <li className="flex items-center">
                <WalletIcon className="text-sky-400 mr-4" />
                <span>
                  <strong className="text-sky-400">Cheaper:</strong> Reduce monitoring and labor costs by up to 60%.
                </span>
              </li>
              <li className="flex items-center">
                <ChartPolarIcon className="text-sky-500 mr-4" />
                <span>
                  <strong className="text-sky-500">Smarter:</strong> Hyper-precise detection algorithms for pinpoint accuracy.
                </span>
              </li>
              <li className="flex items-center">
                <RecycleIcon className="text-sky-600 mr-4" />
                <span>
                  <strong className="text-sky-600">Greener:</strong> Make informed decisions that protect biodiversity.
                </span>
              </li>
            </ul>
            <Button text="Learn more" link="/rhodolens" />
          </div>
          <div className="mt-16 lg:-mt-4 bg-black p-8 w-4/5 rounded-xl lg:pt-12">
            <div className="flex justify-center flex-col items-center gap-4">
              <h2 className="text-5xl font-serif">Buy Now</h2>
              <Button text="Explore Pricing" link="/pricing" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
