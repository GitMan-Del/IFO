import Badge from "./Badge";

export default function IFO_section() {
  return (
    <div className="w-full gap-5 h-screen flex flex-col items-start justify-start relative p-20">
      <div className="flex flex-col gap-5 items-start justify-center">
        <Badge text="Why IFO" />
        <h3 className="w-139.75 text-[70px] text-left font-bold leading-tight">
          Why Businesses Choose <span className="text-[#FFC700]">IFO</span>
        </h3>
        <p className="w-139.75 text-[#A39E91] text-[30px] font-normal">
          We don't just deliver projects, we build the digital backbone that
          powers serious growth.
        </p>
      </div>
    </div>
  );
}
