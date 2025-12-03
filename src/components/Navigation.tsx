import { useState, useEffect } from "react";
import { Menu, X, Zap, ZapOff } from "lucide-react";
import { useLdm } from "@/contexts/LdmContext";
import { useLdmBreakpoint } from "@/hooks/use-ldm-breakpoint";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLdmEnabled, isManualToggle, toggleLdm } = useLdm();
  const isBelow700px = useLdmBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              
              {/* LDM Toggle Button - Desktop */}
              <button
                onClick={toggleLdm}
                className={`relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
                  isLdmEnabled 
                    ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' 
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                } group`}
                title={`Low Data Mode: ${isLdmEnabled ? 'ON' : 'OFF'}${isBelow700px && !isManualToggle ? ' (Auto)' : ''}`}
              >
                {isLdmEnabled ? (
                  <ZapOff className="w-4 h-4" />
                ) : (
                  <Zap className="w-4 h-4" />
                )}
                <span className="text-xs font-medium">
                  {isLdmEnabled ? 'LDM' : 'HDM'}
                </span>
                {isBelow700px && !isManualToggle && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                )}
              </button>
            </div>

            {/* Mobile Header Icons */}
            <div className="md:hidden flex items-center gap-3">
              {/* LDM Toggle Button - Mobile Header */}
              <button
                onClick={toggleLdm}
                className={`relative flex items-center gap-1 px-2 py-1 rounded-full transition-all duration-300 ${
                  isLdmEnabled 
                    ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' 
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                }`}
                title={`Low Data Mode: ${isLdmEnabled ? 'ON' : 'OFF'}${isBelow700px && !isManualToggle ? ' (Auto)' : ''}`}
              >
                {isLdmEnabled ? (
                  <ZapOff className="w-3 h-3" />
                ) : (
                  <Zap className="w-3 h-3" />
                )}
                {isBelow700px && !isManualToggle && (
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
                )}
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-xl opacity-100"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu Content - positioned below navbar */}
          <div className="relative z-40 flex flex-col items-center justify-center h-full gap-8 pt-20">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-medium text-foreground hover:text-primary transition-all duration-300 hover:scale-110 opacity-100 animate-fade-in-scale"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* LDM Toggle in Mobile Menu */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {isBelow700px && !isManualToggle ? 'Auto Low Data Mode' : 'Data Mode'}
              </span>
              <button
                onClick={() => {
                  toggleLdm();
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  isLdmEnabled 
                    ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' 
                    : 'bg-primary/20 text-primary hover:bg-primary/30'
                } animate-fade-in-scale`}
                style={{
                  animationDelay: `${navItems.length * 0.1 + 0.1}s`,
                }}
              >
                {isLdmEnabled ? (
                  <>
                    <ZapOff className="w-5 h-5" />
                    <span className="font-medium">Low Data Mode ON</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">High Data Mode ON</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
