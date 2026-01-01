import { AnimateOnScroll } from "./AnimateOnScroll";
import { BookOpen, Code, Cpu, Cloud, Database, GitBranch } from "lucide-react";

const subjects = [
  {
    name: "Python Programming",
    icon: Code,
    topics: ["Data Types & Structures", "Object-Oriented Programming", "File Handling", "Libraries & Frameworks"],
  },
  {
    name: "Digital Design & Computer Organization",
    icon: Cpu,
    topics: ["Digital Logic Circuits", "Computer Architecture", "Memory Systems", "I/O Organization"],
  },
  {
    name: "Analysis & Design of Algorithms",
    icon: GitBranch,
    topics: ["Algorithm Complexity", "Sorting & Searching", "Dynamic Programming", "Graph Algorithms"],
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    topics: ["Cloud Architecture", "Virtualization", "Cloud Services", "Deployment Models"],
  },
  {
    name: "Data Structures",
    icon: Database,
    topics: ["Arrays & Linked Lists", "Trees & Graphs", "Hashing", "Advanced Structures"],
  },
];

export const SubjectsSection = () => {
  return (
    <section id="subjects" className="section-padding bg-academic-warm">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Academic Curriculum
            </p>
            <h2 className="heading-secondary mb-4">Teaching & Subjects</h2>
            <p className="text-body max-w-2xl mx-auto">
              Comprehensive instruction in core computer science and engineering disciplines, 
              preparing students for academic excellence and industry readiness.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <AnimateOnScroll
              key={subject.name}
              animation="fade-in-up"
              delay={index * 100}
            >
              <div className="card-academic h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <subject.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary text-lg leading-tight">{subject.name}</h3>
                  </div>
                </div>

                <div className="pl-16">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className="text-accent" />
                    <span className="text-sm font-medium text-accent">Key Topics</span>
                  </div>
                  <ul className="space-y-2">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
