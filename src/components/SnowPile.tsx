export const SnowPile = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24 md:h-32"
        style={{ transform: "rotate(180deg)" }}
      >
        <defs>
          <linearGradient id="snowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(35, 60%, 95%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(25, 40%, 85%)", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="snowGradientWarm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "hsl(30, 50%, 92%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(20, 35%, 88%)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,60 Q150,90 300,70 T600,60 T900,70 T1200,60 L1200,0 L0,0 Z"
          fill="url(#snowGradient)"
          opacity="0.95"
        />
        <path
          d="M0,50 Q100,70 200,55 T400,50 T600,55 T800,50 T1000,55 T1200,50 L1200,0 L0,0 Z"
          fill="url(#snowGradientWarm)"
          opacity="0.8"
        />
        <path
          d="M0,40 Q200,60 400,45 T800,40 T1200,45 L1200,0 L0,0 Z"
          fill="hsl(25, 45%, 90%)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};
