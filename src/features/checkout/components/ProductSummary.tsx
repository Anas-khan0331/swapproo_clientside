import Image, { StaticImageData } from "next/image";

interface ProductSummaryProps {
  name: string;
  price: string;
  img: string | StaticImageData;
}

const ProductSummary = ({ name, price, img }: ProductSummaryProps) => {
  const [productName, ...specs] = name.split(" | ");

  return (
    <div className="flex flex-row items-center gap-4 border-b pb-6">
      <div className="bg-muted flex size-20 shrink-0 items-center justify-center rounded-lg">
        <Image
          src={img}
          alt={name}
          width={136}
          height={136}
          className="h-34 w-34 rounded-lg object-contain"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-foreground text-xl leading-6 font-medium">{productName}</p>
        {specs.length > 0 && (
          <p className="text-foreground text-base leading-6 font-medium">{specs.join(" | ")}</p>
        )}
        <p className="text-[28px] leading-9 font-bold text-green-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductSummary;
