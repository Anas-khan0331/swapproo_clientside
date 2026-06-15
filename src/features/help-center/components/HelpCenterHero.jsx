import HelpCenterHeroSearch from "./HelpCenterHeroSearch";

const HelpCenterHero = () => {
  return (
    <div className="wrapper bg-primary-50/30 flex min-h-[320px] w-full items-center justify-center">
      <div className="mx-auto max-w-6xl p-8 text-center">
        <div className="flex w-full flex-col gap-2">
          <h1 className="text-foreground text-4xl leading-10 font-bold">
            How can we help you today?
          </h1>
          <p className="text-muted-foreground text-lg leading-7 font-normal">
            Everything you need to know about selling and swapping your items with ease.
          </p>
        </div>
        <div className="mx-auto mt-6 max-w-lg">
          <HelpCenterHeroSearch className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default HelpCenterHero;
