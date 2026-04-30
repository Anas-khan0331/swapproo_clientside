import { ORDER_DATA } from "../constants";

const OrderSuccessHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-foreground text-[30px] leading-9 font-semibold">
          Trade-in {ORDER_DATA.orderId} Successfully Placed!
        </h1>
        <p className="text-muted-foreground text-base leading-6">
          {ORDER_DATA.customerName} {ORDER_DATA.confirmationMessage}
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessHeader;
