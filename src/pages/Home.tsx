import { ShieldIcon, MapPinIcon, GlobeIcon, GlobeHemisphereWestIcon, LeafIcon, FlowerLotusIcon, TreeIcon, PlantIcon, WarningIcon, FlowerTulipIcon, FlashlightIcon} from '@phosphor-icons/react';
import IconWrapper from '../components/IconWrapper';
import { PureContentBlock, TitleBlock } from '../components/Blocks';
import RhododendronMap from '../components/RhododendronMap';
import SpectrumGraphic from '../components/SpectrumGraphic';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-between bg-black text-white h-screen overflow-hidden py-24">
        <div
          className="absolute top-0 right-0 bottom-0 w-full bg-cover bg-center z-2"
          style={{
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(180deg, ${
              window.matchMedia('(prefers-color-scheme: dark)').matches ? '#FFF0 0%, var(--color-black) 100%' : '#FFF0 0%, var(--color-stone-300) 90%'
            }), linear-gradient(135deg, var(--color-green-300) 0%, var(--color-blue-700) 100%)`,
            backgroundColor: 'var(--color-stone-200)', // Default to white
          }}
          role="img"
          aria-label="Forest background image with gradients"
        >
          <div className="absolute inset-0 z-3"></div>
          <div
            className="absolute inset-0 z-4 pointer-events-none dark:bg-transparent"
            style={{
              backgroundImage: "url('/grain-texture.jpg')",
              opacity: 0.2,
              mixBlendMode: 'overlay',
            }}
          ></div>
        </div>
        <div className="flex z-30 max-w-2/3 flex-row items-center gap-2">
          <div className="flex flex-col-reverse pl-16 md:flex-row items-center py-8 pr-12 md:bg-stone-400 rounded-r-full">
            <h1 className="text-5xl ml-4 font-serif font-light md:text-stone-700 dark:md:text-stone-700 text-stone-700 dark:text-stone-200 text-center md:text-left">
              Turning data into<br/><span className="font-regular text-rose-600 mr-8">defense against invasive species.</span>
            </h1>
            <IconWrapper
            icon={<ShieldIcon />}
            color="text-white"
            bgColor="bg-secondary"
            />
          </div>
        </div>
      </div>

      {/* Our Dream Section */}
      <div className="bg-stone-300 dark:bg-gradient-to-t dark:to-black dark:bg-stone-900 py-16 px-8 overflow-hidden relative text-black dark:text-white">
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
      <div className="bg-stone-400 dark:bg-stone-900 py-16 px-8">
        <TitleBlock
          title="Why Windhover?"
          bgColor="bg-transparent"
          textColor="text-black dark:text-sky-400"
          icon={<LeafIcon />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-16 mt-8 px-16 mx-auto">
          <div className="row-start-1">
            <p className="text-black dark:text-white px-8"><span className="text-sky-500 font-mono">Advanced AI-Powered Detection:</span> Our proprietary machine learning algorithms analyse vast datasets to identify invasive species with unparalleled accuracy and speed.</p>
          </div>
          <div className="row-start-2 md:row-start-1 bg-stone-800 rounded-xl">
            <div className="grid grid-flow-col place-content-around content-center h-full">
              <FlashlightIcon size="48px" color="var(--color-sky-500)" className="my-auto rotate-90" />
              <div className="h-2 w-20 sm:w-30 md:w-40 lg:w-60 xl:w-80 rounded-full bg-gradient-to-r mt-5.25 from-sky-500 to-green-500" />
              <PlantIcon size="48px" color="var(--color-green-500)" />
            </div>
          </div>
          <div className="row-start-3 md:row-start-2 md:col-start-2">
            <p className="text-black dark:text-white px-8"><span className="text-amber-500 font-mono">Real-Time Monitoring and Alerts:</span> Stay ahead of invasive threats with our real-time monitoring system that provides instant alerts, enabling swift action to protect native ecosystems.</p>
          </div>
          <div className="row-start-4 md:row-start-2 bg-stone-800 rounded-xl">
            <div className="grid grid-flow-col place-content-around content-center h-full">
              <PlantIcon size="48px" color="var(--color-green-500)" />
              <div className="h-2 w-20 sm:w-30 md:w-40 lg:w-60 xl:w-80 rounded-full bg-gradient-to-r mt-5.25 from-green-500 to-amber-500" />
              <WarningIcon size="48px" color="var(--color-amber-500)" />
            </div>
            
          </div>
          <div className="row-start-5 md:row-start-3">
            <p className="text-black dark:text-white px-8"><span className="text-rose-500 font-mono">Comprehensive Data Visualization: </span>Our intuitive dashboards and mapping tools transform complex data into actionable insights, empowering conservationists and policymakers to make informed decisions.</p>
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
        <div className="flex mx-auto space-around items-center">
          <div className="bg-stone-700 flex-1 p-6 pr-10 rounded-lg shadow-lg -mr-4">
          <TitleBlock
            title="Rhododendron Spread"
            bgColor="bg-transparent"
            textColor="text-white dark:text-sky-400"
            icon={<GlobeHemisphereWestIcon />}
          />
          <PureContentBlock
            content="Rhododendron ponticum, an invasive species in Ireland, poses significant threats to native biodiversity and ecosystem health. Our map visualizes its spread, aiding conservation efforts to manage and mitigate its impact."
            textColor="text-white"
            bgColor='bg-transparent'
          />
          <p className="text-sm text-center mt-4 text-gray-300 dark:text-gray-600">
            This map shows the spread of rhododendron across Ireland. Data visualized using custom overlays.
          </p>
          </div>
          <div className="mt-8 flex-2">
            <RhododendronMap />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
