import React from 'react';

function Rhodolens() {
  return (
    <div className="bg-stone-100 dark:bg-stone-900 text-black dark:text-white py-16 px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">RhodoLens</h1>
        <p className="text-lg mb-8 text-justify">
          RhodoLens is your strategic partner in the battle against invasive species. Designed for precision, speed, and scalability, our software empowers land managers, ecologists, and environmental agencies to make data-driven decisions faster than ever before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced machine learning algorithms for precise detection.</li>
              <li>Real-time analysis and reporting.</li>
              <li>Scalable solutions for large areas.</li>
              <li>Customizable to meet specific needs.</li>
            </ul>
          </div>
          <div>
            <img
              src="/technology.png"
              alt="RhodoLens Technology"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rhodolens;