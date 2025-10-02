import { useNavigate } from "react-router-dom";
import { ArrowLeft, Code2, Github, ExternalLink } from "lucide-react";

export const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      description: "Full-stack e-commerce solution with real-time inventory management and secure payment processing.",
      highlights: ["Built RESTful API", "Implemented JWT authentication", "Integrated payment gateway"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      tech: ["React", "TypeScript", "Supabase"],
      description: "Collaborative task management with real-time updates and team features.",
      highlights: ["Real-time sync", "Role-based access", "Responsive design"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      tech: ["React", "OpenWeather API", "Chart.js"],
      description: "Interactive weather dashboard with forecasting and data visualization.",
      highlights: ["API integration", "Data visualization", "Geolocation features"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-12"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Portfolio</span>
        </button>

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-6 animate-glow-pulse">
            <Code2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Software Development
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building modern, scalable applications with clean code and user-centric design.
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
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/30">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
