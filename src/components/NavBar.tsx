import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CaretDownIcon } from '@phosphor-icons/react';
/* Text style variable */
const textStyle = 'w-full rounded-xl border border-white/10 bg-stone-800/80 px-4 py-2 text-center font-mono text-white shadow-[0_8px_24px_rgba(28,25,23,0.18)] transition duration-300 hover:bg-stone-100 hover:text-stone-950 md:mx-2 md:w-auto md:rounded-full md:border-stone-300/70 md:bg-stone-100/80 md:text-stone-800';

const mobileBreakpoint = 768;

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoverActive, setHoverActive] = useState(false); // State for hover activation
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Animation variants for cascading effect
    const linkVariants = {
        hidden: {
            opacity: 0,
        },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                type: "spring" as const, // Use spring animation
                stiffness: 300, // Adjust stiffness for snappiness
                damping: 25, // Adjust damping for smoothness
            },
        }),
    };

    const horizontalVariants = {
        hidden: {
            opacity: 0,
            width: '0px',
            x: '300px',
            y: '0px',
            height: 'auto',
            // Start with no width
        },
        visible: {
            opacity: 1,
            y: '0px',
            width: window.innerWidth >= 968 ? '330px' : 'auto', // Expand to fit content only when not on mobile
            x: 0,
            transition: {
                type: "spring" as const, // Use spring animation
                stiffness: 500, // Adjust stiffness for container
                damping: 30, // Adjust damping for smoothness
            },
        },
    };

    const aboutLinkVariants = {
        hidden: {
            width: '0px',
            opacity: 0,
        },
        visible: {
            width: 'auto',
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        }
    }

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            x: 0,
            y: window.innerWidth >= mobileBreakpoint ? '0px' : '-152px',
            height: window.innerWidth >= mobileBreakpoint ? 'auto' : '0px',
        },
        visible: {
            opacity: 1,
            y: '0px',
            height: 'auto',
            transition: {
                duration: 0.3,
            },
        }
    }

    // Adjust dropdown behavior for mobile and About Us container
    const mobileMenuVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            width: 'auto',
            marginLeft: 0,
        },
        visible: {
            height: 'auto',
            width: 'auto',
            textAlign: 'center',
            opacity: 1,
            marginRight: '8px',
            transition: {
                duration: 0.3,
            },
        },
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownOpen]);


    return (
        <nav
            className={`fixed top-4 left-[5vw] right-[5vw] z-1000 mx-auto mt-4 w-[90vw] rounded-[2rem] border border-white/30 bg-stone-200/70 p-2 text-text-dark shadow-[0_18px_45px_rgba(28,25,23,0.12)] backdrop-blur-md transition-transform duration-300 dark:border-white/10 dark:bg-stone-900/70 dark:shadow-[0_18px_45px_rgba(0,0,0,0.32)] md:flex ${isVisible ? 'translate-y-0' : '-translate-y-18'}`}
        >
            <div className="flex flex-col sb:flex-row justify-between items-center w-full max-h-10">
                <div className="flex w-full flex-row justify-between rounded-full bg-stone-100/90 px-4 dark:bg-stone-800/90">
                    <a href="/" className="flex items-center text-text-dark no-underline">
                        <img src="/Windhover.png" alt="Windhover Logo" className="h-10 mx-2" />
                        <span className={`${textStyle} !w-auto !border-transparent !bg-transparent !px-0 font-serif !text-black !shadow-none dark:!text-stone-100`}>Windhover</span>
                    </a>
                    <button
                        className="block sb:hidden text-stone-800 dark:text-stone-100"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
                <motion.div
                    ref={menuRef}
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } sb:flex items-center space-x-4 flex flex-col min-[968px]:flex-row sb:space-x-4 space-y-4 sb:space-y-0 w-full sb:w-auto rounded-b-[1.5rem] !xl:bg-sky-500 bg-stone-800/95 p-3  dark:bg-stone-950/95  sb:p-0`}
                    initial="hidden"
                    animate={menuOpen || window.innerWidth >= mobileBreakpoint ? 'visible' : 'hidden'}
                    variants={mobileMenuVariants}
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
                    <div
                        className="group relative z-5 flex h-auto w-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-stone-800/90 transition-all pointer-events-auto md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:rounded-full md:border-stone-300/70 md:bg-stone-100/85 dark:md:border-white/10 dark:md:bg-stone-800/85"
                        onMouseEnter={() => setHoverActive(true)} // Activate hover
                        onMouseLeave={() => setHoverActive(false)} // Deactivate hover
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <motion.div
                            initial="hidden"
                            animate={hoverActive || dropdownOpen ? 'visible' : 'hidden'}
                            ref={dropdownRef}
                            className="-md:ml-5"
                            variants={window.innerWidth >= 968 ? horizontalVariants : dropdownVariants}
                        >
                            <div
                                className="flex flex-col min-[968px]:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 transition-all"
                            >
                            {['About Us', 'RnD', 'Contact Us'].map((link, index) => (
                                <motion.a
                                    key={link}
                                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                                    className={`bg-opacity-70 py-2 px-4 text-center text-stone-200 transition-colors hover:bg-stone-200 hover:text-black hover:bg-opacity-70 md:rounded-full md:text-stone-700 dark:md:text-stone-100 ${
                                        index === 0 ? 'md:ml-8' : 'ml-0'
                                    } whitespace-nowrap shadow-none`}
                                    custom={index}
                                    initial="hidden"
                                    animate={hoverActive || menuOpen ? 'visible' : 'hidden'}
                                    variants={linkVariants}
                                >
                                    {link}
                                </motion.a>
                            ))}
                            </div>
                        </motion.div>

                        <p
                            className={`${textStyle} !text-white !mx-0 relative z-10 order-first flex w-full flex-row items-center text-nowrap !bg-transparent !shadow-none md:order-last`}
                        >
                            <CaretDownIcon size={'20px'} className="group-hover:rotate-90 -rotate-90 h-[20px] transition transform duration-500 ease-[cubic-bezier(.25,-0.5,.6,1.6)]" />
                            <motion.span
                                initial="visible"
                                animate={hoverActive ? 'hidden' : 'visible'}
                                variants={window.innerWidth >= mobileBreakpoint ? aboutLinkVariants : undefined}
                                className="ml-2"
                            >About Us</motion.span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}