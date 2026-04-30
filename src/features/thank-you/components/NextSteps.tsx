import { Card, CardContent } from "@/components/ui/card";
import { STEPS } from "../constants";
import ActionButtons from "./ActionButtons";

const NextSteps = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-foreground text-xl leading-7 font-semibold">What Happens Next?</h2>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {STEPS.map((step, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent>
                  <div className="flex flex-col gap-4 py-6">
                    <div className="-mx-6 -mt-6 flex flex-row gap-2.5 px-6">
                      <step.icon className="h-9 w-9" />
                    </div>
                    <div className="-mx-6 flex flex-col gap-2 px-6">
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

      <ActionButtons />
    </div>
  );
};

export default NextSteps;
