import { RocketLaunch, Payments, AdjustRounded, Compost } from '@mui/icons-material';
import React from 'react';
import { HeroBlock } from '../components/Blocks';

function Rhodolens() {
  return (
    <div className="bg-stone-100 dark:bg-stone-900 text-black dark:text-white">
      {/* Hero Section */}
      <HeroBlock
        title="RhodoLens"
        content="Revolutionising environmental intelligence with precision, speed, and scalability."
        contentColor1="green-500"
        contentColor2="sky-500"
        bgColor1="transparent"
        bgColor2="stone-900"
        imageSrc="/coding.jpg"
      />

      {/* Features Section */}
      <div className="py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 grid-rows-4 gap-8">
            <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg text-center">
              <RocketLaunch className="h-12 w-12 text-sky-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Faster</h3>
              <p className="text-sm">
                Instant analysis at scale with no bottlenecks or lag.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg text-center">
              <Payments className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cheaper</h3>
              <p className="text-sm">
                Reduce monitoring and labor costs by up to 60%.
              </p>
            </div>
            <div className="flex flex-row">
              <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg text-center">
              <AdjustRounded className="h-12 w-12 text-teal-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smarter</h3>
              <p className="text-sm">
                Hyper-precise detection algorithms for pinpoint accuracy.
              </p>
              </div>
              <div>
              <img src="/path/to/smarter-image.jpg" alt="Smarter" className="mx-auto mt-4"/>
              </div>
            </div>
            <div className="bg-white dark:bg-stone-800 p-6 rounded-lg shadow-lg text-center">
              <Compost className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Greener</h3>
              <p className="text-sm">
                Make informed decisions that protect biodiversity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-stone-200 dark:bg-stone-800 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-stone-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Land Management</h3>
              <p className="text-sm">
                Optimize site visits and reduce operational overheads with data-driven insights.
              </p>
            </div>
            <div className="bg-white dark:bg-stone-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Ecological Research</h3>
              <p className="text-sm">
                Leverage machine learning to safeguard biodiversity and ensure regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white py-16 px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Experience precision-led, cost-effective environmental monitoring with RhodoLens.
          </p>
          <a
            href="/pricing"
            className="inline-block bg-white text-green-500 py-3 px-6 rounded-lg text-lg font-semibold"
          >
            Explore Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

export default Rhodolens;