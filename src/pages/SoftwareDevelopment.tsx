import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Code2, Github, ExternalLink } from "lucide-react";
import snowGlobeBg from "@/assets/snow-globe-bg.png";

export const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform (Group Project - Software Engineering 1 & 2, AppDev, HCI, Project Mgmt)",
      tech: ["Vanilla", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      description: "Full-stack e-commerce app for a flea market application. Currently being rewritten.",
      highlights: ["Core Vanilla JS", "User Authentication", "Role-based access"],
      github: "#",
      demo: "https://updated-camfleatest.vercel.app/",
    },
    {
      title: "War of Dots page",
      tech: ["React", "Node.js"],
      description: "Original website by Tjdog19 & CuriousAnt, remade by me with React with permission from Tea and Python. All credits goes to the original creators.",
      highlights: ["Responsive design", "Interactive UI", "Performance and UI optimization"],
      github: "#",
      demo: "https://warofdots.net/",
    },
    {
      title: "QuickSky Weather App",
      tech: ["React", "Vite", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      description: "No-nonsense and no-bloatware simple progressive web app for weather forecasts",
      highlights: ["API integration", "Data visualization", "Geolocation features"],
      github: "#",
      demo: "https://quicksky.netlify.app/",
    },
    {
      title: "Practicum vlogsite",
      tech: ["Vanilla", "Vite","Node.js", "Supabase", "PostgreSQL"],
      description: "Practicum vlogsite which I used to display the vlogs as requird by Prof. Loudel M. Manaloto, MSCS. The vlogsite isn't required, but overkill is always better.",
      highlights: ["CRUD operations", "User authentication", "Responsive design", "Video playback", "Core Vanilla JS"],
      github: "#",
      demo: "https://practicumoneblogsite.vercel.app/",
    },
    {
      title: "church website",
      tech: ["React", "Node.js", "Supabase", "PostgreSQL"],
      description: "Website for my church where I am a part of the media team.",
      highlights: ["CRUD operations", "User authentication", "Responsive design", "Video playback", "God-oriented"],
      github: "#",
      demo: "#",
    },
        {
      title: "Devotion blogsite",
      tech: ["React", "Vite", "Node.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      description: "Devotion website I did with full admin dashboard so I could just use this instead of randomizing in my notes app on my phone & track devotions better",
      highlights: ["Simple responsive design"],
      github: "#https://github.com/Thalanas110/DevotionPage",
      demo: "https://adriaansdevotions.netlify.app/",
    },

  ];

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
            <Code2 className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Software Development
          </h1>
          <h2 className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building modern, scalable applications with clean code and user-centric design.
          </h2>
          <p className=" text-muted-foreground max-w-xl mx-auto">
            Click on a project to view.
          </p>
        </div>

        {/* Project Dump Button */}
        <div className="flex justify-center mb-12">
          <a
            href="https://allofadriaansprojects.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500" />
            <div className="relative flex items-center gap-3">
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View All Projects</span>
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
            </div>
          </a>
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
