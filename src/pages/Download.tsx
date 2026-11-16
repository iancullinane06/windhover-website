import { RocketLaunchIcon, ScalesIcon, WalletIcon } from '@phosphor-icons/react';
import { HeroBlock, TitleBlock } from '../components/Blocks';

function Download() {
  return (
    <div className="overflow-hidden">
      <HeroBlock
        title={"Free & Open-source"}
        content="Please consider supporting us"
        contentColor1="green-500"
        contentColor2="sky-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/pricing-hero.jpg"
      />

      <section className="bg-stone-200 px-6 py-20 dark:bg-stone-900 md:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <TitleBlock
              title="Download RhodoLens"
              icon={<RocketLaunchIcon />}
              iconPosition="start"
              bgColor="bg-transparent"
              textColor="text-black dark:text-white"
            />
            <p className="mt-5 leading-7 text-stone-700 dark:text-stone-200">
              We’re moving RhodoLens to a free, open-source model. There are no subscriptions or paid tiers.
              Download links will be posted here when the first public release is ready.
            </p>
          </div>

          <div className="rounded-[2rem] border border-stone-200/80 bg-stone-50 p-8 shadow-[0_24px_60px_rgba(28,25,23,0.10)] dark:border-white/10 dark:bg-stone-800 md:p-12">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-green-700 dark:text-green-300">
                  Free and open source
                </span>
                <h2 className="mt-5 font-serif text-3xl font-light italic tracking-tight text-stone-900 dark:text-white">
                  RhodoLens
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-stone-600 dark:text-stone-300">
                  Environmental monitoring software for invasive species detection. The first public download is
                  being prepared.
                </p>
              </div>
              <span
                aria-disabled="true"
                className="inline-flex shrink-0 cursor-not-allowed rounded-full bg-stone-300 px-8 py-3.5 text-sm font-semibold text-stone-600 dark:bg-stone-700 dark:text-stone-300"
              >
                Download coming soon
              </span>
            </div>
            <a
              href="/contact-us"
              className="mt-8 inline-block text-sm font-semibold text-sky-700 underline decoration-sky-500/40 underline-offset-4 transition hover:text-sky-500 dark:text-sky-300"
            >
              Contact us about access
            </a>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-8 py-20 dark:bg-stone-950">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 dark:border-white/10 dark:bg-stone-900">
            <ScalesIcon size={32} className="text-sky-600 dark:text-sky-300" />
            <h2 className="mt-5 font-serif text-2xl font-light italic text-stone-900 dark:text-white">
              Open tools, shared progress
            </h2>
            <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
              We believe conservation technology should be accessible. RhodoLens is moving away from paid plans so
              people can use the software without a subscription.
            </p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 dark:border-white/10 dark:bg-stone-900">
            <WalletIcon size={32} className="text-green-600 dark:text-green-300" />
            <h2 className="mt-5 font-serif text-2xl font-light italic text-stone-900 dark:text-white">
              Support, if you can
            </h2>
            <p className="mt-3 leading-7 text-stone-600 dark:text-stone-300">
              Donations will be optional. Contributions will help fund ongoing development and keep the software
              accessible to conservationists and communities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#1c1917_0%,#0c0a09_100%)] px-8 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-[0_30px_70px_rgba(0,0,0,0.36)] backdrop-blur-sm">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
              <ScalesIcon size={14} /> Community supported
            </span>
            <h2 className="mt-4 font-serif text-3xl font-light italic tracking-tight text-white">
              Help us protect what matters
            </h2>
            <p className="mx-auto mt-5 max-w-md leading-7 text-stone-400">
              Use RhodoLens for free. If it helps your work, an optional donation can support future improvements.
            </p>
            <span
              aria-disabled="true"
              className="mt-8 inline-flex cursor-not-allowed rounded-full bg-stone-700 px-8 py-3.5 text-sm font-semibold text-stone-300"
            >
              Donation link coming soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Download;
