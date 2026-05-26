"use client";

import { Separator } from "@/components/ui/separator";
import { StaticImageData } from "next/image";
import { useState } from "react";
import { CONDITION_OPTIONS, NETWORK_OPTIONS, STORAGE_OPTIONS } from "../constants";
import ProductHeading from "./ProductHeading";
import ProductSelectors from "./ProductSelectors";
import ProductSummary from "./ProductSummary";
import { SellDeviceButton, SellDeviceButtonDisabled } from "./SellDeviceButton";
import { toSlug } from "@/features/category-detail/utils";
import Show from "@/components/common/show";

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

  const slug = toSlug(productName || "");
  const headingLabel = `${productName} | ${selectedStorage.label} | ${selectedNetwork.label} | ${selectedCondition.label}`;

  return (
    <div className="bg-background flex flex-col gap-8 pt-4 pb-8 lg:pb-20">
      <div className="w-full">
        <ProductHeading
          productName={productName}
          img={img}
          headingLabel={headingLabel}
          price={selectedCondition.price}
        />
        <Separator />
        <div className="grid w-full grid-cols-12 gap-6 pt-6 lg:gap-7 lg:pt-8">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:pr-8">
            <ProductSelectors
              storage={storage}
              setStorage={setStorage}
              network={network}
              setNetwork={setNetwork}
              condition={condition}
              setCondition={setCondition}
            />
            <div className="mt-5 block lg:hidden">
              <Show when={!!slug}>
                <SellDeviceButton
                  slug={slug}
                  storage={selectedStorage.label}
                  network={selectedNetwork.label}
                  condition={selectedCondition.label}
                />
              </Show>
              <Show when={!slug}>
                <SellDeviceButtonDisabled />
              </Show>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <ProductSummary
              selectedCondition={selectedCondition}
              productName={productName}
              storage={selectedStorage.label}
              network={selectedNetwork.label}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
