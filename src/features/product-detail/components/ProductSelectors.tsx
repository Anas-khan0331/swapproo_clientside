import { StorageSelector } from "./StorageSelector";
import { NetworkSelector } from "./NetworkSelector";
import { ConditionSelector } from "./ConditionSelector";

interface ProductSelectorsProps {
  storage: string;
  setStorage: (value: string) => void;
  network: string;
  setNetwork: (value: string) => void;
  condition: string;
  setCondition: (value: string) => void;
}

const ProductSelectors = ({
  storage,
  setStorage,
  network,
  setNetwork,
  condition,
  setCondition,
}: ProductSelectorsProps) => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <StorageSelector storage={storage} setStorage={setStorage} />
      <NetworkSelector network={network} setNetwork={setNetwork} />
      <ConditionSelector condition={condition} setCondition={setCondition} />
    </div>
  );
};

export default ProductSelectors;
