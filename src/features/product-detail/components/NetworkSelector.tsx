import { NETWORK_OPTIONS } from "../constants";
import RadioOption from "./RadioOption";

interface NetworkSelectorProps {
  network: string;
  setNetwork: (value: string) => void;
}

export function NetworkSelector({ network, setNetwork }: NetworkSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-semibold">Network</h2>
      <div className="grid grid-cols-2 gap-3">
        {NETWORK_OPTIONS.slice(0, 4).map((opt) => (
          <RadioOption
            key={opt.value}
            label={opt.label}
            selected={network === opt.value}
            onSelect={() => setNetwork(opt.value)}
          />
        ))}
      </div>
      <RadioOption
        label="Three"
        selected={network === "three"}
        onSelect={() => setNetwork("three")}
      />
    </div>
  );
}
