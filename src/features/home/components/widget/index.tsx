import { MedalStar } from "iconsax-reactjs";
import Image from "next/image";
import widget from "@/assets/images/widget.png";
const WidgetSection = () => {
  return (
    <>
      <div className="wrapper bg-neutral-025 h-16">
        <div className="grid grid-cols-12">
          <div className="col-span-9">
            <div className="flex h-full items-center justify-start gap-3">
              <span>
                <MedalStar color="#09C24A" variant="Bulk" size={40} />
              </span>
              <p className="text-foreground text-lg leading-7 font-normal">
                The UK’s top-rated destination to sell or swap your items.
              </p>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex h-full items-center justify-start gap-3">
              <div className="">
                <Image src={widget} width={305} height={32} alt="widget-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetSection;
