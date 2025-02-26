import Image from "next/image";

export default function NetworkBox() {

    return (
        <div className="relative w-full bg-purple-200 rounded-md mt-2 px-2 mb-2 py-4 space-y-1 text-black">
            <div className="flex justify-between items-center">
                <span>Binance Smart Chain</span>
                <Image src="/bnb.svg" alt="nextowrk" width={25} height={25} />
            </div>
        </div>
    )
}


