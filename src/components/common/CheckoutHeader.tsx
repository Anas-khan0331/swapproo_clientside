import Image from "next/image";
import Link from "next/link";
import checkoutLogo from "@/assets/images/checkout-logo.png";
const CheckoutHeader = () => {
  return (
    <header className="bg-muted wrapper h-16 w-full">
      <div className="flex items-center justify-start">
        <Link href="/">
          <Image src={checkoutLogo} alt="Checkout Logo" width={200} height={100} />
        </Link>
      </div>
    </header>
  );
};

export default CheckoutHeader;
