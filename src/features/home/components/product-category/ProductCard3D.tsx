"use client";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ProductCard = {
  img: string | StaticImageData;
  title: string;
  buttonClass?: string;
  badgeClass?: string;
  discount?: number;
  productLink: string;
  mainClass?: string;
}[];

const ProductCard3D = ({ item }: { item: ProductCard[number] }) => {
  return (
    <div style={{ height: "286px" }} className="relative">
      <Link href={`/category/${item.productLink}`} className="block h-full">
        <Card
          className={cn(
            "bg-neutral-075 group absolute inset-x-0 top-0 overflow-visible rounded-xl border-2 border-transparent ring-0 transition-[height,border-color] duration-300 hover:border-neutral-900/40",
            item.mainClass,
          )}
          style={{ height: "286px", transition: "height 0.3s ease, border-color 0.3s ease" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.height = "328px";
            el.style.borderColor = "rgba(23,23,23,0.4)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLDivElement;
            el.style.height = "286px";
            el.style.borderColor = "transparent";
          }}
        >
          <CardContent className="flex h-full flex-col p-0 text-sm">
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2"
              style={{ width: 280, height: 280 }}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={280}
                height={280}
                className="h-[280px] w-[280px] object-contain"
              />
            </div>
            <div className="flex-1" />
            <h3 className="pt-6 text-center text-2xl leading-8 font-semibold tracking-normal whitespace-nowrap text-neutral-950">
              {item.title}
            </h3>

            <div className="overflow-hidden transition-all duration-300 group-hover:pt-3 group-hover:pb-3">
              <span className="text-foreground flex w-full items-center justify-center text-sm font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View Products
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export { ProductCard3D };
