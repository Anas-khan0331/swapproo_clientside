import { ORDER_DATA, BANK_DATA, SHIPPING_DATA } from "../constants";

const PersonalDetails = () => {
  return (
    <div className="flex flex-col gap-3.5 p-6">
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <h3 className="text-card-foreground text-base leading-6 font-semibold">Personal</h3>
      </div>
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">{ORDER_DATA.customerName}:</span>
          <br />
          <span className="text-muted-foreground">{SHIPPING_DATA.from.address.join(", ")}</span>
        </p>
        <p className="w-[187px] text-sm leading-5">
          <span className="text-foreground">Bank:</span>
          <br />
          <span className="text-muted-foreground">{BANK_DATA.accountName}</span>
          <br />
          <span className="text-muted-foreground">
            {BANK_DATA.sortCode} {BANK_DATA.accountNumber}
          </span>
        </p>
      </div>
      <div className="-mx-6 flex flex-row gap-2.5 px-6">
        <p className="text-muted-foreground text-sm leading-5">
          <span className="text-foreground">{ORDER_DATA.customerEmail}</span>
          <br />
          {ORDER_DATA.customerPhone}
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
