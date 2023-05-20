import React from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/utils/api/typings";

type Props = {
  socials: Social[] | undefined;
  emailLink: string | undefined;
};

export default function FooterSocials({ socials, emailLink }: Props) {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socials?.map((social) => (
        <li className="group relative flex h-9 aspect-square rounded-full hover:scale-110 transition-all" key={social._id}>
          <SocialIcon
            fgColor="rgba(209, 213, 219, 0.8)"
            bgColor="transparent"
            style={{ height: "100%", width: "100%" }}
            target="_blank"
            url={social.url}
          />

          <span className="tooltip">
            View {social.title}
          </span>
        </li>
      ))}

      {emailLink && (
        <li className="group relative flex h-9 aspect-square rounded-full hover:scale-110 transition-all">
          <SocialIcon
            fgColor="rgba(209, 213, 219, 0.8)"
            bgColor="transparent"
            style={{ height: "100%", width: "100%" }}
            target="_blank"
            url={emailLink}
          />

          <span className="tooltip">
            Send Email
          </span>
        </li>
      )}
    </ul>
  );
}
