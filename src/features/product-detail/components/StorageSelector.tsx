import { STORAGE_OPTIONS } from "../constants";
import RadioOption from "./RadioOption";

interface StorageSelectorProps {
  storage: string;
  setStorage: (value: string) => void;
}

export function StorageSelector({ storage, setStorage }: StorageSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-foreground text-xl font-semibold">Storage</h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-2">
        {STORAGE_OPTIONS.map((opt) => (
          <RadioOption
            key={opt.value}
            label={opt.label}
            selected={storage === opt.value}
            onSelect={() => setStorage(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}
