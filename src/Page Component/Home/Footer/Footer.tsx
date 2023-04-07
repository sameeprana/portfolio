import React from "react";
import SocialMediaIcons from "../../../Components/SocialMediaIcons/SocialMediaIcons";
import {
  AiFillGithub,
  GrLinkedinOption,
  AiOutlineInstagram,
  BsFacebook,
  ImTwitter,
} from "react-icons/all";
import { Link } from "react-router-dom";
type FooterProps = {
  footerText: String;
};
const Footer = (props: FooterProps) => {
  const { footerText } = props;
  return (
    <div className="flex flex-col gap-1 min-h-[12rem] w-full justify-center items-center text-[18px] font-bold relative dark:bg-deep-blue bg-white text-deep-blue dark:text-white ">
      <span>{footerText}</span>
      <SocialMediaIcons
        // @ts-ignore
        clasName="order-2"
        socialMediaLinks={
          <>
            <Link to="https://www.github.com" target="_blank">
              <AiFillGithub className=" transition duration-200 " size={35} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <GrLinkedinOption size={32} />
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              <BsFacebook size={32} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <AiOutlineInstagram size={35} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <ImTwitter size={32} />
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Footer;