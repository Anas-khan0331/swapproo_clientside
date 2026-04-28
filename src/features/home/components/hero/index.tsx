import { HeroCircles } from "./HeroCircles";
import { HeroSearch } from "./HeroSearch";

const HeroSection = () => {
  return (
    <div className="bg-primary-50 relative flex min-h-[372px] items-center overflow-hidden">
      <HeroCircles />
      <div className="mx-auto max-w-2xl py-20 text-center">
        <h1 className="text-4xl leading-10 font-bold tracking-normal">
          Swap Your Tech With Cash or Voucher
        </h1>
        <p className="text-muted-foreground font-regular mt-2 text-lg leading-7 tracking-normal">
          Turn your items into value with fast cash or bonus vouchers.
        </p>
        <HeroSearch />
      </div>
    </div>
  );
};

export { HeroSection };
