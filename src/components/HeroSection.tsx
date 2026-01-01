import { ArrowDown, Briefcase, Mail } from "lucide-react";
import profileImage from "@/assets/uzma-profile.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-primary mb-4 animate-fade-in-up opacity-0-initial delay-100">
              Academic Professional
            </p>
            
            <h1 className="heading-primary mb-6 animate-fade-in-up opacity-0-initial delay-200">
              Mrs. Uzma
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-foreground/80 mb-4 animate-fade-in-up opacity-0-initial delay-300">
              Educator • Technical Mentor • HOD
            </p>
            
            <p className="text-body max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up opacity-0-initial delay-400">
              With 5.5 years of dedicated experience in technical education, I bring expertise in 
              Python Programming, Cloud Computing, and Computer Organization. As a former Head of 
              Department and Professor, I am committed to nurturing future engineers through 
              clarity, mentorship, and real-world application.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0-initial delay-500">
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <Briefcase size={18} />
                View Experience
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/20 text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <Mail size={18} />
                Contact
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-scale-in opacity-0-initial delay-300">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-float" />
              <div className="absolute inset-0 rounded-full border border-accent/30 scale-125" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elevated border-4 border-background">
                <img
                  src={profileImage}
                  alt="Mrs. Uzma - Academic Professional and Technical Mentor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
};
