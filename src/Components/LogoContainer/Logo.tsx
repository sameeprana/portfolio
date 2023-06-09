import React from "react";
import { TbSquareLetterM } from "react-icons/tb";
import { Link } from "react-router-dom";
import image from "/src/assets/portfolio.png";
const Logo = (props: { otherSection?: boolean }) => {
  const { otherSection } = props;
  return (
    <Link
      to="/"
      className={`h-[55px] w-[60px] bg-contain flex flex-row justify-start items-center text-deep-blue ${
        otherSection && "dark:text-white"
      } `}>
      {/* MON? */}
      <TbSquareLetterM size={45} />
    </Link>
  );
};

export default Logo;
