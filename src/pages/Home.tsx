import { ShieldIcon, MapPinIcon, GlobeIcon, GlobeHemisphereWestIcon, LeafIcon, FlowerLotusIcon, TreeIcon, PlantIcon, WarningIcon, FlowerTulipIcon, FlashlightIcon, CopyrightIcon, DroneIcon, MicroscopeIcon} from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import { PureContentBlock, TitleBlock, HeroBlock } from '../components/Blocks';
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

      {/* Our Dream Section */}
      <div className="bg-stone-300 dark:bg-gradient-to-t dark:bg-stone-900 py-16 overflow-hidden relative text-black dark:text-white">
        <div className="flex flex-col items-start">
          <div className="p-8 shadow-lg">
          <TitleBlock
            title="The Process"
            bgColor="bg-transparent"
            textColor="text-black dark:text-white"
            icon={<GlobeIcon />}
          />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-8 text-stone-900 font-bold font-mono text-xl">
            <div className="h-30 rounded-r-full grow-1 flex items-center justify-end bg-gradient-to-r from-pink-300 to-red-400/50 backdrop-blur-sm z-2">
            <p className="mr-16">Detection</p><div className="mr-8"><IconWrapper icon={<MicroscopeIcon />} color="text-stone-700" bgColor="transparent" borderColour="border-stone-700"/></div></div>
            <div className="h-30 rounded-full grow-2 flex items-center justify-center bg-gradient-to-r from-violet-300 to-sky-400 -ml-36 z-1">Management</div>
            <div className="h-30 rounded-l-full grow-1 flex items-center justify-center bg-gradient-to-r from-green-300 to-lime-400">Eradication</div>
          </div>
          <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 mt-8 px-4md:px-16 mx-auto text-justify">
          <div className="row-start-1 md:text-right md:px-8">
            <p className="text-sky-500 font-mono font-bold text-xl mb-2">Advanced AI-Powered Detection</p>
            <p className="text-black dark:text-white">Our proprietary machine learning algorithms analyse vast datasets to identify invasive species with unparalleled accuracy and speed.</p>
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
            <p className="text-black dark:text-white">Stay ahead of invasive threats with our real-time monitoring system that provides instant alerts, enabling swift action to protect native ecosystems.</p>
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
            <p className="text-black dark:text-white">Our intuitive dashboards and mapping tools transform complex data into actionable insights, empowering conservationists and policymakers to make informed decisions.</p>
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
        <div className="flex flex-col md:flex-row mx-auto space-around items-center">
          <div className="bg-stone-700 flex-1 p-6 md:pr-10 rounded-lg shadow-lg -md:mr-4">
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
          <div className="-mt-4 md:mt-8 flex-2 w-full md:w-auto">
            <RhododendronMap />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
