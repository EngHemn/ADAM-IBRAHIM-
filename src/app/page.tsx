import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
