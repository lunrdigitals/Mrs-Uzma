import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SubjectsSection } from "@/components/SubjectsSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ExperienceSection />
        <SubjectsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
