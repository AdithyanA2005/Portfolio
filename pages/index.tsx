import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <div className="bg-gray-1000 h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-auto">
      <Head>
        <title>Adithyan's Portfolio</title>
      </Head>

      <Navbar />
      <HomeSection />
      <AboutSection />


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
