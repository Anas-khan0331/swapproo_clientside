interface OfferPriceProps {
  price: string;
}

export function OfferPrice({ price }: OfferPriceProps) {
  return (
    <div className="bg-neutral-075 flex flex-col gap-1 rounded-md p-3">
      <p className="text-primary-600 text-base leading-6 font-bold">Offer Price : {price}</p>
      <p className="text-muted-foreground text-base leading-6">
        This offer price is valid for 14 days and subject to your device being received as
        described. Please see our{" "}
        <span className="text-foreground underline">terms and conditions</span> for more details
      </p>
    </div>
  );
}
