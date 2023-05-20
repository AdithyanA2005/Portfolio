import React from "react";
import SectionWrapper from "../SectionWrapper";
import SkewRect from "../SkewRect";
import FooterNavLinks from "./FooterNavLinks";
import { NavLink } from "@/utils/navigation/typings";
import { Social } from "@/utils/api/typings";
import FooterSocials from "./FooterSocials";

type Props = {
  navLinks: NavLink[];
  socials: Social[] | undefined;
  email: string | undefined;
};

export default function Footer({ navLinks, socials, email }: Props) {
  return (
    <SectionWrapper id="footer">
      <footer className="p-4 md:py-8 z-10 absolute bottom-0 w-full max-w-7xl left-1/2 -translate-x-1/2 rounded-lg bg-black bg-opacity-40">
        <div className="1flex items-center justify-between w-full space-y-5">
          <FooterNavLinks navLinks={navLinks} />
          <FooterSocials socials={socials} emailLink={email ? `mailto:${email}` : undefined} />
        </div>
        <div>
          <hr className="border-gray-700 sm:mx-auto my-6 " />
          <span className="block text-sm text-center text-gray-400">Created By Adithyan A</span>
        </div>
      </footer>

      <SkewRect from="right" />
    </SectionWrapper>
  );
}
