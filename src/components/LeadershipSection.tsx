import { AnimateOnScroll } from "./AnimateOnScroll";
import { Award, Users, TrendingUp, Lightbulb, Target, Star } from "lucide-react";

const achievements = [
  {
    icon: Users,
    title: "Department Leadership",
    description: "Successfully led the department as HOD, overseeing curriculum development, faculty coordination, and student affairs for 2.5 years.",
  },
  {
    icon: Target,
    title: "Academic Mentoring",
    description: "Guided hundreds of students through their academic journey, providing personalized mentorship and career counseling.",
  },
  {
    icon: TrendingUp,
    title: "Institutional Growth",
    description: "Contributed to institutional development through innovative teaching methods and industry-aligned curriculum updates.",
  },
  {
    icon: Lightbulb,
    title: "Curriculum Innovation",
    description: "Introduced practical, hands-on approaches to technical education, bridging the gap between theory and industry practice.",
  },
];

const stats = [
  { value: "5.5+", label: "Years Experience" },
  { value: "500+", label: "Students Mentored" },
  { value: "5", label: "Core Subjects" },
  { value: "2", label: "Leadership Roles" },
];

export const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding bg-gradient-section">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Impact & Recognition
            </p>
            <h2 className="heading-secondary mb-4">Leadership & Achievements</h2>
          </div>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll animation="scale-in" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/10"
              >
                <p className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AnimateOnScroll
              key={achievement.title}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
              delay={index * 100}
            >
              <div className="card-academic flex gap-4 group hover:-translate-y-1 transition-transform duration-300">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                  <achievement.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="heading-tertiary text-lg mb-2">{achievement.title}</h3>
                  <p className="text-body-sm">{achievement.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Recognition Banner */}
        <AnimateOnScroll animation="fade-in-up" delay={400}>
          <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-lg font-medium text-foreground mb-2">
              Committed to Excellence in Education
            </p>
            <p className="text-body-sm max-w-2xl mx-auto">
              Dedicated to fostering the next generation of engineers and technology 
              professionals through quality education, mentorship, and academic leadership.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
