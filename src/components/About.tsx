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
    <section id="about" className="min-h-screen py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent inline-block animate-fade-in-up">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  I'm an autistic developer with a love for creating beautiful, functional, and user-centered 
                  digital experiences. With a background in both frontend and backend development, I enjoy 
                  bringing ideas to life through clean, efficient code and thoughtful design. I also am aiming 
                  to become an airline captain, combining my passion for aviation with my technical skills, 
                  combined with my passion for flying and travelling, ensuring a smooth, pleasant, and lovely 
                  experience for users and passengers.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  Currently pursuing my degree in Computer Science, as the first step towards my goal of becoming a
                  commercial airline pilot. I am dedicated to continuous learning and growth, both in my technical
                  skills and my aviation knowledge.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  When I'm not in the cockpit or coding, I'm exploring new technologies, contributing 
                  to open-source projects, and staying current with industry best practices.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
              ].map((social, index) => (
                <button
                  key={social.label}
                  className="group relative p-4 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
                  style={{
                    animation: `fade-in-scale 0.5s ease-out forwards`,
                    animationDelay: `${0.4 + index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="group relative"
                style={{
                  animation: `fade-in-up 0.8s ease-out forwards`,
                  animationDelay: `${0.3 + index * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700" />
                <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 flex items-start gap-4">
                  <div className="text-primary group-hover:text-accent transition-colors duration-300 group-hover:scale-110 transform-gpu will-change-transform transition-transform flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience, Education, and Interests - Compact Layout */}
        <div className="mt-32 grid lg:grid-cols-3 gap-8">
          {/* Experience Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Experience</h3>
              </div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={exp.title} className="border-l-2 border-primary/30 pl-4 relative">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 bg-primary rounded-full"></div>
                    <h4 className="text-sm font-semibold text-foreground leading-tight">{exp.title}</h4>
                    <p className="text-xs text-primary font-medium">{exp.company}</p>
                    <p className="text-xs text-accent mb-1">{exp.period}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={edu.degree} className="border-l-2 border-primary/30 pl-4 relative">
                    <div className="absolute -left-1.5 top-1 w-3 h-3 bg-primary rounded-full"></div>
                    <h4 className="text-sm font-semibold text-foreground leading-tight">{edu.degree}</h4>
                    <p className="text-xs text-primary font-medium">{edu.school}</p>
                    <p className="text-xs text-accent mb-1">{edu.period}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Interests</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={interest.label}
                    className="group/interest relative bg-secondary/20 backdrop-blur-sm rounded-lg p-3 hover:bg-secondary/40 transition-all duration-300 text-center border border-border/30 hover:border-primary/50"
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
    </section>
  );
};
