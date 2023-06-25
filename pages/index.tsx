import Head from "next/head";
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import QualificationsSection from "@/components/QualificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import fetchBlogs from "@/utils/api/fetch/fetchBlogs";
import fetchSkills from "@/utils/api/fetch/fetchSkills";
import fetchSocials from "@/utils/api/fetch/fetchSocials";
import fetchProjects from "@/utils/api/fetch/fetchProjects";
import fetchPageInfo from "@/utils/api/fetch/fetchPageInfo";
import { urlForImage } from "@/sanity/lib/image";
import { navLinks } from "@/utils/navigation";
import { GetStaticProps } from "next";
import { Blog, PageInfo, Project, Qualification, Skill, Social } from "@/utils/api/typings";
import fetchQualifications from "@/utils/api/fetch/fetchQualifications";

type Props = {
  qualifications: Qualification[];
  pageInfo: PageInfo;
  projects: Project[];
  socials: Social[];
  skills: Skill[];
  blogs: Blog[];
};

export default function Home({ qualifications,pageInfo, projects, socials, skills, blogs }: Props) {
  return (
    <div className="scrollbar-thin xl:scrollbar scrollbar-colors bg-gray-1000 h-screen snap-y snap-mandatory scroll-smooth overflow-x-hidden overflow-y-auto">
      <Head>
        <title>{(pageInfo?.name ?? "") + " - Portfolio"}</title>
      </Head>

      <Navbar
        navLinks={navLinks}
        specialBtnText={pageInfo?.specialBtnText}
        specialBtnLink={pageInfo?.specialBtnUrl}
        specialBtnInNewTab={pageInfo?.specialBtnInNewTab}
      />

      <HomeSection
        navLinks={navLinks.filter((link) => link.title !== "Home")}
        role={pageInfo?.role}
        imgSrc={pageInfo?.heroImage ? urlForImage(pageInfo.heroImage).url() : undefined}
        typerTexts={pageInfo?.heroTyper}
      />

      <AboutSection
        aboutMe={pageInfo?.about}
        imgSrc={pageInfo?.aboutImage ? urlForImage(pageInfo.aboutImage).url() : undefined}
      />

      <SkillsSection skills={skills ?? undefined} />

      <ProjectsSection projects={projects ?? undefined} />

      <BlogsSection
        blogs={blogs ?? undefined}
        blogsLink={pageInfo?.blogsUrl}
      />

      <QualificationsSection qualifications={qualifications ?? undefined} />

      <ContactSection
        email={pageInfo?.email}
        address={pageInfo?.address}
        socials={socials ?? undefined}
      />

      <Footer 
        navLinks={navLinks} 
        socials={socials ?? undefined}
        email={pageInfo?.email}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const qualifications: Qualification[] = await fetchQualifications();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const blogs: Blog[] = await fetchBlogs();

  return {
    props: { qualifications, pageInfo, projects, socials, skills, blogs },
    revalidate: 60,
  };
};
