import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";

type Props = {};

export default function ProjectsSection({ }: Props) {
  return (
    <SectionWrapper id="projects">
      <div className="h-full flex flex-col max-w-7xl mx-auto">
        <SectionHeading title="Projects" />

        <div className="py-3 flex-1 sm:flex-none flex gap-3 w-full overflow-x-auto snap-x snap-mandatory">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => (
            <div className="flex flex-col bg-stone-800 h-full min-w-full sm:min-w-[22rem] rounded-xl snap-center">
              {/* The preview image of app */}
              <img src="/demoscreenshot.png" className="w-full rounded-t-[inherit]" />

              <div className="p-5 flex flex-col flex-1 justify-evenly gap-3.5">
                {/* App title */}
                <h1 className="uppercase text-yellow-500 text-lg tracking-wider">Adiqr - Qrcode generator and scanner</h1>

                {/* App tags */}
                <div className="flex flex-wrap gap-1">
                  {["ReactJS", "StyledComponents", "Vercel"].map((tag) =>
                    <span className="px-2 py-1 text-xs tracking-wider rounded-md text-gray-200 bg-stone-700">{tag}</span>
                  )}
                </div>

                {/* App description */}
                <p className="text-gray-400 tracking-wider">This is a react web app which enables it's user to scan qrcodes to get the value embed within it or to generate qrcodes for a specified value with alterable qrcode sizes</p>

                {/* App links */}
                <div className="mt-1 flex flex-col gap-1.5">
                  <Link href="#" target="_blank" className="flex gap-1.5 items-center text-indigo-300">
                    {/* Github repo */}
                    <Image src="/github.svg" alt="Github" height={20} width={20} />
                    <span>View github repository</span>
                  </Link>

                  {/* Live Demo */}
                  <Link href="#" target="_blank" className="flex gap-2 ml-0.5 items-center text-indigo-300">
                    <Image src="/openlink.svg" alt="Link" height={17} width={15.5} />
                    <span>View live app</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
