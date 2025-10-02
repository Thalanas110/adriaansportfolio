import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface PortfolioCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  skills: string[];
  delay?: number;
  route: string;
}

export const PortfolioCard = ({ title, description, icon, skills, delay = 0, route }: PortfolioCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(route);
  };

  return (
    <button
      onClick={handleClick}
      className="group relative animate-float hover:animate-float-slow w-full text-left"
      style={{
        animation: `fade-in-up 0.8s ease-out forwards`,
        animationDelay: `${delay}s`,
        opacity: 0,
      }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-75 blur-xl transition-all duration-700 group-hover:duration-300" />
      
      <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-2xl p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-[var(--shadow-card)] cursor-pointer">
        <div className="mb-6 text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform-gpu will-change-transform transition-transform">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm bg-secondary/50 backdrop-blur-sm text-secondary-foreground rounded-full border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 hover:scale-105 transform-gpu will-change-transform"
              style={{
                animation: `fade-in-scale 0.4s ease-out forwards`,
                animationDelay: `${delay + 0.1 * index}s`,
                opacity: 0,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex items-center gap-2 text-primary group-hover:text-accent transition-colors duration-300">
          <span className="text-sm font-medium">View Projects</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
};
