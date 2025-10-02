import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plane, Award, Clock } from "lucide-react";

export const Aviation = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Private Pilot License",
      status: "Planning",
      description: "Currently working towards PPL with focus on VFR navigation and cross-country flight planning.",
      achievements: ["Solo flight completed", "40+ flight hours logged", "Night flying certified"],
    },
    {
      title: "Instrument Rating Training",
      status: "Planning",
      description: "Next phase focusing on IFR procedures and advanced navigation systems.",
      achievements: ["Ground school completed", "Simulator training scheduled"],
    },
    {
      title: "Commercial Pilot Preparation",
      status: "Planning",
      description: "Long-term goal to achieve CPL and join a major airline.",
      achievements: ["Career path mapped", "Mentorship secured"],
    },
        {
      title: "ATP Preparation",
      status: "Planning",
      description: "Final phase focusing on ATP requirements and multi-crew operations.",
      achievements: ["CPL ground school enrolled", "Multi-crew cooperation training planned"],
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
            <Plane className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Aviation Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My final offensive before the inevitable victory. Covers the second phase of my plan to become a commercial airline pilot.
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
              <div className="relative h-full bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-xs text-primary font-medium">{project.status}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent" />
                    Key Achievements
                  </p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aviation;
