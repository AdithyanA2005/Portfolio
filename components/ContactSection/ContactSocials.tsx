import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/utils/api/typings";

type Props = {
  socials: Social[] | undefined;
};

export default function ontactSocials({ socials }: Props) {
  return (
    <div>
      <ul className="flex items-center gap-4">
        {socials && (
          <li>
            <span className="text-yellow-500 bg-black bg-opacity-60 py-2 px-2.5 rounded-lg">
              Socials
            </span>
          </li>
        )}

        {socials?.map((social) => (
          <li className="group relative flex h-9 aspect-square rounded-full hover:scale-110 transition-all" key={social._id}>
            <SocialIcon
              fgColor="rgba(209, 213, 219, 0.8)"
              bgColor="rgba(0, 0, 0, 0.6)"
              style={{ height: "100%", width: "100%" }}
              target="_blank"
              url={social.url}
            />

            <span className="tooltip">
              View {social.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
