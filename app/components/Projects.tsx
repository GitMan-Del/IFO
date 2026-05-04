import Badge from "./Badge";
import Btn from "./Btn";
import Image from "next/image";

export default function ProjectSection() {
  return (
    <div className="w-full min-h-screen justify-center p-20 flex flex-col">
      <Badge text="Why IFO" />
      <div className="w-full flex flex-row items-center justify-between">
        <h3 className="text-[50px] text-left font-bold leading-tight">
          Projects we're {" "}
          <span className="bg-linear-to-b from-[#FFE34A] from-0% to-100% to-[#B18300] bg-clip-text text-transparent">
            proud of
          </span>
        </h3>
        <Btn text="View all projects" />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-20">
        <div className="grid md:grid-cols-3 w-full grid-rows-1 grid-cols-1 gap-10 mt-15 ">
          {/* #1 */}
          <div className="flex flex-col items-start justify-start">
            <div className="min-w-118 relative h-92.75 bg-red-500 rounded-2xl">
              <Image
                src=""
                alt=""
                fill
                quality={75}
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-3 p-4">
              <span className="text-[#FFFFFF] text-[25px]">
                Nimbus Analytics
              </span>
              <span className="text-[#A39E91] tetx-13px">
                Real-time data dashboard for fintech clients.
              </span>
            </div>
          </div>
          {/* #2 */}
          <div className="flex flex-col items-start justify-start">
            <div className="min-w-118 relative h-92.75 bg-red-500 rounded-2xl">
              <Image
                src=""
                alt=""
                fill
                quality={75}
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-3 p-4">
              <span className="text-[#FFFFFF] text-[25px]">
                Nimbus Analytics
              </span>
              <span className="text-[#A39E91] tetx-13px">
                Real-time data dashboard for fintech clients.
              </span>
            </div>
          </div>
          {/* #3 */}
          <div className="flex flex-col items-start justify-start">
            <div className="min-w-118 relative h-92.75 bg-red-500 rounded-2xl">
              <Image
                src=""
                alt=""
                fill
                quality={75}
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col gap-3 p-4">
              <span className="text-[#FFFFFF] text-[25px]">
                Nimbus Analytics
              </span>
              <span className="text-[#A39E91] tetx-13px">
                Real-time data dashboard for fintech clients.
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#D9D9D9]/20 py-10 px-20 flex flex-row justify-between rounded-xl w-full">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[70px] font-bold text-[#F6E142]">100+</span>
            <span className="text-[20px] text-[#A39E91]">
              Projects Delivered
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[70px] font-bold text-[#F6E142]">50+</span>
            <span className="text-[20px] text-[#A39E91]">Happy Clients</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[70px] font-bold text-[#F6E142]">99%</span>
            <span className="text-[20px] text-[#A39E91]">
              Client Satisfaction
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-[70px] font-bold text-[#F6E142]">24/7</span>
            <span className="text-[20px] text-[#A39E91]">Premium Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
