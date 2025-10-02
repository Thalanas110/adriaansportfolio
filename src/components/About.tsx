import { Mail, Linkedin, Github, Award, Target, Zap } from "lucide-react";

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
                  Currently pursuing my degree in Computer Science, as the first step
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
      </div>
    </section>
  );
};
