import React from 'react';
import pricingPlans from '../config/PricingPlans.json';
import FrostedGlassCard from '../components/Widgets';
import IconWrapper from '../components/IconWrapper';
import { FlowerLotusIcon, RocketLaunchIcon, ScalesIcon, WalletIcon } from '@phosphor-icons/react';
import { PureContentBlock, TitleBlock, HeroBlock } from '../components/Blocks';

function Pricing() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroBlock
        title="Explore our"
        content="versatile range of pricing plans."
        contentColor1="lime-400"
        contentColor2="amber-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/pricing-hero.jpg"
      />

      {/* Pricing Plans Section */}
      <div className="bg-stone-300 dark:bg-stone-900 py-16 px-8">
        <div className="mb-8">
          <TitleBlock
            title="Our Plans"
            icon={<WalletIcon />}
            iconPosition="start"
            bgColor="bg-stone-300 dark:bg-stone-900"
            textColor="text-black dark:text-white"
          />
        <PureContentBlock bgColor="bg-transparent" textColor="text-black dark:text-white" content="Choose the plan that best fits your needs. Whether you're just starting out or need advanced features for large-scale monitoring, we have a solution for you." />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="flex-1 mx-auto min-w-[300px] max-w-[400px]">
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
      <div className="py-16 px-8 bg-stone-300 dark:bg-stone-900">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img
              src="/images/mission.jpg"
              alt="Mission illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1">
            <TitleBlock
              title="Our Mission"
              icon={<RocketLaunchIcon />}
              iconPosition="start"
              bgColor="bg-stone-300 dark:bg-stone-900"
              textColor="text-black dark:text-white"
            />
            <p className="text-base text-stone-700 dark:text-white">
              At GreenLens, our mission is to protect ecosystems through precision-driven, AI-powered environmental
              monitoring. We equip conservationists, landowners, and policymakers with cutting-edge tools to detect and
              combat invasive species efficiently — saving time, resources, and habitats.
            </p>
          </div>
        </div>
      </div>

      {/* Donations Section */}
      <div className="bg-stone-900 py-16">
        <div className="p-6 rounded-2xl shadow-lg container mx-auto px-4 w-3/5 bg-green-500 z-2">
          <h5 className="text-2xl font-semibold mb-4 text-black z-10">
            <IconWrapper icon={<ScalesIcon />} bgColor={'bg-stone-900'} color={'text-green-600'} /> Support Us
          </h5>
          <p className="text-base text-text-dark mb-8">
            Your donations help us continue to improve and provide this software to as many people as possible. Every
            contribution, big or small, makes a difference.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-green-700 py-3 px-6 rounded-lg font-semibold hover:bg-stone-200 ease-in-out duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Pricing;