import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

/* Text style variable */
const textStyle = 'text-text-dark dark:text-black shadow-md text-shadow-md bg-stone-700/20 bg-opacity-70 rounded-full py-2 px-4 transition duration-300 hover:bg-stone-200 hover:text-black transition-colors';

/* Animation parameters */
const animationDuration = 'duration-500';
const animationDelay = 400;

export function LogoWithText() {
    return (
        <a
            href="/"
            className="flex items-center text-text-dark no-underline"
        >
            <img
                src="/GreenLens.png"
                alt="GreenLens Logo"
                className="h-10 mx-2"
            />
            <span className={`${textStyle} bg-transparent hover:bg-transparent shadow-none bold pl-0`}>GreenLens</span>
        </a>
    );
}

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-light bg-opacity-50 bg-stone-300 text-text-dark rounded-full shadow-md w-[90vw] mx-auto mt-4 p-1 fixed top-4 left-[5vw] right-[5vw] z-50">
            <div className="flex justify-between items-center">
                <LogoWithText />
                <button
                    className="block md:hidden text-bg-dark bg-text-dark"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
                <div
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } md:flex items-center space-x-4`}
                >
                    <a href="/" className={textStyle}>
                        Home
                    </a>
                    <a href="/products" className={textStyle}>
                        Products
                    </a>
                    <a href="/pricing" className={textStyle}>
                        Pricing
                    </a>
                    <div className="flex items-center space-x-4 group relative transition-all bg-opacity-80 bg-stone-700/20 rounded-full">
                        <a
                            href="/about-us"
                            className={`${textStyle} relative z-10 order-last mr-0 bg-none`}
                        >
                            <KeyboardArrowDownRoundedIcon className="group-hover:rotate-90 transition transform duration-500 ease-[cubic-bezier(0.33,_-0.26,_0.567,_1.311)]"/> About Us
                        </a>

                        {/* Sliding inline links */}
                        <div className="flex overflow-hidden transition-transform duration-500 space-x-4 max-w-0 opacity-0 group-hover:max-w-[500px] group-hover:opacity-100 h-10 items-center group-hover:pr-4">
                            <a
                                href="/about-us"
                                className="text-text-dark dark:text-black text-shadow-md bg-opacity-70 rounded-full py-2 px-4 hover:bg-stone-200 hover:bg-opacity-70 hover:text-black transition-colors duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-[400ms] -order-4 bg-transparent shadow-none"
                            >
                                About Us
                            </a>
                            <a
                                href="/rnd"
                                className="text-text-dark dark:text-black text-shadow-md bg-opacity-70 rounded-full py-2 px-4 hover:bg-stone-200 hover:bg-opacity-70 hover:text-black transition-colors duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-[800ms] -order-3 bg-transparent shadow-none"
                            >
                                R&D
                            </a>
                            <a
                                href="/contact-us"
                                className="text-text-dark dark:text-black text-shadow-md bg-opacity-70 rounded-full py-2 px-4 hover:bg-stone-200 hover:bg-opacity-70 hover:text-black transition-colors duration-300 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-[1200ms] -order-2 bg-transparent shadow-none"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}