import { HeroCircles } from "./HeroCircles";
import { HeroSearch } from "./HeroSearch";

const HeroSection = () => {
  return (
    <div className="bg-primary-50 relative flex min-h-[308px] items-center md:min-h-[372px]">
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <HeroCircles />
      </div>
      <div className="relative mx-auto w-full py-14! text-center md:px-0 md:py-20">
        <h1 className="block text-3xl leading-9 font-bold tracking-normal md:hidden md:text-4xl md:leading-10">
          Swap Your Tech <br /> With Cash or Voucher
        </h1>
        <h1 className="hidden text-3xl leading-9 font-bold tracking-normal md:block md:text-4xl md:leading-10">
          Swap Your Tech With Cash or Voucher
        </h1>
        <div className="px-[33px] md:px-0">
          <p className="text-muted-foreground font-regular mt-2 text-lg leading-7 tracking-normal">
            Turn your items into value with fast cash or bonus vouchers.
          </p>
        </div>
        <div className="px-[46px]">
          <HeroSearch />
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
