import { useState } from 'react';

/* Text style variable */
const textStyle = 'text-text-dark dark:text-white text-shadow-md bg-stone-200/20 dark:text-shadow-sky-500/50 bg-opacity-70 rounded-md py-2 px-4 hover:bg-stone-200 hover:bg-opacity-70 transition-colors';
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
                className="h-10 mr-2"
            />
            <span className={`${textStyle} bg-transparent bold`}>GreenLens</span>
        </a>
    );
}

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-light bg-opacity-50 backdrop-blur-md text-text-dark rounded-lg shadow-md w-[90vw] mx-auto mt-4 p-4 fixed top-4 left-[5vw] right-[5vw] z-50">
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
                    <div className="flex items-center space-x-4 group relative transition-all bg-dark bg-opacity-80 bg-stone-700/20 rounded-md">
                        <a
                            href="/about-us"
                            className={`${textStyle} relative z-10 order-last mr-0`}
                        >
                            About Us
                        </a>

                        {/* Sliding inline links */}
                        <div className="flex overflow-hidden transition-all ${animationDuration} space-x-4 max-w-0 opacity-0 group-hover:max-w-[500px] group-hover:opacity-100 h-10 items-center group-hover:pr-4">
                            <a
                                href="/about-us"
                                className={`${textStyle} transform translate-x-4 opacity-0 transition ${animationDuration} delay-${animationDelay}ms group-hover:translate-x-0 group-hover:opacity-100 -order-4 bg-transparent`}
                            >
                                About Us
                            </a>
                            <a
                                href="/rnd"
                                className={`${textStyle} transform translate-x-4 opacity-0 transition ${animationDuration} delay-${2*animationDelay}ms group-hover:translate-x-0 group-hover:opacity-100 -order-3 bg-transparent`}
                            >
                                R&D
                            </a>
                            <a
                                href="/contact-us"
                                className={`${textStyle} transform translate-x-4 opacity-0 transition ${animationDuration} delay-[${3*animationDelay}ms] group-hover:translate-x-0 group-hover:opacity-100 -order-2 bg-transparent`}
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