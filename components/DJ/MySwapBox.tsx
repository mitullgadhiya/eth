import { Button } from "../ui/buttons/Button";

import BuyBox from "./Buy";
import IconBox from "./IconBox";
import NetworkBox from "./Network";
import SellBox from "./SellBox";

export default function MySwapBox() {

    return (
        <div className="relative w-full md:w-[80dvw] lg:max-w-md mx-auto px-2 py-3 bg-purple-100 rounded-md">
            <div className="flex justify-between items-center px-2 md:py-2">
                <h1 className="font-semibold">Swap</h1>
            </div>

            <NetworkBox />
            <SellBox />
            <IconBox />
            <BuyBox />

            {/* Swap Button */}
            <Button className="w-full mt-3">Connect Wallet</Button>
        </div>

    )
}


