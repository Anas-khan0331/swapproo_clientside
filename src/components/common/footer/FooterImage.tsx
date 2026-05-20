import Image from "next/image";
import swapprooBanner from "@/assets/images/swapproo.png";

export const FooterImage = () => {
  return (
    <div className="lg:wrapper px-8">
      <Image
        src={swapprooBanner}
        height={120.38}
        width={1204.33}
        alt="Swapproo Banner"
        className="w-full"
      />
    </div>
  );
};
