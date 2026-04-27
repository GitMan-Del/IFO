import Badge from "./Badge";
import Image from "next/image";

export default function IFO_section() {
  return (
    <div className="w-full gap-5 h-screen flex flex-row items-start justify-start relative p-20">
      <Image
        src={"/BG_section.png"}
        alt=""
        width={545}
        height={577}
        className="absolute bottom-0 left-10"
      />
      <div className="flex flex-1 flex-col gap-5 items-start justify-center">
        <Badge text="Why IFO" />
        <h3 className="w-139.75 text-[70px] text-left font-bold leading-tight">
          Why Businesses Choose <span className="text-[#FFC700]">IFO</span>
        </h3>
        <p className="w-139.75 text-[#A39E91] text-[30px] font-normal">
          We don't just deliver projects, we build the digital backbone that
          powers serious growth.
        </p>
      </div>

      <div className="flex-1 flex-col gap-4 h-full flex items-center justify-center">
        <div className="w-196.5 h-33.75 bg-[#D9D9D9]/20 rounded-2xl flex flex-row items-center justify-start gap-3 px-5">
          <Image
            src="/High-Perfom2.png"
            alt="High-performance"
            width={100}
            objectFit="Cover"
            objectPosition="center"
            height={94}
          />
          <div>
            <span className="font-bold text-[30px] text-white">
              <span className="text-[#FFC700] text-[20px]">01 </span>
              High-performance architecture
            </span>
            <p className="text-[22px] text-[#A39E91]">
              Engineered for speed at any scale.
            </p>
          </div>
        </div>
        <div className="w-196.5 h-33.75 bg-[#D9D9D9]/20 rounded-2xl flex flex-row items-center justify-start gap-3 px-5">
          <Image src="/2Arrows2.png" alt="Arrows" width={100} height={94} />
          <div>
            <span className="font-bold text-[30px] text-white">
              <span className="text-[#FFC700] text-[20px]">02 </span>
              Scalable systems
            </span>
            <p className="text-[22px] text-[#A39E91]">
              From startup MVP to enterprise load.
            </p>
          </div>
        </div>
        <div className="w-196.5 h-33.75 bg-[#D9D9D9]/20 rounded-2xl flex flex-row items-center justify-start gap-3 px-5">
          <Image
            src="/Clean_Modern.png"
            alt="modern UI"
            width={100}
            height={94}
          />
          <div>
            <span className="font-bold text-[30px] text-white">
              <span className="text-[#FFC700] text-[20px]">03 </span>
              Clean and modern UI
            </span>
            <p className="text-[22px] text-[#A39E91]">
              Pixel-perfect interfaces, every time.
            </p>
          </div>
        </div>
        <div className="w-196.5 h-33.75 bg-[#D9D9D9]/20 rounded-2xl flex flex-row items-center justify-start gap-3 px-5">
          <Image src="/Ai_Automation.png" alt="Ai_Automation" width={100} height={94} />
          <div>
            <span className="font-bold text-[30px] text-white">
              <span className="text-[#FFC700] text-[20px]">04 </span>
              Automation-first approach
            </span>
            <p className="text-[22px] text-[#A39E91]">
              Reduce overhead, multiply output.
            </p>
          </div>
        </div>
        <div className="w-196.5 h-33.75 bg-[#D9D9D9]/20 rounded-2xl flex flex-row items-center justify-start gap-3 px-5">
          <Image src="/Fast_Delivery.png" alt="Fast_Delivery" width={100} height={94} />
          <div>
            <span className="font-bold text-[30px] text-white">
              <span className="text-[#FFC700] text-[20px]">05 </span>
              Fast delivery
            </span>
            <p className="text-[22px] text-[#A39E91]">
              Ship in weeks, not months..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
