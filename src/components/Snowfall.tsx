import { useEffect, useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Use fewer snowflakes on mobile (22) vs desktop (200)
    const snowflakeCount = isMobile ? 22 : 400;
    
    const flakes: Snowflake[] = Array.from({ length: snowflakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 2,
      // Adjust duration and delay to ensure continuous snowfall with fewer flakes on mobile
      duration: isMobile 
        ? Math.random() * 8 + 12  // Slightly faster on mobile (12-20s)
        : Math.random() * 10 + 15, // Normal speed on desktop (15-25s)
      delay: Math.random() * (isMobile ? 3 : 5), // Shorter delay spread on mobile
    }));
    setSnowflakes(flakes);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white/80 animate-snow-fall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
};
