import { Plane, Code2, ClipboardCheck } from "lucide-react";
import { PortfolioCard } from "./PortfolioCard";

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Aviation Excellence",
      description: "Pursuing commercial pilot certification with a focus on precision flying, safety protocols, and navigational expertise. Committed to mastering both technical skills and aeronautical decision-making.",
      icon: <Plane className="w-12 h-12" />,
      skills: ["Flight Training", "Navigation", "Safety Protocols", "Aerodynamics", "Weather Analysis"],
      route: "/aviation",
    },
    {
      title: "Software Development",
      description: "Building robust, scalable applications with modern technologies. From frontend interfaces to backend systems, creating solutions that solve real-world problems with clean, maintainable code.",
      icon: <Code2 className="w-12 h-12" />,
      skills: ["React", "TypeScript", "Node.js", "Python", "SQL", "API Design"],
      route: "/software-development",
    },
    {
      title: "Quality Assurance",
      description: "Ensuring software excellence through comprehensive testing strategies, automation frameworks, and meticulous attention to detail. Dedicated to delivering bug-free, high-performance applications.",
      icon: <ClipboardCheck className="w-12 h-12" />,
      skills: ["Test Automation", "Selenium", "Jest", "CI/CD", "Bug Tracking", "Performance Testing"],
      route: "/quality-assurance",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A multi-disciplinary approach to excellence across aviation, technology, and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.title}
              {...item}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
