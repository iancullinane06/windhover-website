import {BanknotesIcon, RocketLaunchIcon, CursorArrowRaysIcon, ArrowPathIcon} from '@heroicons/react/24/solid';
import ShieldIcon from '@mui/icons-material/Shield';
import FrostedGlassCard from '../components/Widgets';
import IconWrapper from '../components/IconWrapper'; // Add this import

const ECO_LYTIX_PRICE = 99.99;

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-between bg-black text-white h-[800px] overflow-hidden px-8 py-24">
        <div
          className="absolute top-0 right-0 bottom-0 w-4/5 bg-cover bg-center z-2"
          style={{
            backgroundImage: "url('/forest.jpg')",
          }}
          role="img"
          aria-label="Forest background image"
        >
          <div className="absolute inset-0 bg-gr-d z-3"></div>
        </div>
        <div className="flex z-30 ml-8 max-w-1/2 flex-row items-center gap-2">
          <div className="w-1/10">
            <IconWrapper 
              icon={<ShieldIcon />} 
              color="text-white" 
              bgColor="bg-green-500" 
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Turning data into defense against invasives
            </h1>
          </div>
        </div>
      </div>

      {/* Our Dream Section */}
      <div className="bg-gradient-to-t from-stone-200 to-black dark:from-stone-900 py-24 overflow-hidden relative">
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-8 md:gap-4 mx-16 relative">
        {/* Top-left box */}
        <div className="col-span-2 row-span-1 lg:col-span-1 bg-green-200 text-black p-8 rounded-lg shadow-lg z-30 transform md:translate-x-8 md:-translate-y-8 w-4/5 lg:w-full">
          <h6 className="text-lg font-semibold mb-2">Models inspired by Google</h6>
          <p className="text-sm">
            Leveraging cutting-edge machine learning techniques to deliver
            unparalleled insights and efficiency.
          </p>
        </div>

        {/* Center text */}
        <div className="dark:text-white col-start-2 col-span-1 row-start-2 row-span-1 flex flex-col items-center justify-center z-20">
          <h4 className="text-3xl font-bold mb-4 text-center">Our Dream</h4>
          <p className="text-base text-center">
            We envision a future where nature thrives - untouched, undisturbed, understood.
          </p>
        </div>

        {/* Middle-right box */}
        <div className="col-start-3 col-span-1 row-span-2 row-start-2 lg:row-span-1 bg-emerald-200 text-black p-8 rounded-lg shadow-lg z-30 transform md:translate-x-8">
          <h6 className="text-lg font-semibold mb-2">Sustainability at its Core</h6>
          <p className="text-sm">
            Our solutions are designed to minimize environmental impact while
            maximizing efficiency and results.
          </p>
        </div>

        {/* Bottom-left box */}
        <div className="col-span-2 row-start-3 row-span-1 lg:col-span-1 bg-teal-200 text-black p-8 rounded-lg shadow-lg z-30 transform md:-translate-x-8 md:translate-y-8">
          <h6 className="text-lg font-semibold mb-2">Empowering Communities</h6>
          <p className="text-sm">
            Providing tools and insights to empower local communities in
            preserving their natural habitats.
          </p>
        </div>

        {/* Decorative paths or icons */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-1/2 h-1/2 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              d="M10 10 C30 30, 70 30, 90 10"
              stroke="gray"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <svg
            className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <circle cx="50" cy="50" r="40" stroke="gray" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
    </div>

      {/* RhodoLens Section */}
      <div className="bg-stone-900 text-white py-24 flex items-center justify-around">
        <div className="max-w-[45%]">
          <h4 className="text-2xl font-bold mb-4">RhodoLens</h4>
          <h6 className="text-lg font-semibold mb-4">
            Revolutionising Environmental Intelligence
          </h6>
          <p className="text-base mb-4">
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
        <FrostedGlassCard
          title="Buy RhodoLens"
          description="Experience precision-led, cost-effective environmental monitoring."
          price={`From $${ECO_LYTIX_PRICE.toFixed(2)}`}
          buttonText="Explore Pricing"
          buttonLink="/pricing"
        />
      </div>

      <div className="bg-stone-900 text-white py-24 flex flex-col items-center text-center">
        <h4 className="text-2xl font-bold mb-4">Why Choose RhodoLens?</h4>
        <h6 className="text-lg font-semibold mb-4">
          Drive Down Costs. Accelerate Insight. Maximise Impact.
        </h6>
        <p className="text-base max-w-3xl mb-8">
          RhodoLens delivers unparalleled efficiency at every stage of your
          workflow. With our proprietary AI-driven analysis, you’ll eliminate
          manual detection delays, drastically reduce time spent in the field,
          and see measurable reductions in operational expenditure.
          <br />
          <br />
          <RocketLaunchIcon className="inline-block h-5 w-5" /> <strong>Faster:</strong> Instant analysis at scale. No bottlenecks,
          no lag.
          <br />
          <BanknotesIcon className="inline-block h-5 w-5" /> <strong>Cheaper:</strong> Reduce monitoring and labor costs by up
          to 60%.
          <br />
          <CursorArrowRaysIcon className="inline-block h-5 w-5" /> <strong>Smarter:</strong> Hyper-precise detection algorithms for
          pinpoint accuracy.
          <br />
          <ArrowPathIcon className="inline-block h-5 w-5"/> <strong>Greener:</strong> Make informed decisions that protect
          ecosystems and save money.
        </p>
        <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
