export default function Badge({ text }: { text: string }) {
    return (
        <div className="text-[13px] font-normal text-[#A39E91] py-2 px-5 bg-[#D9D9D9]/20 backdrop-blur-2xl rounded-full border border-white/20">
            {text}
        </div>
    );
}