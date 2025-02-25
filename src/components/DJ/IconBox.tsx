import Image from "next/image";

export default function IconBox() {

    return (
        <div className="absolute left-1/2 top-[57%] md:top-[59%] lg:top-[61%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-purple-600 rounded-full p-2 shadow-lg z-10 border border-purple-400">
            <Image src="/swap.svg" alt="swap" width={20} height={20} />
        </div>
    )
}


