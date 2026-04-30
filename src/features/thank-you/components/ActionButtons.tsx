import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Button className="bg-foreground text-background h-12 w-full gap-2">
        <span className="text-sm font-semibold">Download Shipping Label & Shipped</span>
        <ArrowDown className="size-4" />
      </Button>
      <Button variant="ghost" className="h-10">
        <span className="text-foreground text-sm font-medium">Swap More</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
