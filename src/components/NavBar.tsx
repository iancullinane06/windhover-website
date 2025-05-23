import { useState } from 'react';

/* Text style variable */
const textStyle = 'text-text-dark dark:text-white text-shadow-md dark:text-shadow-sky-500/50';

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
            <span className={`${textStyle} bold `}>GreenLens</span>
        </a>
    );
}


export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className=" bg-light bg-opacity-50 backdrop-blur-md text-text-dark rounded-lg shadow-md w-[90vw] mx-auto mt-4 p-4 fixed top-4 left-[5vw] right-[5vw] z-50">
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
                    <a
                        href="/"
                        className={`${textStyle} ${
                            location.pathname === '/' ? 'underline' : ''
                        }`}
                    >
                        Home
                    </a>
                    <a
                        href="/products"
                        className= {textStyle}
                    >
                        Products
                    </a>
                    <a
                        href="/pricing"
                        className={textStyle}
                    >
                        Pricing
                    </a>
                    <div className="relative group">
                        <span className={`${textStyle} cursor-pointer`}>
                            About Us
                        </span>
                        <div
                            className="top-full left-auto right-0 w-auto bg-text-dark text-bg-dark bg-opacity-90 backdrop-blur-md shadow-lg hidden group-hover:flex flex-row transition-all duration-300 ease-in-out"
                        >
                            <div className="p-4 space-y-4">
                                <a
                                    href="/about-us"
                                    className="block rounded-lg px-4 py-2 transition hover:bg-primary hover:text-bg-dark"
                                >
                                    <p className="font-semibold">About Us</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Learn more about our mission
                                    </p>
                                </a>
                                <a
                                    href="/rnd"
                                    className="block rounded-lg px-4 py-2 transition hover:bg-primary hover:text-bg-dark"
                                >
                                    <p className="font-semibold">R&D</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Explore our innovations
                                    </p>
                                </a>
                                <a
                                    href="/contact-us"
                                    className="block rounded-lg px-4 py-2 transition hover:bg-primary hover:text-bg-dark"
                                >
                                    <p className="font-semibold">Contact Us</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Get in touch with us
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}