import Image, { StaticImageData } from "next/image";

interface ProductHeadingProps {
  productName: string;
  img: string | StaticImageData;
  headingLabel: string;
  price: string;
}

const ProductHeading = ({ productName, img, headingLabel, price }: ProductHeadingProps) => {
  return (
    <div className="flex w-full flex-col justify-center gap-3 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-20 shrink-0 items-center justify-center rounded">
          <Image src={img} alt={productName} width={80} height={80} className="object-contain" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-foreground text-2xl leading-8">
            <ProductHeadingLabel label={headingLabel} />
          </h1>
          <p className="text-primary-600 text-3xl leading-10 font-semibold lg:text-4xl">{price}</p>
        </div>
      </div>
    </div>
  );
};

function ProductHeadingLabel({ label }: { label: string }) {
  const [name, ...specs] = label.split(" | ");

  return (
    <span className="flex flex-col gap-0.5">
      <span className="text-xl font-semibold lg:text-2xl">{name}</span>
      {specs.length > 0 && <span className="text-lg font-normal">{specs.join(" | ")}</span>}
    </span>
  );
}

export default ProductHeading;
