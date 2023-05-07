import React, { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkewRect from "../SkewRect";
import ProjectItem from "./ProjectItem";
import ScrollBtn from "./ScrollBtn";

type Props = {};

export default function ProjectsSection({ }: Props) {
  const projects = [
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel", "Firebase", "TailwindCss"], githubLink: "#1", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#2", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#3", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#4", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#5", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#6", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#7", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#8", liveLink: "#" },
    { img: "/demoscreenshot.png", title: "Adiqr - Qrcode generator and scanner", desc: "This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes", tags: ["ReactJS", "StyledComponents", "Vercel"], githubLink: "#9", liveLink: "#" },
  ];

  // Reference to the div containing different projects
  const snapContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to next project 
  const scrollToNext = () => {
    snapContainerRef.current?.scrollBy({ left: snapContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  // Function to scroll to previous project
  const scrollToPrevious = () => {
    snapContainerRef.current?.scrollBy({ left: -snapContainerRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="z-10 relative max-h-full flex items-center overflow-x-visible overflow-y-hidden">
          {/* Scroll to previous */}
          <ScrollBtn handleBtnClick={scrollToPrevious} icon="left" />

          {/* Snap container containing projects */}
          <div
            ref={snapContainerRef}
            className="flex gap-3 max-h-full h-screen w-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory"
          >
            {projects.map((project) => (
              <ProjectItem
                key={project.githubLink}
                imgSrc={project.img}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>

          {/* Scroll to next */}
          <ScrollBtn handleBtnClick={scrollToNext} icon="right" />
        </div>
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
