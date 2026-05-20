import { Card, CardContent } from "@/components/ui/card";
import { STEPS } from "../constants";
import ActionButtons from "./ActionButtons";

const NextSteps = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-foreground text-xl leading-7 font-semibold">What Happens Next?</h2>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
            {STEPS.map((step, index) => (
              <Card key={index} className="ring-neutral-150 rounded-xl p-6 shadow-sm">
                <CardContent className="p-0">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-2.5">
                      <step.icon className="h-9 w-9" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-card-foreground text-base leading-6 font-semibold">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-5">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <ActionButtons />
      </div>
    </div>
  );
};

export default NextSteps;
