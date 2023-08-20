import React from "react";
import { PrimaryButtonType } from "../../Configs/types";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, path }: PrimaryButtonType) => {
   return (
      <Link to={path} className=" px-5 transition-all duration-[2000] ease-in-out py-2 inline-block text-xl  border-0 bg-secondary text-white capitalize rounded-lg hover:bg-green-600 ">
         <button className="tracking-[8px] hover:tracking-[3px] transition-all duration-[2000] ease-in-out">{children}</button>
      </Link>
   );
};

export default PrimaryButton;
