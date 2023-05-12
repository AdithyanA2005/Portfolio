import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'
import { GetStaticProps } from "next";
import { Blog, PageInfo, Project, Skill, Social } from "@/utils/api/typings";
import { fetchBlogs, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/utils/api/fetch";
import { urlForImage } from "@/sanity/lib/image";
import { navLinks } from "@/utils/navigation";
import BlogsSection from "@/components/BlogsSection";

type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  socials: Social[];
  skills: Skill[];
  blogs: Blog[];
};

export default function Home({ pageInfo, projects, socials, skills, blogs }: Props) {
  return (
    <div className="bg-gray-1000 h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-auto">
      <Head>
        <title>Adithyan's Portfolio</title>
      </Head>

      <Navbar
        navLinks={navLinks}
        specialBtnText={pageInfo.specialBtnText}
        specialBtnLink={pageInfo.specialBtnUrl}
        specialBtnInNewTab={pageInfo.specialBtnInNewTab}
      />

      <HomeSection
        navLinks={navLinks.filter(link => link.title !== "Home")}
        role={pageInfo.role}
        imgSrc={urlForImage(pageInfo.heroImage).url()}
        typerTexts={pageInfo.heroTyper}
      />

      <AboutSection
        aboutMe={pageInfo.about}
        imgSrc={urlForImage(pageInfo.aboutImage).url()}
      />

      <SkillsSection
        skills={skills}
      />

      <ProjectsSection
        projects={projects}
      />

      <BlogsSection
        blogs={blogs}
        blogsLink={pageInfo.blogsUrl}
      />

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const blogs: Blog[] = await fetchBlogs();

  return {
    props: {
      pageInfo,
      projects,
      socials,
      skills,
      blogs
    },
    revalidate: 10,
  };
};
