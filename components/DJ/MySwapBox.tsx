"use client";

import { Button } from "../ui/buttons/Button";
import Image from "next/image";


// import { Input } from "@/components/Input/input";
import { useFetchedTokenBalance } from '@/context/FetchTokenBalance';
import { useAccount } from 'wagmi';
import { useAppKit } from "@reown/appkit/react";
import PresaleAbi from "@/ABI/PresaleABI.json";
import UsdtAbi from "@/ABI/UsdtABI.json";
import { useEffect, useState } from "react";
import { Web3 } from "web3";
import Link from "next/link";

export default function MySwapBox() {

    const { open } = useAppKit();
    const { isConnected, address } = useAccount();
    const { RamiToken1Balance, UsdtToken2Balance } = useFetchedTokenBalance();
    const PresaleContractAddress = "0x29ed8a7e71a3dcb7a7b322bb8e07e1d87ff54498";
    const USDTTokenAddress = "0x55d398326f99059fF775485246999027B3197955";

    const [inputAmount, setInputAmount] = useState<number>(0); // USDT amount
    const [ramiAmount, setRamiAmount] = useState<number>(0); // RAMI amount

    const tokenPrices: { [key: string]: number } = {
        USDT: 0.005,
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, isRamiInput: boolean) => {
        const typedAmount = parseFloat(event.target.value);

        if (isRamiInput) {
            setRamiAmount(typedAmount);
            const usdtAmount = typedAmount * tokenPrices.USDT; // Calculate USDT from RAMI
            setInputAmount(usdtAmount);
        } else {
            setInputAmount(typedAmount);
            const ramiAmount = typedAmount * (1 / tokenPrices.USDT); // Calculate RAMI from USDT
            setRamiAmount(ramiAmount);
        }
    };

    const handleTokenSwap = async () => {
        const connectedAddress = address;
        if (connectedAddress) {
            try {
                const web3 = new Web3((window as any).ethereum);
                const contract = new web3.eth.Contract(PresaleAbi, PresaleContractAddress);

                const amountInWei = web3.utils.toWei(inputAmount.toFixed(18), 'ether');

                let tx;
                const tokenContract = new web3.eth.Contract(UsdtAbi, USDTTokenAddress);

                // Approve the token transfer
                await tokenContract.methods.approve(PresaleContractAddress, amountInWei).send({ from: connectedAddress });

                tx = await contract.methods.buyWithUSDT(amountInWei).send({ from: connectedAddress });
                console.log("Transaction successful:", tx);
            } catch (error) {
                console.error("Error occurred during transaction:", error);
            }
        } else {
            console.log("Please connect your wallet.");
        }
    };

    useEffect(() => {
        if (!isConnected) {
            setInputAmount(0);
            setRamiAmount(0);
        }
    }, [isConnected]);

    const isButtonDisabled = parseFloat(UsdtToken2Balance) <= 0;
    const isSwapDisabled = !isConnected || parseFloat(UsdtToken2Balance) <= 0;

    return (
        <div className="relative w-full md:w-[80dvw] lg:max-w-md mx-auto px-2 py-3 bg-purple-100 dark:bg-purple-100 rounded-md">
            <div className="flex justify-between items-center px-2 md:py-2">
                <h1 className="font-semibold dark:text-black">Swap</h1>
            </div>

            <div className="relative w-full bg-purple-200 rounded-md mt-2 px-2 mb-2 py-4 space-y-1 text-black">
                <div className="flex justify-between items-center">
                    <span>Binance Smart Chain</span>
                    <Image src="/bnb.svg" alt="nextowrk" width={25} height={25} />
                </div>
            </div>
            {/* sell */}
            <div className="relative w-full bg-purple-300 rounded-md mt-2 px-2 py-3 space-y-1">
                <div className="flex justify-between items-center">
                    <span className="text-xl text-black">Sell</span>
                    <span className="text-black text-lg">USDT</span>
                </div>
                <div className="flex justify-between items-center">
                    <input
                        placeholder="0"
                        type="number"
                        className="w-[90%] py-2 overflow-hidden text-2xl rounded-md bg-transparent placeholder:text-black text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 pr-10
             [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        disabled={!isConnected}
                        value={inputAmount || ''} // Bind the value to inputAmount
                        onChange={(e) => handleInputChange(e, false)} // false for USDT input
                    />
                    <span className="flex flex-col justify-end items-end opacity-60">
                        <Image src="/wallet.svg" alt="wallet" width={20} height={20} />
                        <p className="text-black">
                            {isConnected && UsdtToken2Balance ? `${UsdtToken2Balance}` : "0"}
                        </p>
                    </span>
                </div>
            </div>
            {/* icon */}
            <div className="absolute left-1/2 top-[57%] md:top-[59%] lg:top-[61%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center bg-purple-600 rounded-full p-2 shadow-lg z-10 border border-purple-400">
                <Image src="/swap.svg" alt="swap" width={20} height={20} />
            </div>
            {/* get */}
            <div className="relative w-full rounded-md mt-2 px-2 py-3 space-y-1 bg-purple-300">
                <div className="flex justify-between items-center">
                    <span className="text-xl text-black">Buy</span>
                    <span className="text-black text-lg">RAMI</span>
                </div>
                <div className="flex justify-between items-center">
                    {/* <span className="text-3xl tracking-tighter text-black">0.00</span> */}
                    <input
                        placeholder="0"
                        type="number"
                        className="w-[90%] py-2 overflow-hidden text-2xl rounded-md bg-transparent placeholder:text-black text-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 pr-10
             [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        disabled={!isConnected}
                        value={ramiAmount || ''} // Bind the value to ramiAmount
                        onChange={(e) => handleInputChange(e, true)} // true for RAMI input
                    />
                    <span className="flex flex-col justify-end items-end opacity-60">
                        <Image src="/wallet.svg" alt="wallet" width={20} height={20} />
                        <p className="text-black">
                            {isConnected && RamiToken1Balance ? `${RamiToken1Balance}` : "0"}
                        </p>
                    </span>
                </div>
            </div>

            {/* Swap Button */}
            {isConnected ? (
                <Button
                    className="w-full mt-3"
                    onClick={handleTokenSwap}
                    disabled={isButtonDisabled}
                >
                    Swap
                </Button>
            ) : (
                <Button
                    className="w-full mt-3"
                    onClick={() => {
                        if (!isConnected) {
                            open?.();
                        } else {
                            console.log("Perform Swap");
                        }
                    }}
                >
                    Connect Wallet
                </Button>
            )}
        </div>
    )
}



// import { Button } from "../ui/buttons/Button";

// import BuyBox from "./Buy";
// import IconBox from "./IconBox";
// import NetworkBox from "./Network";
// import SellBox from "./SellBox";

// export default function MySwapBox() {

//     return (
//         <div className="relative w-full md:w-[80dvw] lg:max-w-md mx-auto px-2 py-3 bg-purple-100 dark:bg-purple-100 rounded-md">
//             <div className="flex justify-between items-center px-2 md:py-2">
//                 <h1 className="font-semibold dark:text-black">Swap</h1>
//             </div>

//             <NetworkBox />
//             <SellBox />
//             <IconBox />
//             <BuyBox />

//             {/* Swap Button */}
//             <Button className="w-full mt-3">Connect Wallet</Button>
//         </div>

//     )
// }


