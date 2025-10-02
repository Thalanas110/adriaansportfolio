import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ClipboardCheck, Bug, CheckCircle2, Target } from "lucide-react";
import snowGlobeBg from "@/assets/snow-globe-bg.png";

export const QualityAssurance = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [/*
    {
      title: "E-Commerce Testing Suite",
      scope: "End-to-End Testing",
      description: "Comprehensive test automation for online shopping platform covering user flows, payment processing, and inventory management.",
      metrics: ["500+ test cases", "95% code coverage", "Zero critical bugs in production"],
      tools: ["Selenium", "Jest", "Cypress"],
    },
    {
      title: "Mobile App QA",
      scope: "Cross-Platform Testing",
      description: "Quality assurance for iOS and Android applications with focus on performance and user experience.",
      metrics: ["300+ devices tested", "99.9% crash-free rate", "4.8 star rating achieved"],
      tools: ["Appium", "XCTest", "Espresso"],
    },
    {
      title: "API Testing Framework",
      scope: "Backend Validation",
      description: "Automated testing framework for RESTful APIs ensuring reliability and performance standards.",
      metrics: ["200+ endpoints validated", "Sub-100ms response times", "100% uptime SLA met"],
      tools: ["Postman", "Newman", "JMeter"],
    },
  */];

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/96 to-background/98 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Portfolio</span>
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 animate-glow-pulse">
            <ClipboardCheck className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Quality Assurance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ensuring software excellence through rigorous testing, automation, and meticulous attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{
                animation: `fade-in-up 0.8s ease-out forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
              }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700" />
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <Target className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                    <Bug className="w-3 h-3" />
                    {project.scope}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <p className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Key Metrics
                  </p>
                  {project.metrics.map((metric) => (
                    <div key={metric} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QualityAssurance;
