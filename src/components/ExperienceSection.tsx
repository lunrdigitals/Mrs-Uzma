import { AnimateOnScroll } from "./AnimateOnScroll";
import { Building2, Users, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Head of Department",
    institution: "Polytechnic Institution",
    duration: "2.5 Years",
    type: "Leadership Role",
    description: "Led the department with a focus on curriculum development, faculty coordination, and student success. Implemented innovative teaching methodologies and mentored junior faculty members.",
    highlights: [
      "Curriculum redesign and modernization",
      "Faculty development initiatives",
      "Student career guidance programs",
      "Industry collaboration projects",
    ],
    icon: Building2,
    color: "primary",
  },
  {
    title: "Professor",
    institution: "Engineering College",
    duration: "3 Years",
    type: "Teaching Position",
    description: "Delivered comprehensive instruction in core computer science subjects, emphasizing practical applications and industry relevance. Guided students through projects and research initiatives.",
    highlights: [
      "Core subject instruction",
      "Laboratory session supervision",
      "Project mentorship",
      "Academic research guidance",
    ],
    icon: Users,
    color: "accent",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-section">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Professional Journey
            </p>
            <h2 className="heading-secondary mb-4">Experience Timeline</h2>
            <p className="text-body max-w-2xl mx-auto">
              5.5 years of dedicated service in technical education and academic leadership.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <AnimateOnScroll
              key={exp.title}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 200}
            >
              <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-background ${
                    exp.color === "primary" ? "bg-primary" : "bg-accent"
                  }`} />
                </div>

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}>
                  <div className="card-academic">
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        exp.color === "primary" ? "bg-primary/10" : "bg-accent/10"
                      }`}>
                        <exp.icon className={`w-6 h-6 ${
                          exp.color === "primary" ? "text-primary" : "text-accent"
                        }`} />
                      </div>
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          exp.color === "primary" 
                            ? "bg-primary/10 text-primary" 
                            : "bg-accent/10 text-accent"
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="heading-tertiary mb-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium mb-2">{exp.institution}</p>
                    
                    <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <Calendar size={14} />
                      {exp.duration}
                    </div>

                    <p className="text-body-sm mb-4">{exp.description}</p>

                    <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className={`flex items-center gap-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}>
                          <ChevronRight size={14} className="text-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
