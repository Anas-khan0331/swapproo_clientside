import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { toSlug } from "../utils";

interface ProductCardProps {
  name: string;
  price: string;
  img: StaticImageData | string;
}

export function ProductCard({ name, price, img }: ProductCardProps) {
  return (
    <Link href={`/product/${toSlug(name)}`}>
      <Card className="group flex w-full cursor-pointer flex-col overflow-hidden pt-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="bg-neutral-075 flex w-full items-center justify-center p-4">
          <Image
            src={img}
            alt={name}
            width={244}
            height={244}
            className="h-60 w-60 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="rounded-none">
          <CardTitle className="text-lg leading-7 font-semibold tracking-normal">{name}</CardTitle>
          <CardDescription className="text-muted-foreground text-sm leading-5 font-normal tracking-normal">
            Get up to{" "}
            <span className="text-foreground ml-[6px] text-base font-semibold">{price}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
