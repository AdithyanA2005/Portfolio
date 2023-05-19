import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";

type Props = {
  email: string | undefined;
  address: string | undefined;
};

export default function ContactInfo({ email, address }: Props) {
  return (
    <div className="text-gray-300 space-y-3 text-lg">
      {email && (
        <div className="flex items-center space-x-5">
          <FontAwesomeIcon icon={faEnvelope} className="h-7 w-7 text-yellow-500" />
          <Link href={`mailto:${email}`}>{email}</Link>
        </div>
      )}

      {address && (
        <div className="flex items-center space-x-5">
          <FontAwesomeIcon icon={faMapLocation} className="h-7 w-7 text-yellow-500" />
          <p>{address}</p>
        </div>
      )}
    </div>
  );
}
