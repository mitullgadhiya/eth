import Image from "next/image";

export default function SellBox() {

    return (
        <div className="relative w-full bg-purple-300 rounded-md mt-2 px-2 py-3 space-y-1">
            <div className="flex justify-between items-center">
                <span className="text-xl text-black">Sell</span>
                <span className="text-black text-lg">USDT</span>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-3xl tracking-tighter text-black">0.00</span>
                <span className="flex justify-between items-center space-x-2">
                    <p className="text-black">0</p>
                    <Image src="/wallet.svg" alt="wallet" width={20} height={20} />
                </span>
            </div>
        </div>
    )
}


