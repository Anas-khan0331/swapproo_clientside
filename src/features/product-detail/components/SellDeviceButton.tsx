import { Button } from "@/components/ui/button";
import Link from "next/link";
import Show from "@/components/common/show";

interface SellDeviceButtonProps {
  slug: string;
  storage?: string;
  network?: string;
  condition?: string;
}

export function SellDeviceButton({ slug, storage, network, condition }: SellDeviceButtonProps) {
  const params = new URLSearchParams();
  if (storage) params.set("storage", storage);
  if (network) params.set("network", network);
  if (condition) params.set("condition", condition);
  const query = params.toString();
  const href = `/checkout/${slug}${query ? `?${query}` : ""}`;

  return (
    <Show when={!!slug}>
      <Link href={href}>
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
