import Image from "next/image";
import Navbar from "./Navbar";
import Badge from "./Badge";
import Btn from "./Btn";


export default function Hero() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Image src="/fly.png" alt="Hero" width={400} height={400}  className="absolute z-20 left-0" />
      <Image src="/fly2.png" alt="Hero" width={300} height={300}  className="absolute z-20 right-10 bottom-10" />
      <Image
        src="/Background.png"
        alt="Hero"
        fill
        objectFit="cover"
        quality={75}
        priority
        sizes="100vw"
      />
      <Badge text="Infrastructure For Optimization" />
      <h1 className="text-[83px] max-w-223.25 text-center z-40 font-bold leading-tight">
        We Build {" "}
        <span className="bg-linear-to-b from-[#FFE34A] from-0% to-100% to-[#B18300] bg-clip-text text-transparent">
          Digital Infrastructure
        </span>{" "}
        That Scales Your Business
      </h1>
      <p className="text-[17px] text-[#A39E91] z-40 max-w-200 text-center ">
        From high-performance websites to complex web applications and
        automation systems, IFO helps businesses grow faster with optimized
        digital solutions.
      </p>

      <div className="w-fit h-fit flex flex-row gap-4 z-40 mt-5">
        <Btn text="Start a Project" />
        <button className="text-[17px] hover:cursor-pointer font-normal px-10 py-3 bg-[#D9D9D9]/20 backdrop-blur-2xl text-white rounded-2xl ">
          View Our Work
        </button>
      </div>
    </div>
  );
}
