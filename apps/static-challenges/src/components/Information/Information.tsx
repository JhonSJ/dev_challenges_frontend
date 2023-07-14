import React from "react";
import { InformationProps } from "./Information.types";

const Information: React.FC<InformationProps> = ({ title, href }) => {
  return (
    <p className="text-sm m-0 py-6 text-[#BDBDBD] text-center">
      created by{" "}
      <a className="text-sm font-bold text-[#333333]" href={href} target="_blank">
        {title}
      </a>{" "}
      - devChallenges.io
    </p>
  );
};

export default Information;
