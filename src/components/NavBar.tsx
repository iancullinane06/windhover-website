import { useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

/* Text style variable */
const textStyle = 'shadow-md text-shadow-md bg-stone-700/20 bg-opacity-70 rounded-sm md:rounded-full py-2 px-4 m-0 md:mx-4 transition duration-300 hover:bg-stone-200 text-white md:text-black hover:text-black transition-colors w-full md:w-auto';

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoverActive, setHoverActive] = useState(false); // State for hover activation

    // Animation variants for cascading effect
    const linkVariants = {
        hidden: {
            opacity: 0,
            x: 0, // Start from the left
        },
        visible: (i: number) => ({
            opacity: 1,
            x: -20, // Move to center
            transition: {
                type: "spring" as const, // Use spring animation
                stiffness: 300, // Adjust stiffness for snappiness
                damping: 25, // Adjust damping for smoothness
                delay: i * 0.1, // Staggered delay for each link
            },
        }),
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            width: '0px', // Start with no width
        },
        visible: {
            opacity: 1,
            width: '330px', // Expand to fit content
            transition: {
                type: "spring" as const, // Use spring animation
                stiffness: 200, // Adjust stiffness for container
                damping: 25, // Adjust damping for smoothness
            },
        },
    };

    return (
        <nav className="bg-light bg-opacity-50 md:bg-stone-300 text-text-dark rounded-full md:shadow-md w-[90vw] mx-auto mt-4 p-1 fixed top-4 left-[5vw] right-[5vw] z-50">
            <div className="flex flex-col md:flex-row justify-between  items-center">
                <div className="flex flex-row justify-around md:justify-start w-[80%] md:w-auto bg-stone-300 md:bg-transparent rounded-full">
                    <a href="/" className="flex items-center text-text-dark no-underline">
                        <img src="/GreenLens.png" alt="GreenLens Logo" className="h-10 mx-2" />
                        <span className={`${textStyle} bg-transparent font-mono hover:bg-transparent shadow-none bold pl-0`}>GreenLens</span>
                    </a>
                    <button
                        className="block md:hidden text-bg-dark"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } md:flex items-center space-x-4 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-[50%] md:w-auto rounded-b-2xl bg-stone-700 md:bg-transparent`}>                
                    <a href="/" className={textStyle}>
                        Home
                    </a>
                    <a href="/products" className={textStyle}>
                        Products
                    </a>
                    <a href="/pricing" className={textStyle}>
                        Pricing
                    </a>
                    {/* Parent container for hover */}
                    <div
                        className="flex max-h-[100%] items-center flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 group relative transition-all bg-opacity-80 md:bg-stone-700/20 rounded-full pointer-events-auto z-5"
                        onMouseEnter={() => setHoverActive(true)} // Activate hover
                        onMouseLeave={() => setHoverActive(false)} // Deactivate hover
                    >
                        {/* Sliding inline links with Framer Motion */}
                        <motion.div
                            className={`flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 transition-all mr-0 ${
                                hoverActive ? 'w-auto opacity-100' : 'w-0 opacity-0'
                            } overflow-hidden`}
                            initial="hidden"
                            animate={hoverActive ? 'visible' : 'hidden'} // Control animation with state
                            variants={containerVariants}
                        >
                            {['About Us', 'RnD', 'Contact Us'].map((link, index) => (
                                <motion.a
                                    key={link}
                                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                                    className="text-text-dark dark:text-black text-shadow-md bg-opacity-70 rounded-full py-2 px-4 ml-4 hover:bg-stone-200 hover:bg-opacity-70 hover:text-black transition-colors shadow-none whitespace-nowrap mr-0"
                                    custom={index}
                                    initial="hidden"
                                    animate={hoverActive ? 'visible' : 'hidden'} // Control animation with state
                                    variants={linkVariants}
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </motion.div>

                        <p
                            className={`${textStyle} !mx-0 relative z-10 order-first md:order-last mr-0 bg-none`}
                        >
                            <KeyboardArrowDownRoundedIcon className="group-hover:rotate-90 transition transform duration-500 ease-[cubic-bezier(0.33,_-0.26,_0.567,_1.311)]" /> About Us
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}