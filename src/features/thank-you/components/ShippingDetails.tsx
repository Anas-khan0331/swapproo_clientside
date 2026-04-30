import { SHIPPING_DATA } from "../constants";

const ShippingDetails = () => {
  return (
    <div className="border-neutral-150 flex flex-col gap-3.5 border-b p-6">
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <h3 className="text-card-foreground text-base leading-6 font-semibold">Shipping</h3>
      </div>
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">From:</span>
          <br />
          {SHIPPING_DATA.from.address.map((line, index) => (
            <span className="text-muted-foreground" key={index}>
              {line}
              {index < SHIPPING_DATA.from.address.length - 1 && ","}
            </span>
          ))}
        </p>
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">To:</span>
          <br />
          <span className="text-muted-foreground">{SHIPPING_DATA.to.name}</span>
          <br />
          <span className="text-muted-foreground">{SHIPPING_DATA.to.address.join(", ")}</span>
        </p>
      </div>
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">Via:</span>
          <br />
          <span className="text-muted-foreground">{SHIPPING_DATA.via}</span>
        </p>
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">Parcel number:</span>
          <br />
          <span className="text-muted-foreground">{SHIPPING_DATA.parcelNumber}</span>
        </p>
      </div>
    </div>
  );
};

export default ShippingDetails;
