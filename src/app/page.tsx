import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col selection:bg-blue-100 selection:text-blue-900">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
