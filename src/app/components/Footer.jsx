import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent text-slate-400">
      <div className="container p-12 flex justify-between">
        <span className="text-lg font-semibold text-[#adb7be]">
          Dwi Lenggani
        </span>
        <p className="text-slate-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
