import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

/* Text style variable */
const textStyle = 'shadow-md text-shadow-md bg-stone-700 xl:bg-stone-400 bg-opacity-70 rounded-sm md:rounded-full py-2 px-4 m-0 md:mx-4 transition duration-300 hover:bg-stone-200 text-white xl:text-black hover:text-black transition-colors w-full md:w-auto font-mono';

const mobileBreakpoint = 768;

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoverActive, setHoverActive] = useState(false); // State for hover activation
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
            width: window.innerWidth >= mobileBreakpoint ? '330px' : 'auto', // Expand to fit content only when not on mobile
            x: 0,
            transition: {
                type: "spring" as const, // Use spring animation
                stiffness: 500, // Adjust stiffness for container
                damping: 30, // Adjust damping for smoothness
            },
        },
    };

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
        },
        visible: {
            height: 'auto',
            width: 'auto',
            textAlign: 'center',
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

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
        <nav className="bg-stone-300/20 text-text-dark rounded-full md:shadow-md w-[90vw] mx-auto mt-4 p-1 fixed top-4 left-[5vw] right-[5vw] z-50 md:flex">
            <div className="flex flex-col xl:flex-row justify-between items-center w-full max-h-10">
                <div className="flex flex-row justify-between w-full px-4 bg-stone-300 rounded-full">
                    <a href="/" className="flex items-center text-text-dark no-underline">
                        <img src="/Windhover.png" alt="Windhover Logo" className="h-10 mx-2" />
                        <span className={`${textStyle} !bg-transparent font-serif  !text-black shadow-none bold pl-0`}>Windhover</span>
                    </a>
                    <button
                        className="block xl:hidden text-bg-dark"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>
                <motion.div
                    ref={menuRef}
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } xl:flex items-center space-x-4 flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0 w-full xl:w-auto rounded-b-2xl bg-stone-700 xl:bg-transparent`}
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
                        className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 group relative transition-all bg-opacity-80 bg-stone-700 xl:bg-stone-400 md:rounded-full pointer-events-auto z-5 w-full md:w-auto overflow-hidden h-auto"
                        onMouseEnter={() => setHoverActive(true)} // Activate hover
                        onMouseLeave={() => setHoverActive(false)} // Deactivate hover
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <motion.div
                            initial="hidden"
                            animate={hoverActive || dropdownOpen ? 'visible' : 'hidden'}
                            ref={dropdownRef}
                            className="-md:ml-5"
                            variants={window.innerWidth >= mobileBreakpoint ? horizontalVariants : dropdownVariants}
                        >
                            <div
                                className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 transition-all"
                            >
                            {['About Us', 'RnD', 'Contact Us'].map((link, index) => (
                                <motion.a
                                    key={link}
                                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                                    className={`text-stone-200 xl:text-black text-shadow-md bg-opacity-70 md:rounded-full py-2 px-4 ${
                                        index === 0 ? 'md:ml-8' : 'ml-0'
                                    } hover:bg-stone-200 hover:bg-opacity-70 text-center hover:text-black transition-colors shadow-none whitespace-nowrap`}
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
                            className={`${textStyle} !mx-0 relative text-nowrap z-10 order-first md:order-last bg-none w-full`}
                        >
                            <KeyboardArrowDownRoundedIcon className="group-hover:rotate-90 h-10 transition transform duration-1000 ease-[cubic-bezier(0.33,_-0.26,_0.567,_1.311)]" /> About Us
                        </p>
                    </div>
                </motion.div>
            </div>
        </nav>
    );
}