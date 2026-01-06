import Button from "../components/Button";
import IconWrapper from "../components/IconWrapper";
import { FlowerLotusIcon } from "@phosphor-icons/react";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-stone-300 dark:bg-stone-900 text-black dark:text-white">
            <div className="text-center relative">
                <h1 className="text-6xl font-serif mb-4">404</h1>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-stone-300 rounded-lg -rotate-6"></div>

                <img src="/404.png" alt="Page not found" className="relative mx-auto mb-16 w-100" />

                <p className="text-2xl mb-2">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="text-lg mb-4">
                    Like a misplaced rhododendron, this page is out of place.
                </p>
                <Button text="Go Back Home" link="/" />
            </div>
        </div>
    );
};

export default NotFound;