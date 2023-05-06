import React, { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import SkewRect from "../SkewRect";
import ProjectItem from "./ProjectItem";

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

  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div 
          className="z-10 bg-blue-800 py-3 flex-1 flex gap-3 w-full overflow-y-hidden overflow-x-auto snap-x snap-mandatory"
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
      </div>

      <SkewRect from="left" />
    </SectionWrapper>
  );
};
