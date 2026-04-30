"use client";

import { Separator } from "@/components/ui/separator";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { CONDITION_OPTIONS, NETWORK_OPTIONS, STORAGE_OPTIONS } from "../constants";
import ProductHeading from "./ProductHeading";
import ProductSelectors from "./ProductSelectors";
import ProductSummary from "./ProductSummary";

interface ProductOverviewProps {
  productName: string;
  img: string | StaticImageData;
}

const ProductOverview = ({ productName, img }: ProductOverviewProps) => {
  const [storage, setStorage] = useState("256gb");
  const [network, setNetwork] = useState("unlocked");
  const [condition, setCondition] = useState("excellent");
  const selectedCondition = CONDITION_OPTIONS.find((c) => c.value === condition)!;
  const selectedStorage = STORAGE_OPTIONS.find((s) => s.value === storage)!;
  const selectedNetwork = NETWORK_OPTIONS.find((n) => n.value === network)!;

  const headingLabel = `${productName} | ${selectedStorage.label} | ${selectedNetwork.label} | ${selectedCondition.label}`;

  return (
    <div className="bg-background flex flex-col items-center gap-8 pt-4 pb-20">
      <div className="flex w-full flex-col items-center gap-0">
        <ProductHeading
          productName={productName}
          img={img}
          headingLabel={headingLabel}
          price={selectedCondition.price}
        />
        <Separator />
        <div className="flex w-full flex-row items-start justify-between gap-8 pt-8">
          <ProductSelectors
            storage={storage}
            setStorage={setStorage}
            network={network}
            setNetwork={setNetwork}
            condition={condition}
            setCondition={setCondition}
          />
          <Separator orientation="vertical" className="h-auto self-stretch" />
          <ProductSummary selectedCondition={selectedCondition} productName={productName} />
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
