"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export type ProductCard = {
  img: string | StaticImageData;
  title: string;
  buttonClass?: string;
  badgeClass?: string;
  discount?: number;
  productLink: string;
  mainClass?: string;
}[];

interface CardTransform {
  rotateX: number;
  rotateY: number;
  scale: number;
}

const ProductCard3D = ({ item }: { item: ProductCard[number] }) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const card = cardRef.current;
    const imageWrapper = imageWrapperRef.current;

    if (!card || !imageWrapper) return;

    let rect: DOMRect;
    let centerX: number;
    let centerY: number;

    const updateCardTransform = (mouseX: number, mouseY: number) => {
      if (!rect) {
        rect = card.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      }

      const relativeX = mouseX - centerX;
      const relativeY = mouseY - centerY;

      const cardTransform: CardTransform = {
        rotateX: -relativeY * 0.035,
        rotateY: relativeX * 0.035,
        scale: 1.025,
      };

      const imageTransform: CardTransform = {
        rotateX: -relativeY * 0.025,
        rotateY: relativeX * 0.025,
        scale: 1.1,
      };

      return { cardTransform, imageTransform };
    };

    const animate = () => {
      const { cardTransform, imageTransform } = updateCardTransform(
        lastMousePosition.current.x,
        lastMousePosition.current.y,
      );

      card.style.transform = `perspective(1000px) rotateX(${cardTransform.rotateX}deg) rotateY(${cardTransform.rotateY}deg) scale3d(${cardTransform.scale}, ${cardTransform.scale}, ${cardTransform.scale})`;
      card.style.boxShadow = "0 10px 35px rgba(0, 0, 0, 0.2)";

      imageWrapper.style.transform = `perspective(1000px) rotateX(${imageTransform.rotateX}deg) rotateY(${imageTransform.rotateY}deg) scale3d(${imageTransform.scale}, ${imageTransform.scale}, ${imageTransform.scale})`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };

      if (!rect) {
        rect = card.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
      }
    };

    const handleMouseEnter = () => {
      rect = card.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
      card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease, height 0.3s ease";
      card.style.transition = "transform 0.2s ease, box-shadow 0.2s ease, height 0.3s ease";
      imageWrapper.style.transition = "transform 0.2s ease";
      card.style.height = "319px";
      animate();
    };

    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      card.style.boxShadow = "none";
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, height 0.3s ease";
      card.style.height = "286px";
      card.style.transition = "transform 0.5s ease, box-shadow 0.5s ease, height 0.3s ease";
      card.style.height = "286px";

      imageWrapper.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
      imageWrapper.style.transition = "transform 0.5s ease";

      rect = undefined as unknown as DOMRect;
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{ height: "286px" }}
      className="relative cursor-pointer"
      onClick={() => router.push(`/category/${item.productLink}`)}
    >
      <Card
        ref={cardRef}
        className={cn(
          "bg-neutral-075 group relative overflow-visible rounded-xl border border-transparent transition-colors duration-300",
          item.mainClass,
        )}
        style={{ height: "286px" }}
      >
        <CardContent className="space-y-0 p-0 text-sm">
          <div ref={imageWrapperRef} className="absolute -top-20 left-1/2 size-70 -translate-x-1/2">
            <Image
              src={item.img}
              alt={item.title}
              width={280}
              height={280}
              className="h-[280px] w-[280px] object-contain"
            />
          </div>
          <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-2xl leading-8 font-semibold tracking-normal whitespace-nowrap text-neutral-950">
            {item.title}
          </h3>
          <Link
            href={`/category/${item.productLink}`}
            className="text-foreground absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            View Products
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export { ProductCard3D };
