// components/StyledCard.tsx
import { ComponentPropsWithRef } from "react";
import Card from "@/components/Card";

const StyledCard = (props: ComponentPropsWithRef<typeof Card>) => (
  <Card
    className="m-4 min-w-[280px] max-w-full flex-1 bg-background p-6 md:max-w-[46%] lg:max-w-[31%]"
    {...props}
  />
);

export default StyledCard;
