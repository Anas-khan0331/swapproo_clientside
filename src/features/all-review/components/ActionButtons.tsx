import Link from "next/link";
import { Button } from "@/components/ui/button";

const ActionButtons = () => {
  return (
    <div className="flex flex-col items-end gap-3">
      <Button
        className="bg-foreground! h-10 w-full rounded-lg px-6 font-normal hover:bg-neutral-950/80!"
        asChild
      >
        <Link href="/write-review">Write a review</Link>
      </Button>
      <Button
        variant="outline"
        className="text-foreground hover:bg-muted/80! h-10 w-full rounded-lg bg-white! px-6 font-medium"
      >
        Ask a question
      </Button>
    </div>
  );
};

export default ActionButtons;
