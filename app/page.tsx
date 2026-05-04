"use client";

import Hero from "./components/Hero";
import { useSmoothScroll } from "@/lib/SmoothScroll";
import Mb_section from "./components/Mb_section";
import IFO_section from "./components/IFO_section";
import ProjectSection from "./components/Projects";

export default function Home() { 

  useSmoothScroll();
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center font-sans">
      <Hero />
      <Mb_section />
      <IFO_section />
      <ProjectSection />
    </div>
  );
}
