interface SpectrumGraphicProps {
  className?: string;
}

function SpectrumGraphic({ className = '' }: SpectrumGraphicProps) {
  const patternSize = 10;
  const maxRadius = 8;
  const height = 400; // SVG height
  const width = 1000; // SVG width

  // Generate circles programmatically
  const circles = Array.from({ length: height / patternSize }, (_, i) => {
    const y = i * patternSize;
    return Array.from({ length: width / patternSize }, (_, j) => {
      const x = j * patternSize;
      const radius = maxRadius * Math.abs(1 - (y / height) * 1.1 - (Math.random() * 0.15) - ((0.005 * (x ** 4) - 10 * (x ** 3) + 6100 * (x ** 2) - 1100000 * x + 7050000) * 0.000000002)); // Vary radius based on y position

    // Explicit theme detection
    const userPreference = localStorage.getItem('theme');
    const systemPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = userPreference === 'dark' || (!userPreference && systemPreference);

    const fillColor = isDarkMode
      ? 'var(--color-stone-900)'
      : 'var(--color-stone-300)';

    return (
      <circle
        key={`${i}-${j}`}
        cx={x}
        cy={y}
        r={radius}
        fill={fillColor}
      />
    );
  });
}).flat(); // Ensure the nested arrays are flattened

  // Generate lines pointing to text boxes
  const lines = [
    { x1: 200, y1: 250, x2: 200, y2: 50 },
    { x1: 500, y1: 200, x2: 500, y2: 75 },
    { x1: 800, y1: 350, x2: 800, y2: 100 },
    { x1: 200, y1: 100, x2: 500, y2: 100 }
  ].map((line, index) => (
    <line
      key={index}
      x1={line.x1}
      y1={line.y1}
      x2={line.x2}
      y2={line.y2}
      stroke="white"
      strokeWidth="2"
    />
  ));

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${className}`} viewBox={`0 0 ${width} ${height}`} >
      <defs>
        <linearGradient id="curvedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--color-fuchsia-400)" />
          <stop offset="25%" stopColor="var(--color-sky-400)" />
          <stop offset="50%" stopColor="var(--color-yellow-400)" />
          <stop offset="75%" stopColor="var(--color-red-400)" />
          <stop offset="100%" stopColor="var(--color-rose-400)" />
        </linearGradient>

        <linearGradient id="outerCurvedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--color-fuchsia-300)" />
          <stop offset="25%" stopColor="var(--color-sky-300)" />
          <stop offset="50%" stopColor="var(--color-yellow-300)" />
          <stop offset="75%" stopColor="var(--color-red-300)" />
          <stop offset="100%" stopColor="var(--color-rose-300)" />
        </linearGradient>
      </defs>
      <path
        d="M10,400
            C100,50 200,300 300,150
            C400,50 500,250 600,200
            C700,100 800,400 1000,400
            L1000,400
            L10,400 Z"
        fill="url(#outerCurvedGradient)"
      />
      <path
        d="M10,400
            C100,50 200,350 300,200
            C400,50 500,250 600,250
            C750,150 800,300 900,400
            L900,400
            L10,400 Z"
        fill="url(#curvedGradient)"
      />

      {circles}

      <path 
        d="M5,390
            L995,390
            L995,400
            L5,400
            Z"
        fill="white"
      />
      <circle 
        cx="5"
        cy="395"
        r="5"
        fill="white"
      />
      <circle 
        cx="995"
        cy="395"
        r="5"
        fill="white"
      />
      <text x="350" y="80" fill="white" fontSize="16" textAnchor="middle" fontFamily='IBM Plex Mono'>What you see</text>
      <text x="800" y="80" fill="white" fontSize="16" textAnchor="middle" fontFamily='IBM Plex Mono'>What we see</text>
      {lines}
    </svg>
  );
}

export default SpectrumGraphic;