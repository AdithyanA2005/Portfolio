import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'
import { GetStaticProps } from "next";
import { fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/utils/api/fetch";
import { PageInfo, Project, Skill, Social } from "@/utils/api/typings";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  socials: Social[];
  skills: Skill[];
};

export default function Home({ pageInfo, projects, socials, skills }: Props) {
  return (
    <div className="bg-gray-1000 h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-auto">
      <Head>
        <title>Adithyan's Portfolio</title>
      </Head>

      <Navbar
        specialBtnText={pageInfo.specialBtnText}
        specialBtnLink={pageInfo.specialBtnUrl}
        specialBtnInNewTab={pageInfo.specialBtnInNewTab}
      />

      <HomeSection role={pageInfo.role} imgSrc={urlForImage(pageInfo.heroImage).url()} typerTexts={pageInfo.heroTyper} />
      <AboutSection aboutMe={pageInfo.about} imgSrc={urlForImage(pageInfo.aboutImage).url()} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo = await fetchPageInfo();
  const projects = await fetchProjects();
  const socials = await fetchSocials();
  const skills = await fetchSkills();

  return {
    props: {
      pageInfo,
      projects,
      socials,
      skills
    },
    revalidate: 10,
  };
};
