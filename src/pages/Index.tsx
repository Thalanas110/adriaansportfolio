import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Contact } from "@/components/Contact";
import { Snowfall } from "@/components/Snowfall";
import { SnowPile } from "@/components/SnowPile";
import snowGlobeBg from "@/assets/snow-globe-bg.png";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${snowGlobeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/97 via-background/95 to-background/97 backdrop-blur-[2px]" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Snowfall Effect */}
      <Snowfall />

      {/* Snow Pile at Bottom */}
      <SnowPile />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <PortfolioSection />
        <Contact />
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Adriaan. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              shhhhhhhh
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
