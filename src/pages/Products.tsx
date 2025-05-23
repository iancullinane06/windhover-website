import { RocketLaunch, Payments, AdjustRounded, Compost } from '@mui/icons-material';
import FrostedGlassCard from '../components/Widgets';

function Products() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-dark text-white py-24 px-8 flex items-center justify-between relative overflow-hidden h-[600px]">
        <div className="z-30 max-w-[50%] ml-8">
          <h1 className="text-4xl font-bold mb-4">Products</h1>
          <p className="text-lg mb-6">
            Our software is designed to help as many people as possible. Your support through donations and priced plans ensures we can keep improving and serving our community.
          </p>
          <a
            href="/pricing"
            className="bg-primary text-white py-3 px-6 rounded-lg text-lg"
          >
            Explore Pricing
          </a>
        </div>
        <div
          className="absolute top-0 right-0 bottom-0 w-[80%] bg-cover bg-center z-10"
          style={{
            backgroundImage: "url(/forest.jpg)",
          }}
          role="img"
          aria-label="Forest background image"
        >
          <div className="absolute inset-0 bg-gr-d z-3"></div>
        </div>
      </div>

      {/* Our Technology with Stats */}
      <div className="bg-teal-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
          <p className="text-base mb-8">
            Powered by machine learning and advanced image processing, our platform can identify invasive species from drone and satellite imagery, classify risk zones, and generate vector shapefiles in real time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">97%</h3>
              <p className="text-base">Accuracy detecting Rhododendron</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">12x</h3>
              <p className="text-base">Faster than manual surveying</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-md">
              <h3 className="text-4xl font-bold text-primary mb-2">1.2M+</h3>
              <p className="text-base">Acres scanned to date</p>
            </div>
          </div>
        </div>
      </div>

      {/* RhodoLens Section */}
      <div className="bg-gray-300 py-24 px-8 flex items-center justify-around min-h-[500px]">
        <div className="max-w-[45%]">
          <h2 className="text-3xl font-bold mb-4">RhodoLens</h2>
          <h3 className="text-xl font-semibold mb-4">
            Revolutionising Environmental Intelligence
          </h3>
          <p className="text-base mb-4">
            RhodoLens is more than a tool — it's your strategic partner in the battle against invasive species. Designed for precision, speed, and scalability, our software empowers land managers, ecologists, and environmental agencies to make data-driven decisions faster than ever before.
          </p>
          <p className="text-base">
            Harness the power of machine learning to reduce operational overheads, optimise site visits, and eliminate guesswork. Whether you're safeguarding biodiversity or ensuring regulatory compliance, RhodoLens delivers measurable results.
          </p>
        </div>
        <FrostedGlassCard
          title="Buy RhodoLens"
          description="Experience precision-led, cost-effective environmental monitoring."
          price="From $99"
          buttonText="Explore Pricing"
          buttonLink="/pricing"
        />
      </div>

      {/* Why Choose RhodoLens */}
      <div className="bg-stone-900 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Why Choose RhodoLens?</h2>
            <p className="text-lg">
              RhodoLens is your trusted partner in environmental intelligence. Designed to deliver precision, speed, and cost-effectiveness, it empowers you to make data-driven decisions that protect ecosystems and reduce operational costs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <RocketLaunch className="h-6 w-6 text-primary mr-4" />
                <span>
                  <strong>Faster:</strong> Instant analysis at scale with no bottlenecks or lag.
                </span>
              </li>
              <li className="flex items-center">
                <Payments className="h-6 w-6 text-primary mr-4" />
                <span>
                  <strong>Cheaper:</strong> Reduce monitoring and labor costs by up to 60%.
                </span>
              </li>
              <li className="flex items-center">
                <AdjustRounded className="h-6 w-6 text-primary mr-4" />
                <span>
                  <strong>Smarter:</strong> Hyper-precise detection algorithms for pinpoint accuracy.
                </span>
              </li>
              <li className="flex items-center">
                <Compost className="h-6 w-6 text-primary mr-4" />
                <span>
                  <strong>Greener:</strong> Make informed decisions that protect biodiversity.
                </span>
              </li>
            </ul>
            <a
              href="/learn-more"
              className="inline-block bg-primary text-white py-3 px-6 rounded-lg text-lg mt-6"
            >
              Learn More
            </a>
          </div>
          {/* Image Content */}
          <div className="mt-16 lg:mt-0">
            <img
              src="/technology.png"
              alt="Technology illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
