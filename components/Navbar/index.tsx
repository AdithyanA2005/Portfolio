import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/utils/navigation";

type Props = {};

export default function Navbar({ }: Props) {
  // TODO: Fetch data from cdn
  const resumeDownloadLink = "link-to-resume";

  return (
    <header className="fixed top-0 z-40 h-16 w-full bg-inherit opacity-70 backdrop-blur-lg border-b border-yellow-500">
      <nav className="px-5 h-full max-w-7xl mx-auto flex justify-center md:justify-between items-center ">
        {/* NavLinks */}
        <motion.ul
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-1 sm:gap-6 justify-between items-center h-full px-1 overflow-x-auto"
        >
          {navLinks.map((navLink) => (
            <li key={navLink.url} >
              <Link href={navLink.url} className="px-2.5 py-2 rounded-lg text-xs uppercase tracking-widest text-gray-300 hover:text-yellow-500 font-semibold ease transition-all outline-none hover:ring hover:ring-yellow-500 focus-visible:ring focus-visible:animate-bounce focus-visible:ring-yellow-500">
                {navLink.title}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Download Resume Btn */}
        <motion.span
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link href={resumeDownloadLink} className="hidden md:block text-sm uppercase hover:scale-110 transition-all first-letter:text-xl tracking-wider px-5 py-2 font-bold text-yellow-500 hover:text-yellow-400 rounded-full outline-none focus:ring-1 ring-yellow-500">
            download resume
          </Link>
        </motion.span>
      </nav>
    </header>
  );
};

