import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`transition-all duration-1000 lg:pl-1 order-2 lg:order-1 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-3xl animate-glow-pulse" />
                <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Adriaan M. Dimate
                </h1>
                {/* Neurodiversity / ASD badge - visible but subtle */}
                <div className="mt-3">
                  <span
                    className="inline-block text-xs font-medium text-muted-foreground bg-muted/20 border border-border/30 rounded-full px-3 py-1"
                    aria-label="Autism spectrum disorder"
                    title="Autism spectrum disorder"
                  >
                    Autistic (ASD)
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-xl md:text-3xl lg:text-4xl text-foreground/90 mb-4 font-light tracking-wide">
              Aspiring Airline Pilot
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6">
              Software Developer • QA Analyst
            </p>
            
            <div className="h-px w-24 bg-gradient-to-r from-primary via-accent to-transparent mb-6" />
            
            <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Navigating the skies and code with precision, dedication, and unwavering commitment to excellence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {["Aviation", "Development", "Quality Assurance"].map((item, index) => (
                <div
                  key={item}
                  className="group relative"
                  style={{
                    animation: `fade-in-scale 0.6s ease-out forwards`,
                    animationDelay: `${(index + 1) * 0.2}s`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative px-6 py-3 bg-card/50 backdrop-blur-md border border-border/50 rounded-full hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-glow)]">
                    <span className="text-sm md:text-base text-foreground font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToPortfolio}
              className="mt-12 group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-intense)]"
              style={{
                animation: `fade-in-up 0.8s ease-out forwards`,
                animationDelay: "0.8s",
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Explore My Work</span>
              <svg
                className="relative w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Right Side - Profile Picture */}
          <div
            className={`flex justify-center lg:justify-start lg:-ml-1 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Animated glow rings */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary via-accent to-primary opacity-40 rounded-full blur-3xl animate-glow-pulse" />
              <div className="absolute -inset-4 bg-gradient-to-r from-accent via-primary to-accent opacity-30 rounded-full blur-2xl animate-pulse" />
              
              {/* Circular frame */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary/60 transition-all duration-500 shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-intense)] group-hover:scale-105 transform-gpu will-change-transform">
                {/* Profile image */}
                <img
                  src={profileImg}
                  alt="Adriaan M. Dimate"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent opacity-20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent to-primary opacity-20 rounded-full blur-2xl animate-float-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
