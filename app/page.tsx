"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Btn from "./components/Btn";
import { useSmoothScroll } from "@/lib/SmoothScroll";

export default function Home() {

  useSmoothScroll();
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center font-sans">
      <Hero />
      <div className=" h-screen bg-black">
      </div>
    </div>
  );
}
