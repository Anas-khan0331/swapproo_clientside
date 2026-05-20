import { CONDITION_OPTIONS } from "../constants";
import RadioOption from "./RadioOption";

interface ConditionSelectorProps {
  condition: string;
  setCondition: (value: string) => void;
}

export function ConditionSelector({ condition, setCondition }: ConditionSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-semibold">Condition</h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-2">
        {CONDITION_OPTIONS.slice(0, 4).map((opt) => (
          <RadioOption
            key={opt.value}
            label={opt.label}
            price={opt.price}
            selected={condition === opt.value}
            onSelect={() => setCondition(opt.value)}
          />
        ))}
      </div>
      {/* Faulty — full width */}
      <RadioOption
        label="Faulty"
        price="£500"
        selected={condition === "faulty"}
        onSelect={() => setCondition("faulty")}
      />
    </div>
  );
}
