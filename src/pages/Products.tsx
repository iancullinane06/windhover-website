import { ChartPolarIcon, LineSegmentsIcon, RecycleIcon, RocketLaunchIcon, WalletIcon} from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import FrostedGlassCard from '../components/Widgets';
import Button from '../components/Button';
import { TitleBlock, HeroBlock } from '../components/Blocks';
import pricingPlans from '../config/PricingPlans.json';
import AnalysisGraphic from '../Graphics/AnalysisGraphic';

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
      <div className="overflow-hidden bg-stone-300 px-8 py-20 text-black dark:bg-stone-900 dark:text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-light italic tracking-tight">Our Technology</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-stone-600 dark:text-stone-300">
              Powered by machine learning and advanced image processing, our platform identifies invasive species,
              classifies risk zones, and generates actionable insights in real time.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: <IconWrapper icon={<RecycleIcon />} bgColor="bg-cyan-100" color="text-cyan-600" />, stat: '97%', description: 'Accuracy detecting Rhododendron' },
              { icon: <IconWrapper icon={<LineSegmentsIcon />} bgColor="bg-sky-200" color="text-sky-600" />, stat: '12×', description: 'Faster than manual surveying' },
              { icon: <IconWrapper icon={<RocketLaunchIcon />} bgColor="bg-blue-200" color="text-blue-600" />, stat: '1.2M+', description: 'Acres scanned to date' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-stone-200/80 bg-white/60 p-8 text-center shadow-[0_12px_30px_rgba(28,25,23,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-stone-800/60">
                {item.icon}
                <p className="text-4xl font-bold text-sky-500">{item.stat}</p>
                <p className="text-sm text-stone-600 dark:text-stone-300">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Pipeline graphic */}
          <div className="mt-16 overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-800 p-6 shadow-[0_24px_60px_rgba(28,25,23,0.15)] dark:border-white/10">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Detection pipeline</p>
            <AnalysisGraphic />
          </div>
        </div>
      </div>

      {/* RhodoLens Section */}
      <div className="bg-stone-200 px-8 py-20 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-stone-200/80 bg-stone-50 shadow-[0_24px_60px_rgba(28,25,23,0.10)] dark:border-white/10 dark:bg-stone-800">
            <div className="flex flex-col gap-0 lg:flex-row">

              {/* Image comparison panel */}
              <div className="relative flex min-h-[22rem] flex-1 overflow-hidden lg:min-h-[28rem]">
                <div className="absolute inset-0 flex">
                  <img src="/VisibleImage.png" alt="Visible light survey" className="h-full w-1/2 object-cover" />
                  <img src="/IrImage.png" alt="Infrared survey" className="h-full w-1/2 object-cover" />
                </div>
                <div className="absolute inset-0 flex">
                  <div className="flex w-1/2 items-end p-4">
                    <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-white backdrop-blur-sm">Visible</span>
                  </div>
                  <div className="flex w-1/2 items-end justify-end p-4">
                    <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] text-white backdrop-blur-sm">Infrared</span>
                  </div>
                </div>
                {/* Centre divider line */}
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-px bg-white/60" />
              </div>

              {/* Text + CTA */}
              <div className="flex flex-1 flex-col justify-between gap-8 p-10 lg:p-14">
                <div>
                  <TitleBlock
                    title="RhodoLens"
                    bgColor="bg-transparent"
                    textColor="text-stone-900 dark:text-sky-400"
                  />
                  <p className="mt-5 leading-7 text-stone-600 dark:text-stone-300">
                    RhodoLens is more than a tool — it's your strategic partner in the battle against invasive species.
                    Designed for precision, speed, and scalability, our software empowers land managers, ecologists, and
                    environmental agencies to make data-driven decisions faster than ever before.
                  </p>
                  <p className="mt-4 leading-7 text-stone-600 dark:text-stone-300">
                    Harness the power of machine learning to reduce operational overheads, optimise site visits, and
                    eliminate guesswork.
                  </p>
                </div>
                <FrostedGlassCard
                  title="Buy RhodoLens"
                  description="Experience precision-led, cost-effective environmental monitoring."
                  price={`From ${ECO_LYTIX_PRICE}`}
                  buttonText="Explore Pricing"
                  buttonLink="/pricing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose RhodoLens */}
      <div className="relative overflow-hidden bg-stone-900 px-8 py-24 text-white">
        {/* Drone shot background */}
        <div className="pointer-events-none absolute inset-0">
          <img src="/Drone-shot.webp" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/60" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-light italic tracking-tight">Why Choose RhodoLens?</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-400">
              Designed to deliver precision, speed, and cost-effectiveness — empowering data-driven decisions that protect ecosystems and reduce operational costs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              { icon: <RocketLaunchIcon size={24} />, color: 'text-sky-300 border-sky-300/30 bg-sky-500/10', label: 'Faster', detail: 'Instant analysis at scale with no bottlenecks or lag.' },
              { icon: <WalletIcon size={24} />, color: 'text-amber-300 border-amber-300/30 bg-amber-500/10', label: 'Cheaper', detail: 'Reduce monitoring and labour costs by up to 60%.' },
              { icon: <ChartPolarIcon size={24} />, color: 'text-green-300 border-green-300/30 bg-green-500/10', label: 'Smarter', detail: 'Hyper-precise detection algorithms for pinpoint accuracy.' },
              { icon: <RecycleIcon size={24} />, color: 'text-teal-300 border-teal-300/30 bg-teal-500/10', label: 'Greener', detail: 'Make informed decisions that protect native biodiversity.' },
            ].map((item) => (
              <div key={item.label} className={`flex items-start gap-5 rounded-[1.5rem] border p-7 backdrop-blur-sm ${item.color}`}>
                <span className="mt-0.5 shrink-0">{item.icon}</span>
                <div>
                  <p className="mb-1 font-mono text-sm font-semibold uppercase tracking-[0.14em]">{item.label}</p>
                  <p className="leading-7 text-stone-300">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button text="Learn more" link="/rhodolens" />
            <a href="/pricing" className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(14,165,233,0.30)] transition hover:bg-sky-400">
              Explore Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
