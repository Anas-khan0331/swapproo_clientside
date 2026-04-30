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
<<<<<<< HEAD
          <h1 className="text-foreground text-2xl leading-8">
            <ProductHeadingLabel label={headingLabel} />
          </h1>
=======
          <h1 className="text-foreground text-2xl leading-8 font-semibold">{headingLabel}</h1>
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
          <p className="text-primary-600 text-4xl leading-10 font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
function ProductHeadingLabel({ label }: { label: string }) {
  const [name, ...specs] = label.split(" | ");

  return (
    <>
      <span className="font-semibold">{name}</span>
      {specs.length > 0 && <span className="font-normal">{" | " + specs.join(" | ")}</span>}
    </>
  );
}

=======
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
export default ProductHeading;
