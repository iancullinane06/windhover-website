import { ShieldIcon, MapPinIcon, GlobeIcon, GlobeHemisphereWestIcon, LeafIcon, FlowerLotusIcon, TreeIcon, PlantIcon, WarningIcon, FlowerTulipIcon, FlashlightIcon, CopyrightIcon, DroneIcon, MicroscopeIcon, PaperclipIcon } from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import { PureContentBlock, TitleBlock, HeroBlock, SpeciesInfoBlock } from '../components/Blocks';
import RhododendronMap from '../Graphics/RhododendronMap';
import SpectrumGraphic from '../Graphics/SpectrumGraphic';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroBlock
        title="Turn your data into"
        content="defense against invasive species."
        contentColor1="green-500"
        contentColor2="amber-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/forest.jpg"
      />

      {/* What is Rhododendron Section */}
      <div className="relative bg-stone-300 dark:bg-stone-900 py-16 px-8 pb-36 md:pb-24">
        <SpeciesInfoBlock
          className="w-full md:w-4/5 lg:w-1/2 md:mx-auto"
          title="Rhododendron"
          icon={<IconWrapper icon={<FlowerLotusIcon size={48} />} color="text-pink-400" bgColor="transparent" borderColour="border-pink-400"/>}
          pronunciation="/ˌroʊdə'dɛndrən/"
          scientificName="Rhododendron ponticum"
          description="Rhododendron ponticum is an evergreen shrub with broad dark-green leaves and clusters of purple flowers. In many woodlands it spreads aggressively, forming dense shade that prevents native plants from growing, degrades habitat for wildlife, and can alter soil conditions over time. Rhododendron also poisons the soil beneath it, making it difficult for native species to re-establish even after removal. It is a major threat to biodiversity in affected areas and a key target for conservation efforts."
        />

        <div className="absolute bottom-0 right-2 md:right-0 lg:right-48 xl:right-64 z-20">
          <div className="relative w-36 sm:w-40 md:w-44 rotate-[30deg] rounded-[6px] border border-stone-200 bg-white p-2 pb-7 shadow-2xl dark:border-stone-500 dark:bg-stone-100">
            <img
              src="/Rhododendron-headshot.png"
              alt="Rhododendron infestation in woodland"
              className="w-full h-24 sm:h-28 md:h-32 rounded-[3px] object-cover"
            />
            <p className="mt-2 text-[10px] sm:text-xs font-mono text-stone-700">
              Rhododendron ponticum
            </p>
          </div>

          <div className="absolute -top-5 right-8 rotate-[-16deg] text-stone-500 dark:text-stone-300">
            <PaperclipIcon size={50} weight="duotone" color="var(--color-stone-600)" />
          </div>
        </div>
      </div>

      {/* The Process Section */}
      <div className="bg-stone-300 dark:bg-gradient-to-t dark:bg-stone-900 py-16 overflow-hidden relative text-black dark:text-white">
        <div className="flex flex-col md:items-start">
          <div className="p-8">
          <TitleBlock
            title="The Process"
            bgColor="bg-transparent"
            textColor="text-black dark:text-white"
            icon={<GlobeIcon />}
          />
          </div>
          <div className="w-full flex flex-col gap-8 text-xl font-bold font-mono text-stone-900 md:flex-row">
            <div className="z-2 flex h-30 grow-1 items-center justify-end rounded-r-full bg-gradient-to-r from-pink-300 to-red-400 shadow-[0_16px_35px_rgba(244,63,94,0.18)] backdrop-blur-sm md:to-red-400/50">
            <p className="mr-16">Detection</p><div className="mr-8"><IconWrapper icon={<MicroscopeIcon />} color="text-stone-700" bgColor="transparent" borderColour="border-stone-700"/></div></div>
            <div className="z-1 flex h-30 grow-2 items-center justify-center rounded-full bg-gradient-to-r from-violet-300 to-sky-400 shadow-[0_16px_35px_rgba(14,165,233,0.18)]">Management</div>
            <div className="flex h-30 grow-1 items-center justify-center rounded-l-full bg-gradient-to-r from-green-300 to-lime-400 shadow-[0_16px_35px_rgba(132,204,22,0.2)]">Eradication</div>
          </div>
          <div className="max-w-2xl">
            <PureContentBlock
            content="To eradicate invasive species, first we must detect them."
            bgColor="bg-transparent" />
          </div>
        </div>
      </div>

      {/* Value Proposition*/}
      <div className="bg-stone-300 dark:bg-stone-900 py-16 px-8">
        <TitleBlock
          title="Why Windhover?"
          bgColor="bg-transparent"
          textColor="text-black dark:text-sky-400"
          icon={<LeafIcon />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 mt-8 px-4 md:px-16 mx-auto">
          <div className="row-start-1 md:text-right md:px-8">
            <p className="text-sky-500 font-mono font-bold text-xl mb-2">Advanced AI-Powered Detection</p>
            <p className="text-black dark:text-white text-justify">Our proprietary machine learning algorithms analyse vast datasets to identify invasive species with unparalleled accuracy and speed.</p>
          </div>
          <div className="row-start-2 md:row-start-1 bg-stone-800 rounded-xl">
            <div className="grid grid-flow-col place-content-around content-center h-full">
              <FlashlightIcon size="48px" color="var(--color-sky-500)" className="my-auto rotate-90" />
              <div className="h-2 w-20 sm:w-60 md:w-40 lg:w-60 xl:w-80 rounded-full bg-gradient-to-r mt-5.25 from-sky-500 to-green-500" />
              <PlantIcon size="48px" color="var(--color-green-500)" />
            </div>
          </div>
          <div className="row-start-3 md:row-start-2 md:col-start-2 md:px-8">
            <p className="text-amber-500 font-mono font-bold text-xl text-shadow-2xl mb-2">Real-Time Monitoring and Alerts</p>
            <p className="text-black dark:text-white text-justify">Stay ahead of invasive threats with our real-time monitoring system that provides instant alerts, enabling swift action to protect native ecosystems.</p>
          </div>
          <div className="row-start-4 md:row-start-2 bg-stone-800 rounded-xl">
            <div className="grid grid-flow-col place-content-around content-center h-full">
              <PlantIcon size="48px" color="var(--color-green-500)" />
              <div className="h-2 w-20 sm:w-60 md:w-40 lg:w-60 xl:w-80 rounded-full bg-gradient-to-r mt-5.25 from-green-500 to-amber-500" />
              <WarningIcon size="48px" color="var(--color-amber-500)" />
            </div>
          </div>
          <div className="row-start-5 md:row-start-3 md:text-right md:px-8">
            <p className="text-rose-500 font-mono font-bold text-xl mb-2">Comprehensive Data Visualisation</p>
            <p className="text-black dark:text-white text-justify">Our intuitive dashboards and mapping tools transform complex data into actionable insights, empowering conservationists and policymakers to make informed decisions.</p>
          </div>
          <div className="row-start-6 md:row-start-3 rounded-xl bg-stone-800">
            <div className="flex flex-col justify-center h-full">
              <div className="grid grid-flow-col place-content-around content-end">
                <PlantIcon size="36px" color="var(--color-rose-500)" className="mt-9" />
                <TreeIcon size="72px" color="var(--color-green-500)" />
              </div>
              <div className="h-2 rounded-full bg-gradient-to-r from-rose-500 to-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-300 dark:bg-stone-900 py-16 px-8 text-center">
        <SpectrumGraphic className="w-4/5 m-auto" />
        <p className="text-center text-stone-700 dark:text-white font-mono mt-2" >Frequency</p>
      </div>

      {/* Rhododendron Map Section */}
      <div className="bg-stone-300 dark:bg-stone-900 py-16 px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row">
          <div className="flex-1 rounded-[2rem] border border-stone-200/70 bg-stone-800 p-6 shadow-[0_24px_60px_rgba(28,25,23,0.2)] dark:border-white/10 dark:bg-stone-800/90 md:pr-10">
            <TitleBlock
              title="Rhododendron Spread"
              bgColor="bg-transparent"
              textColor="text-white dark:text-sky-400"
              icon={<GlobeHemisphereWestIcon />}
            />
            <PureContentBlock
              content="Rhododendron ponticum, an invasive species in Ireland, poses significant threats to native biodiversity and ecosystem health. Our map visualises its spread, aiding conservation efforts to manage and mitigate its impact."
              textColor="text-white"
              bgColor='bg-transparent'
            />
            <div className="text-sm text-left mt-4 text-gray-300 dark:text-shadow-sky-600 flex flex-row gap-1">
              <CopyrightIcon /> Data Source: National Biodiversity Data Centre
            </div>
          </div>
          <div className="w-full md:mt-8 md:w-auto flex-2">
            <RhododendronMap />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
