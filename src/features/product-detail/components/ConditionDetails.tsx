import CheckCircleIcon from "@/assets/icons/CheckCircleIcon";
import { FEATURES } from "../constants";

interface ConditionDetailsProps {
  selectedCondition: {
    label: string;
  };
}

export function ConditionDetails({ selectedCondition }: ConditionDetailsProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-foreground text-lg leading-7 font-semibold">{selectedCondition.label}</h3>
      <div className="flex flex-col gap-2 rounded-md border p-3">
        <p className="text-foreground text-base leading-6">
          <span className="text-foreground text-base font-semibold">
            No Visible scratches or damage
          </span>{" "}
          - No dents or scuff on housing
        </p>
        <div className="flex flex-col gap-2">
          {FEATURES.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircleIcon className="size-5 shrink-0" />
              <span className="text-sidebar-foreground text-base leading-6 font-semibold">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
