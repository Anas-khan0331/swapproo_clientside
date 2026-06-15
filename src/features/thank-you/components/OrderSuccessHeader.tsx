import { ORDER_DATA } from "../constants";

const OrderSuccessHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-foreground text-2xl leading-8 font-semibold lg:text-[30px] lg:leading-9">
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
