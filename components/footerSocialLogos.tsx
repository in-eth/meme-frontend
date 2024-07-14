import React from "react";
import { IconType } from "react-icons";
import { BiPaperPlane } from "react-icons/bi";

interface FooterSocialProps {
  logo: IconType;
}

const FooterSocial: React.FC<FooterSocialProps> = ({ logo: Logo }) => {
  return (
    <div
      className={`bg-white rounded-full p-2 ${Logo === BiPaperPlane ? "text-sm" : ""}`}
    >
      <Logo />
    </div>
  );
};

export default FooterSocial;
