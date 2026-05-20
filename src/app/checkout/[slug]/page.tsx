import Checkout from "@/features/checkout";
import type { CheckoutPageProps } from "./types";

export default async function CheckoutPage({ params, searchParams }: CheckoutPageProps) {
  const { slug } = await params;
  const { storage, network, condition } = await searchParams;
  return <Checkout slug={slug} storage={storage} network={network} condition={condition} />;
}
