import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  tradeInId: string;
}

export function Breadcrumb({ tradeInId }: BreadcrumbProps) {
  return (
    <div className="text-muted-foreground mb-6 flex items-center gap-2 text-sm">
      <Link
        href="/trade-ins"
        className="hover:text-foreground text-muted-foreground text-sm transition-colors"
      >
        Trade-ins
      </Link>
      <span>
        <ChevronRight color="#737373" size={14} />
      </span>
      <span className="text-foreground text-sm">#{tradeInId}</span>
    </div>
  );
}
