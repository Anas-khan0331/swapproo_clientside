import {
  Record as RecordIcon,
  Truck,
  Box,
  ReceiptSearch,
  TickSquare,
  Wallet,
} from "iconsax-reactjs";

export type StepStatus =
  | "completed"
  | "pending"
  | "inactive"
  | "processing"
  | "shipped"
  | "delivered"
  | "inspection"
  | "approved"
  | "paid";

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: StepStatus;
  showLine: boolean;
}

export const STEP = {
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  INSPECTION: "inspection",
  APPROVED: "approved",
  PAID: "paid",
} as const;

export const DEFAULT_TRADE_IN_STEPS: Step[] = [
  {
    icon: <RecordIcon variant="Broken" />,
    title: "Processing",
    description: "Your order is confirmed and ready for dispatch.",
    status: STEP.PROCESSING,
    showLine: true,
  },
  {
    icon: <Truck />,
    title: "Shipped",
    description: "Your device is currently on its way to us.",
    status: STEP.SHIPPED,
    showLine: true,
  },
  {
    icon: <Box />,
    title: "Delivered",
    description: "We have received your device at our lab.",
    status: STEP.DELIVERED,
    showLine: true,
  },
  {
    icon: <ReceiptSearch />,
    title: "Inspection",
    description: "Our team is verifying\nyour device condition.",
    status: STEP.INSPECTION,
    showLine: true,
  },
  {
    icon: <TickSquare />,
    title: "Approved",
    description: "Condition verified and your price is now locked.",
    status: STEP.APPROVED,
    showLine: true,
  },
  {
    icon: <Wallet />,
    title: "Paid",
    description: "Your payment has been successfully processed.",
    status: STEP.PAID,
    showLine: false,
  },
];
