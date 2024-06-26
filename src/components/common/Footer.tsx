import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F5F5F5] rounded-[2.5rem] flex justify-between items-center sm:p-[3.75rem] p-6">
      <div className="flex items-center gap-2.5">
        <img src="/copyright.svg" alt="copyright" />
        <span className="font-manrope font-normal sm:text-lg sm:leading-[1.2375rem] text-base text-[#1C1C1C]">
          Talup {year}. All rights reserved
        </span>
      </div>

      <div className="items-center sm:gap-[3.25rem] gap-4 hidden sm:flex">
        <button className="font-manrope font-normal sm:text-lg sm:leading-[1.2375rem] text-sm text-[#1C1C1C] underline">
          {"Terms & Conditions"}
        </button>
        <button className="font-manrope font-normal sm:text-lg sm:leading-[1.2375rem] text-sm text-[#1C1C1C] underline">
          {"Privacy Policy"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
