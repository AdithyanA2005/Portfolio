import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div>
    <div className="bg-gray-1000 h-screen snap-y snap-mandatory scroll-smooth overflow-y-auto overflow-x-hidden z-0">
      <Head>
        <title>Adithyan's Portfolio</title>
      </Head>

      <Navbar />
      <HomeSection />

      {/* About Section */}
      {/* <AboutSection /> */}

      {/* Skills Section */}
      {/* <SkillsSection /> */}

      {/* Experience Section */}
      {/* <ExperienceSection /> */}

      {/* Projects Section */}
      {/* <ProjectsSection /> */}

      {/* Contact Me */}
      {/* <ContactSection /> */}
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};
