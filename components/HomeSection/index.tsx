import React from "react";
import SectionWrapper from "../SectionWrapper";
import HomeBackgroundCircles from "./HomeBackgroundCircles";
import HomeAvatar from "./HomeAvatar";
import HomeRole from "./HomeRole";
import HomeTyper from "./HomeTyper";
import HomeNavLinks from "./HomeNavLinks";
import { NavLink } from "@/utils/navigation/typings";

type Props = {
  role: string;
  imgSrc: string;
  typerTexts: string[];
  navLinks: NavLink[];
};

export default function HomeSection({ role, imgSrc, typerTexts, navLinks }: Props) {
  return (
    <SectionWrapper id="home" xPadding={false}>
      <div className="h-full overflow-hidden flex items-center justify-center">
        <HomeBackgroundCircles />

        <div className="absolute flex flex-col gap-2 justify-center items-center rounded-full">
          <HomeAvatar src={imgSrc} />
          <HomeRole text={role} />
          <HomeTyper texts={typerTexts} />
          <HomeNavLinks links={navLinks} />
        </div>
      </div>
    </SectionWrapper>
  );
};
