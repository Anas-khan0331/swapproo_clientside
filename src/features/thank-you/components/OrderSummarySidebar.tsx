import Image from "next/image";
import { StaticImageData } from "next/image";
import ShippingDetails from "./ShippingDetails";
import PersonalDetails from "./PersonalDetails";

interface OrderSummarySidebarProps {
  product: {
    name: string;
    price: string;
    img: string | StaticImageData;
    specifications?: string;
  };
}

const OrderSummarySidebar = ({ product }: OrderSummarySidebarProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-neutral-150 flex flex-col gap-3 border-b py-4">
        <div className="flex flex-row items-center gap-2">
          <div className="bg-muted flex size-24 items-center justify-center rounded-lg">
            <Image
              src={product.img}
              alt={product.name}
              width={96}
              height={96}
              className="size-24 rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-foreground font-medium">{product.name}</p>
            {product.specifications && (
              <p className="text-foreground text-sm">{product.specifications}</p>
            )}
            <p className="text-primary text-[30px] leading-9 font-bold">{product.price}</p>
          </div>
        </div>
      </div>

      <div className="border-neutral-150 flex flex-col rounded-xl border">
        <ShippingDetails />
        <PersonalDetails />
      </div>
    </div>
  );
};

export default OrderSummarySidebar;
