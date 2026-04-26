"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `ml-8 text-lg hover:text-gray-400 transition duration-300 ${
      pathname === path ? "text-white py-1 px-5 bg-[#D9D9D9]/20 backdrop-blur-2xl rounded-full border border-white/20" : "text-[#A39E91]"
    }`;

  return (
    <div className="top-10 w-4xl h-18 bg-[#D9D9D9]/20 fixed z-90 backdrop-blur-2xl rounded-full px-8 py-2 flex items-center justify-between">
      <div className="flex flex-row gap-2 items-center justify-center">
        <Image src="/Logo.png" alt="Logo" width={48} height={50} />
        <h1 className="text-[30px] font-bold text-white">IFO</h1>
      </div>

      <ul className="flex gap-4 text-[10px]">
        <li>
          <a href="/" className={linkClass("/")}>
            Home
          </a>
        </li>
        <li>
          <a href="/services" className={linkClass("/services")}>
            Services
          </a>
        </li>
        <li>
          <a href="/projects" className={linkClass("/projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </a>
        </li>
        <li>
          <a href="/faq" className={linkClass("/faq")}>
            FAQ
          </a>
        </li>
      </ul>

      <Image
        src="/Profile.png"
        alt="Profile"
        width={48}
        height={48}
        className="border border-[#FEDF3C] rounded-full"
      />
    </div>
  );
}
