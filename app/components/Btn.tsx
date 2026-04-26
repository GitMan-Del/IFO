export default function Btn({ text }: { text: string }) {
  return (
    <div className="bg-[#D7AF52] pb-1 text-center rounded-[16px] text-[13px] font-medium text-black relative">
      
      <div className="bg-[#D7AF52] blur-2xl absolute inset-0 z-0 animate-pulse"></div>

      <button className="relative z-10 text-[17px] shadow-inner shadow-white hover:cursor-pointer font-normal px-10 py-3 bg-[#FFF500] text-black rounded-[16px]">
        {text}
      </button>

    </div>
  );
}