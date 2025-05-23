import { useState } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

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
            <span className="text-lg font-semibold">GreenLens</span>
        </a>
    );
}

/* Text style variable */
const textStyle = 'text-text-dark dark:text-white text-shadow-md dark:text-shadow-sky-500/50';

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
                        className= {textStyle}
                    >
                        Pricing
                    </a>
                    <Popover className="relative group">
                        <PopoverButton className={textStyle}>
                            About Us
                        </PopoverButton>
                        <PopoverPanel
                            className="absolute top-full left-0 mt-2 w-64 divide-y divide-white/5 rounded-xl bg-text-dark text-bg-dark bg-opacity-70 backdrop-blur-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        >
                            <div className="p-3 space-y-2">
                                <a
                                    href="/about-us"
                                    className="block rounded-lg px-3 py-2 transition hover:bg-primary hover:text-bg-dark animate-fade-in-down delay-[100ms]"
                                >
                                    <p className="font-semibold">About Us</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Learn more about our mission
                                    </p>
                                </a>
                                <a
                                    href="/rnd"
                                    className="block rounded-lg px-3 py-2 transition hover:bg-primary hover:text-bg-dark animate-fade-in-down delay-[200ms]"
                                >
                                    <p className="font-semibold">R&D</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Explore our innovations
                                    </p>
                                </a>
                                <a
                                    href="/contact-us"
                                    className="block rounded-lg px-3 py-2 transition hover:bg-primary hover:text-bg-dark animate-fade-in-down delay-[300ms]"
                                >
                                    <p className="font-semibold">Contact Us</p>
                                    <p className="text-sm text-bg-dark/50">
                                        Get in touch with us
                                    </p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
            </div>
        </nav>
    );
}