export default function AnalysisGraphic() {
    return (
        <svg width="600" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Define the gradient */}
            <defs>
                <linearGradient id="gradient-1" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#FF6B6B" /> {/* Red */}
                    <stop offset="100%" stopColor="#FFB56B" /> {/* Orange */}
                </linearGradient>
                <linearGradient id="gradient-2" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#FFB56B" /> {/* Orange */}
                    <stop offset="100%" stopColor="#FFD56B" /> {/* Yellow */}
                </linearGradient>
                <linearGradient id="gradient-3" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#FFD56B" /> {/* Yellow */}
                    <stop offset="100%" stopColor="#6BCBFF" /> {/* Blue */}
                </linearGradient>
                <linearGradient id="gradient-4" x1="0%" y1="50%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#6BCBFF" /> {/* Blue */}
                    <stop offset="100%" stopColor="#6BFFB5" /> {/* Green */}
                </linearGradient>
            </defs>

            {/* Rounded rectangles with text */}
            <g>
                <path d="M50,200 Q50,150 100,150 H150 Q200,150 200,175 Q200,250 150,250 H100 A50,50 0 0 1 50,200 Z" fill="url(#gradient-1)" />
                <line x1="212.5" y1="150" x2="212.5" y2="300" stroke="white" strokeWidth="3" />
                <text x="212.5" y="325" textAnchor="middle" alignmentBaseline="middle" fill="white" fontSize="18" fontWeight="bold">
                    Data
                </text>

                {/* Second box */}
                <path d="M225,200 Q225,150 275,150 H325 Q375,150 375,175 Q375,250 325,250 H275 Q225,250 225,200 Z" fill="url(#gradient-2)" />
                <line x1="387.5" y1="100" x2="387.5" y2="250" stroke="white" strokeWidth="3" />
                <text x="387.5" y="75" textAnchor="middle" alignmentBaseline="middle" fill="white" fontSize="18" fontWeight="bold">
                    Analysis
                </text> 

                {/* Third box */}
                <rect x="400" y="150" width="150" height="100" rx="50" fill="url(#gradient-3)" />
                <line x1="562.5" y1="150" x2="562.5" y2="300" stroke="white" strokeWidth="3" />
                <text x="562.5" y="325" textAnchor="middle" alignmentBaseline="middle" fill="white" fontSize="18" fontWeight="bold">
                    Insight
                </text>

                {/* Fourth box */}
                <rect x="575" y="150" width="150" height="100" rx="50" fill="url(#gradient-4)" />

            </g>
        </svg>
    );
}