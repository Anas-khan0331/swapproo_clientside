import { Button } from "@/components/ui/button";
import Link from "next/link";
import Show from "@/components/common/show";

interface SellDeviceButtonProps {
  slug: string;
}

export function SellDeviceButton({ slug }: SellDeviceButtonProps) {
  return (
    <Show when={!!slug}>
      <Link href={`/checkout/${slug}`}>
        <Button className="bg-foreground hover:bg-foreground/80 text-background h-12 w-full rounded-lg text-sm font-semibold">
          Sell My Device
        </Button>
      </Link>
    </Show>
  );
}

export function SellDeviceButtonDisabled() {
  return (
    <Button
      disabled
      className="bg-muted text-muted-foreground h-12 w-full rounded-lg text-sm font-semibold"
    >
      Sell My Device
    </Button>
  );
}
