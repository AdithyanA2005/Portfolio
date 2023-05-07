import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  handleBtnClick: () => void;
  icon: "right" | "left";
};

export default function ScrollBtn({ icon, handleBtnClick }: Props) {
  return (
    <button
      onClick={handleBtnClick}
      className={`${icon === "left" ? "-mr-5 xl:-mr-7" : "-ml-5 xl:-ml-7"} z-10 h-12 xl:h-14 w-12 xl:w-14 grid place-items-center bg-slate-600 text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition-all`}
    >
      <FontAwesomeIcon icon={icon === "right" ? faAngleRight : faAngleLeft} />
    </button>
  );
};
