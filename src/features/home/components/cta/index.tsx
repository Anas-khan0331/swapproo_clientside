import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="bg-primary-50 py-24">
      <div className="wrapper">
        <Card className="bg-background rounded-3xl p-24 shadow-none">
          <CardContent className="flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="flex flex-col gap-4">
              <Badge
                variant="outline"
                className="border-primary-300 text-foreground w-fit text-sm font-normal"
              >
                SWAPPROO for Business
              </Badge>
              <h2 className="text-4xl leading-10 font-semibold tracking-normal md:text-4xl">
                Trade-in at scale.
              </h2>
              <p className="text-muted-foreground font-regular max-w-2xl text-lg leading-7 tracking-normal">
                Use the power of SWAPPROO to buy more, and reach your next milestone.
              </p>
            </div>
            <div className="border-neutral-975 flex w-full max-w-sm shrink-0 items-center gap-2 rounded-xl border-2 p-3">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="h-10 border-0 shadow-none focus-visible:ring-0"
              />
              <Button className="bg-foreground hover:bg-foreground/90 shrink-0 rounded-lg px-4 py-2 leading-5 text-white shadow-sm">
                Get started
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { CTASection as BusinessCTA };
