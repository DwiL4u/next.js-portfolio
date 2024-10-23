import React from "react";
import GithunIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="Github.com">
            <a>
              <Image src={GithunIcon} alt="Github Icon" />
            </a>
          </Link>
          <Link href="Linkedin.com">
            <a>
              <Image src={LinkedInIcon} alt="Linkedin Icon" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
