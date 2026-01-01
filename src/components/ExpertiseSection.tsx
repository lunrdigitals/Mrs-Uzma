import { AnimateOnScroll } from "./AnimateOnScroll";
import { Code, Cpu, Cloud, Database, GitBranch, Award } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Python Programming",
    description: "Data structures, algorithms, and application development using Python.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "DDCO",
    description: "Digital Design & Computer Organization fundamentals and architecture.",
    color: "accent",
  },
  {
    icon: GitBranch,
    title: "ADA",
    description: "Analysis & Design of Algorithms for optimized problem solving.",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Cloud infrastructure, services, and deployment strategies.",
    color: "accent",
  },
  {
    icon: Database,
    title: "Data Structures",
    description: "Comprehensive understanding of data organization and manipulation.",
    color: "primary",
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding bg-academic-cream">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Qualifications & Expertise
            </p>
            <h2 className="heading-secondary mb-4">Technical Proficiency</h2>
            
            {/* M.Tech Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">M.Tech</span>
              <span className="text-muted-foreground">Master of Technology</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <AnimateOnScroll
              key={skill.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="card-academic h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center transition-colors duration-300 ${
                  skill.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20" 
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}>
                  <skill.icon className={`w-7 h-7 ${
                    skill.color === "primary" ? "text-primary" : "text-accent"
                  }`} />
                </div>
                <h3 className="heading-tertiary text-lg mb-2">{skill.title}</h3>
                <p className="text-body-sm">{skill.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
