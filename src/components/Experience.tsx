import { Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Volunteer Software Developer",
      company: "I Care Center",
      period: "Jun 2025 - Present",
      description: "Improved OBS Remote for livestreams, built a scalable church site and app, and managed agile workflows with ministry teams"
    },
    {
      title: "Volunteer Production Staff & QA Assistant",
      company: "I Care Center",
      period: "Jan 2024 - Present",
      description: "Operated and QA'd ProPresenter for live and online services, syncing media in real time and resolving tech issues with worship and media teams."
    },
    {
      title: "Data Encoder & Macro Programmer | Internship",
      company: "ACE Medical Centre - Baypointe",
      period: "2025 - 2025",
      description: "Interned about encoding patient data and created macros to improve encoding efficiency."
    },
    {
      title: "Data Encoder & Bookkeeper",
      company: "TDA Car Rental",
      period: "2023 - Present | Working Student",
      description: "Created responsive web interfaces and improved user experience across multiple projects."
    }
  ];

  return (
    <section id="experience" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey across technology, ministry, and healthcare sectors
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500">
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative group/card">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover/card:opacity-100 transition-all duration-500" />
                  <div className="relative bg-secondary/20 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-500">
                    {/* Timeline dot and line */}
                    <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    {index < experiences.length - 1 && (
                      <div className="absolute -left-0.5 top-12 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent rounded-full"></div>
                    )}
                    
                    <div className="ml-6">
                      <div className="flex flex-col gap-2 mb-3">
                        <h4 className="text-lg font-bold text-foreground group-hover/card:text-primary transition-colors duration-300 leading-tight">
                          {exp.title}
                        </h4>
                        <p className="text-base text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-accent font-medium bg-accent/10 px-2 py-1 rounded-md inline-block w-fit">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="relative bg-card/40 backdrop-blur-md border border-border rounded-lg p-6 hover:border-accent/50 transition-all duration-500">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Key Skills Developed</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Software Development",
                "Quality Assurance", 
                "Live Production",
                "Data Management",
                "Team Collaboration",
                "Technical Support",
                "Process Optimization",
                "Agile Workflows"
              ].map((skill, index) => (
                <div
                  key={skill}
                  className="group/skill bg-secondary/30 backdrop-blur-sm rounded-md p-3 text-center hover:bg-secondary/50 transition-all duration-300 border border-border/30 hover:border-primary/50"
                >
                  <p className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};