"use client";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedInIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EmailSection = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });
 async function handleSubmit(e) {
   e.preventDefault();
   setFormStatus({ ...formStatus, submitting: true });

   // Fetch request to send to Web3Forms
   const web3Response = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify({
       access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
       name: e.target.name.value,
       email: e.target.email.value,
       subject: e.target.subject.value,
       message: e.target.message.value,
     }),
   });

   const web3Result = await web3Response.json();

   if (!web3Result.success) {
     const errorMessage =
       web3Result.message || "Failed to send the message to Web3Forms.";
     Swal.fire({
       title: "Error!",
       text: errorMessage,
       icon: "error",
       confirmButtonText: "Try Again",
     });
     setFormStatus({ submitting: false, success: false, error: true });
     return; // Exit if Web3Forms submission fails
   }

   // Fetch request to send the email using Resend
   const emailResponse = await fetch("/api/send", {
     // Update URL here
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify({
       name: e.target.name.value,
       email: e.target.email.value,
       subject: e.target.subject.value,
       message: e.target.message.value,
     }),
   });

   const emailResult = await emailResponse.json();

   if (emailResult.success) {
     Swal.fire({
       title: "Success!",
       text: "Message sent successfully!",
       icon: "success",
       confirmButtonText: "Cool",
     });
     e.target.reset();
     setFormStatus({ submitting: false, success: true, error: false });
   } else {
     const errorMessage = emailResult.message || "Failed to send the email.";
     Swal.fire({
       title: "Error!",
       text: errorMessage,
       icon: "error",
       confirmButtonText: "Try Again",
     });
     setFormStatus({ submitting: false, success: false, error: true });
   }
 }


  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 tranform -translate-x-1/2 -translate-y-12 mb-24"></div>
      <div>
        <h5 className="text xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          {""}
          I am currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I will
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/DwiL4u">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/dwi-lenggani-118885275/">
            <Image src={LinkedInIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  mb-2 text-sm font-medium "
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your Name"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            className="bg-purple-500 hover:bg-primary-600 text-white font--medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </button>
          {formStatus.success && (
            <p className="text-green-500 mt-2">Message sent successfully!</p>
          )}
          {formStatus.error && (
            <p className="text-red-500 mt-2">Failed to send the message.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
