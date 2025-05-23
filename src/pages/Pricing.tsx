import React from 'react';
import pricingPlans from '../config/PricingPlans.json';
import FrostedGlassCard from '../components/Widgets';

function Pricing() {
  return (
    <div>
      {/* Banner Section */}
      <div className="bg-black text-white py-16 text-center flex flex-col justify-center items-center gap-4 h-[400px]">
        <h1 className="text-4xl font-bold">Pricing Plans</h1>
        <p className="text-lg max-w-3xl">
          Our software is designed to help as many people as possible. Your support through donations and priced plans
          ensures we can keep improving and serving our community.
        </p>
      </div>

      {/* Pricing Plans Section */}
      <div className="bg-white py-16 px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Pricing</h2>
          <p className="text-gray-700">Explore our competitive pricing plans tailored to your needs.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex-1 min-w-[300px] max-w-[400px]">
              <FrostedGlassCard
                title={plan.title}
                description={plan.description}
                price={plan.price}
                buttonText={plan.buttonText}
                buttonLink={plan.buttonLink}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img
              src="/images/mission.jpg"
              alt="Mission illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              At GreenLens, our mission is to protect ecosystems through precision-driven, AI-powered environmental
              monitoring. We equip conservationists, landowners, and policymakers with cutting-edge tools to detect and
              combat invasive species efficiently — saving time, resources, and habitats.
            </p>
          </div>
        </div>
      </div>

      {/* Donations Section */}
      <div className="bg-gradient-to-b from-green-400 to-green-700 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Support Us with a Donation</h3>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Your donations help us continue to improve and provide this software to as many people as possible. Every
          contribution, big or small, makes a difference.
        </p>
        <a
          href="/donate"
          className="inline-block bg-white text-green-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Donate Now
        </a>
      </div>
    </div>
  );
}

export default Pricing;