import React from 'react';
import pricingPlans from '../config/PricingPlans.json';
import FrostedGlassCard from '../components/Widgets';
import { RocketLaunchIcon, ScalesIcon, WalletIcon } from '@phosphor-icons/react';
import { PureContentBlock, TitleBlock, HeroBlock } from '../components/Blocks';

function Pricing() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroBlock
        title="Explore our"
        content="versatile range of pricing plans."
        contentColor1="green-500"
        contentColor2="sky-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/pricing-hero.jpg"
      />

      {/* Pricing Plans Section */}
      <div className="bg-stone-200 dark:bg-stone-900 py-20 px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <TitleBlock
            title="Pricing plans"
            icon={<WalletIcon />}
            iconPosition="start"
            bgColor="bg-transparent"
            textColor="text-black dark:text-white"
          />
          <PureContentBlock
            bgColor="bg-transparent"
            textColor="text-stone-700 dark:text-stone-200"
            content="Choose the right plan for your needs, from early exploration through to large-scale monitoring and reporting."
          />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 xl:gap-6 place-items-center items-start">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-full">
              <FrostedGlassCard
                title={plan.title}
                description={plan.description}
                price={plan.price}
                buttonText={plan.buttonText}
                buttonLink={plan.buttonLink}
                badge={plan.badge}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-stone-200 px-8 py-20 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-stone-50 shadow-[0_24px_60px_rgba(28,25,23,0.10)] dark:border-white/10 dark:bg-stone-800">
            <div className="pointer-events-none absolute h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.10),transparent_40%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.12),transparent_38%)]" />
            <div className="relative flex flex-col gap-0 md:flex-row">
              {/* Accent panel */}
              <div className="flex min-h-[16rem] flex-1 items-center justify-center bg-gradient-to-br from-green-200 via-teal-200 to-sky-300 p-12 dark:from-emerald-800 dark:via-teal-800 dark:to-sky-900">
                <RocketLaunchIcon size={80} className="text-white/70" />
              </div>
              {/* Content */}
              <div className="flex flex-1 flex-col justify-center gap-6 p-10 md:p-14">
                <TitleBlock
                  title="Our Mission"
                  icon={<RocketLaunchIcon />}
                  iconPosition="start"
                  bgColor="bg-transparent"
                  textColor="text-stone-900 dark:text-white"
                />
                <p className="leading-7 text-pretty text-stone-600 dark:text-stone-300">
                  At Windhover, our mission is to protect ecosystems through precision-driven, AI-powered environmental
                  monitoring. We equip conservationists, landowners, and policymakers with cutting-edge tools to detect
                  and combat invasive species efficiently — saving time, resources, and habitats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="bg-[linear-gradient(180deg,#1c1917_0%,#0c0a09_100%)] px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_70px_rgba(0,0,0,0.36)] backdrop-blur-sm">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
              <ScalesIcon size={14} /> Support Us
            </span>
            <h3 className="mt-4 font-serif text-3xl font-light italic tracking-tight text-white">
              Help us protect what matters
            </h3>
            <p className="mx-auto mt-5 max-w-md leading-7 text-stone-400">
              Your support helps us continue improving the platform and make it accessible to as many conservationists
              as possible. Every contribution, big or small, makes a difference.
            </p>
            <a
              href="/donate"
              className="mt-8 inline-block rounded-full bg-green-500 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(34,197,94,0.30)] transition hover:bg-green-400"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;