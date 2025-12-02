import { Mail, Linkedin, Github, Award, Target, Zap, GraduationCap, Heart, Code, Plane, Camera, Music, BookOpen, Bed, Download } from "lucide-react";
import resumePDF from "../assets/adriaan resume.pdf";

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
      description: "Rapidly adapting to new technologies and methodologies in the industry",
    },
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

        {/* Main Content Grid - Optimized Layout */}
        <div className="grid gap-6">
          {/* Bio Section - Full width with social icons on the right */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="flex-1 pr-4">
                    <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed mb-4">
                      I'm an autistic developer with a love for creating beautiful, functional, and user-centered 
                      digital experiences. With a background in both frontend and backend development, I enjoy 
                      bringing ideas to life through clean, efficient code and thoughtful design. I also am aiming 
                      to become an airline captain, combining my passion for aviation with my technical skills, 
                      combined with my passion for flying and travelling, ensuring a smooth, pleasant, and lovely 
                      experience for users and passengers.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed mb-4">
                      Currently pursuing my degree in Computer Science, as the first step towards my goal of becoming a
                      commercial airline pilot. I am dedicated to continuous learning and growth, both in my technical
                      skills and my aviation knowledge.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg text-foreground/90 leading-relaxed">
                      When I'm not in the cockpit or coding, I'm exploring new technologies, contributing 
                      to open-source projects, and staying current with industry best practices.
                    </p>
                  </div>
                  
                  {/* Social Links - Compact right side */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {[
                      { icon: <Mail className="w-4 h-4" />, label: "Email" },
                      { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                      { icon: <Github className="w-4 h-4" />, label: "GitHub" },
                    ].map((social, index) => (
                      <button
                        key={social.label}
                        className="group relative p-2.5 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-secondary transition-all duration-300 hover:scale-110 border border-border hover:border-primary/50"
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

            {/* Highlights Section - Below bio, horizontal layout */}
            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((highlight, index) => (
                <div key={highlight.title} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-30 blur-lg transition-all duration-700" />
                  <div className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-500 flex items-start gap-3">
                    <div className="text-primary group-hover:text-accent transition-colors duration-300 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base lg:text-lg font-bold mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {highlight.title}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Interests Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={edu.degree} className="border-l-2 border-primary/30 pl-3 relative">
                      <div className="absolute -left-1 top-0.5 w-2 h-2 bg-primary rounded-full"></div>
                      <h4 className="text-sm md:text-base font-semibold text-foreground leading-tight">{edu.degree}</h4>
                      <p className="text-xs md:text-sm text-primary font-medium">{edu.school}</p>
                      <p className="text-xs md:text-sm text-accent mb-1">{edu.period}</p>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="relative bg-card/60 backdrop-blur-md border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Interests</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interests.map((interest, index) => (
                    <div
                      key={interest.label}
                      className="group/interest relative bg-secondary/20 backdrop-blur-sm rounded-lg p-4 hover:bg-secondary/40 transition-all duration-300 text-center border border-border/30 hover:border-primary/50 min-h-[80px] flex flex-col items-center justify-center"
                    >
                      <div className="text-primary group-hover/interest:text-accent transition-colors duration-300 mb-2 flex justify-center">
                        {interest.icon}
                      </div>
                      <p className="text-xs md:text-sm font-medium text-foreground group-hover/interest:text-primary transition-colors duration-300 text-center">
                        {interest.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center mt-12">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-50 blur-xl transition-all duration-700" />
              <a
                href={resumePDF}
                download="Adriaan_Dimate_Resume.pdf"
                className="relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-primary/20 backdrop-blur-sm"
              >
                <Download className="w-5 h-5" />
                <span className="text-base md:text-lg">Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
