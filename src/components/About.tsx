import { Mail, Linkedin, Github, Award, Target, Zap, Briefcase, GraduationCap, Heart, Code, Plane, Camera, Music, BookOpen, Bed } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description: "Committed to excellence in every endeavor, from cockpit to codebase",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Detail-Oriented",
      description: "Precision and accuracy are paramount in both aviation and software",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quick Learner",
      description: "Rapidly adapting to new technologies and methodologies",
    },
  ];

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

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Gordon College",
      period: "2023 - Present",
      description: "Focused on software engineering, algorithms, and data structures."
    },
    {
      degree: "Bachelor of Science in Air Transportation (future)",
      school: "(unknown)",
      period: "2029 - 2034 (tentative)",
      description: "Focuses on flying and maintaining planes."
    }
  ];

  const interests = [
    { icon: <Code className="w-6 h-6" />, label: "Coding" },
    { icon: <Plane className="w-6 h-6" />, label: "Travelling" },
    { icon: <Camera className="w-6 h-6" />, label: "Photography" },
    { icon: <Music className="w-6 h-6" />, label: "Music" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Reading" },
    { icon: <Bed className="w-6 h-6" />, label: "Sleeping" }
  ];

  return (
    <section id="about" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block">
            About Me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bio Section - Now takes full width (3 columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                      I'm an autistic developer with a love for creating beautiful, functional, and user-centered 
                      digital experiences. With a background in both frontend and backend development, I enjoy 
                      bringing ideas to life through clean, efficient code and thoughtful design.
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                      Currently pursuing my degree in Computer Science, as the first step towards my goal of becoming a
                      commercial airline pilot. I am dedicated to continuous learning and growth, both in my technical
                      skills and my aviation knowledge.
                    </p>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      When I'm not in the cockpit or coding, I'm exploring new technologies, contributing 
                      to open-source projects, and staying current with industry best practices.
                    </p>
                  </div>
                  
                  {/* Social Links - moved to right side */}
                  <div className="lg:col-span-1 flex lg:flex-col gap-3 justify-center lg:justify-start items-center lg:items-end">
                    {[
                      { icon: <Mail className="w-4 h-4" />, label: "Email" },
                      { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                      { icon: <Github className="w-4 h-4" />, label: "GitHub" },
                    ].map((social, index) => (
                      <button
                        key={social.label}
                        className="group relative p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
                      >
                        <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                          {social.icon}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Section - moved below bio */}
            <div className="grid md:grid-cols-3 gap-3">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700" />
                  <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-500 flex items-start gap-3">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Experience, Education, Interests - Takes full width (3 columns) */}
          <div className="lg:col-span-3 grid gap-4">
            {/* Experience */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Experience</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {experiences.map((exp, index) => (
                    <div key={exp.title} className="border-l-2 border-primary/30 pl-3 relative">
                      <div className="absolute -left-1 top-0.5 w-2 h-2 bg-primary rounded-full"></div>
                      <h4 className="text-xs font-semibold text-foreground leading-tight">{exp.title}</h4>
                      <p className="text-xs text-primary font-medium">{exp.company}</p>
                      <p className="text-xs text-accent">{exp.period}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education & Interests Row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Education */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-3">
                    {education.map((edu, index) => (
                      <div key={edu.degree} className="border-l-2 border-primary/30 pl-3 relative">
                        <div className="absolute -left-1 top-0.5 w-2 h-2 bg-primary rounded-full"></div>
                        <h4 className="text-xs font-semibold text-foreground leading-tight">{edu.degree}</h4>
                        <p className="text-xs text-primary font-medium">{edu.school}</p>
                        <p className="text-xs text-accent">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Interests</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {interests.map((interest, index) => (
                      <div
                        key={interest.label}
                        className="group/interest relative bg-secondary/20 backdrop-blur-sm rounded-lg p-2 hover:bg-secondary/40 transition-all duration-300 text-center border border-border/30 hover:border-primary/50"
                      >
                        <div className="text-primary group-hover/interest:text-accent transition-colors duration-300 mb-1 flex justify-center">
                          {interest.icon}
                        </div>
                        <p className="text-xs font-medium text-foreground group-hover/interest:text-primary transition-colors duration-300">
                          {interest.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
