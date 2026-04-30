import Image, { StaticImageData } from "next/image";

interface ProductSummaryProps {
  name: string;
  price: string;
  img: string | StaticImageData;
}

const ProductSummary = ({ name, price, img }: ProductSummaryProps) => {
  return (
    <div className="flex flex-col gap-3 border-b py-4">
      <div className="flex flex-row items-center gap-2">
        <div className="bg-muted flex size-24 items-center justify-center rounded-lg">
          {typeof img === "string" ? (
            <Image
              src={img}
              alt={name}
              width={96}
              height={96}
              className="size-24 rounded-lg object-cover"
            />
          ) : (
            <Image
              src={img}
              alt={name}
              width={96}
              height={96}
              className="size-24 rounded-lg object-cover"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground font-medium">{name}</p>
          <p className="text-[30px] leading-9 font-bold text-green-600">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
