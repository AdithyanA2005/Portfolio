import NavbarLinks from "./NavbarLinks";
import NavbarSpecialBtn from "./NavbarSpecialBtn";
import { NavLink } from "@/utils/navigation/typings";

type Props = {
  navLinks: NavLink[];
  specialBtnText?: string;
  specialBtnLink?: string;
  specialBtnInNewTab?: boolean;
};

export default function Navbar({ navLinks, specialBtnText, specialBtnLink, specialBtnInNewTab }: Props) {
  return (
    <header className="fixed top-0 z-40 h-16 w-full bg-inherit opacity-70 backdrop-blur-lg border-b border-yellow-500">
      <nav className="px-5 h-full max-w-7xl mx-auto flex justify-center md:justify-between items-center ">
        <NavbarLinks links={navLinks} />
        <NavbarSpecialBtn
          text={specialBtnText || ""}
          href={specialBtnLink || ""}
          inNewTab={specialBtnInNewTab || true}
        />
      </nav>
    </header>
  );
};

