import { ShieldIcon, MapPinIcon, GlobeIcon, GlobeHemisphereWestIcon, LeafIcon, FlowerLotusIcon, TreeIcon, PlantIcon, WarningIcon, FlowerTulipIcon, FlashlightIcon, CopyrightIcon} from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import { PureContentBlock, TitleBlock, HeroBlock } from '../components/Blocks';
import RhododendronMap from '../components/RhododendronMap';
import SpectrumGraphic from '../components/SpectrumGraphic';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroBlock
        title="Turn your data into"
        content="defense against invasive species."
        contentColor1="lime-400"
        contentColor2="amber-500"
        bgColor1="green-300"
        bgColor2="blue-700"
        imageSrc="/forest.jpg"
      />

      {/* Our Dream Section */}
      <div className="bg-stone-300 dark:bg-gradient-to-t dark:bg-stone-900 py-16 px-8 overflow-hidden relative text-black dark:text-white">
        <div className="flex flex-col lg:flex-row items-center text-center gap-8">
          <div>
          <TitleBlock 
            title="Our Dream"
            bgColor="transparent"
            textColor="text-black dark:text-sky-400"
          />
          <p className="text-base max-w-3xl text-justify">
            At Windhover, we envision a future where nature thrives - untouched, undisturbed, understood. Our mission is to empower conservation efforts through cutting-edge technology, enabling swift action against invasive species and fostering harmony between humanity and the environment.
          </p>
          </div>
          <div
            className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 gap-8 md:gap-4 mx-4 lg:ml-16 relative"
            style={{backgroundImage: "url('/TopographicImages/topo-2.png')"
              , backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"
            }}
          >
            {/* Top-left box */}
            <div
              className="bg-cyan-400/10 bg-opacity-80 pb-15 p-8 rounded-md z row-span-2 row-start-2 backdrop-blur-sm"
            >
              <h6 className="text-lg font-semibold font-mono ld mb-2">In House Models</h6>
              <p className="text-sm">
              Leveraging cutting-edge machine learning techniques to deliver
              unparalleled insights and efficiency.
              </p>
            </div>

            {/* Middle-right box */}
            <div
              className="bg-sky-400/15 bg-opacity-80 pb-15 p-8 rounded-md col-start-2 row-start-1 row-span-2 backdrop-blur-sm"
            >
              <h6 className="text-lg font-semibold font-mono mb-2">Sustainability at its Core</h6>
              <p className="text-sm">
              Our solutions are designed to minimise environmental impact while
              maximising efficiency and results.
              </p>
            </div>

            {/* Bottom-left box */}
            <div
              className="bg-blue-400/20 bg-opacity-80 pb-15 p-8 rounded-md col-start-2 row-start-3 row-span-2 backdrop-blur-sm"
            >
              <h6 className="text-lg font-semibold font-mono mb-2">Empowering Communities</h6>
              <p className="text-sm">
              Harnessing the power of technology to enable communities to
              protect their local ecosystems.
              </p>
            </div>
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
