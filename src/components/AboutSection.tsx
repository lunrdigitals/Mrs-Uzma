import { AnimateOnScroll } from "./AnimateOnScroll";
import profileImage from "@/assets/uzma-profile.png";
import { GraduationCap, Heart, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-section">
      <div className="section-container">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              About
            </p>
            <h2 className="heading-secondary">Academic Journey</h2>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimateOnScroll animation="slide-in-left" className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={profileImage}
                  alt="Mrs. Uzma in professional setting"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </AnimateOnScroll>

          {/* Content */}
          <div className="space-y-8">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p className="text-body text-lg">
                With a Master of Technology degree and over five years of experience in 
                technical education, I have dedicated my career to shaping the minds of 
                future engineers and technology professionals. My journey spans from 
                classroom teaching to departmental leadership, providing me with a 
                comprehensive understanding of academic excellence.
              </p>
            </AnimateOnScroll>

            <div className="grid gap-6">
              <AnimateOnScroll animation="fade-in-up" delay={200}>
                <div className="card-academic flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary text-lg mb-1">Teaching Philosophy</h3>
                    <p className="text-body-sm">
                      I believe in fostering clarity, encouraging critical thinking, and 
                      bridging theoretical concepts with real-world applications to prepare 
                      students for industry challenges.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div className="card-academic flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary text-lg mb-1">Mentorship Focus</h3>
                    <p className="text-body-sm">
                      Beyond academics, I am committed to holistic student development, 
                      guiding them through career decisions and professional growth with 
                      personalized attention and support.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in-up" delay={400}>
                <div className="card-academic flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary text-lg mb-1">Leadership Vision</h3>
                    <p className="text-body-sm">
                      As Head of Department, I led initiatives to enhance curriculum 
                      relevance, foster faculty development, and create an environment 
                      conducive to academic innovation.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
