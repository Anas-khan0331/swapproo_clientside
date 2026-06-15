import {
  Box,
  ReceiptSearch,
  Record as RecordIcon,
  TickCircle,
  Truck,
  WalletCheck,
} from "iconsax-reactjs";

export type StepStatus = "completed" | "pending" | "inactive";

export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: StepStatus;
  showLine: boolean;
}

export const DEFAULT_TRACK_STEPS: Step[] = [
  {
    icon: <RecordIcon variant="Broken" />,
    title: "Processing",
    description: "Your order is confirmed and ready for dispatch.",
    status: "completed",
    showLine: true,
  },
  {
    icon: <Truck />,
    title: "Shipped",
    description: "Your device is currently on its way to us.",
    status: "completed",
    showLine: true,
  },
  {
    icon: <Box />,
    title: "Delivered",
    description: "We have received your device at our lab.",
    status: "pending",
    showLine: true,
  },
  {
    icon: <ReceiptSearch />,
    title: "Inspection",
    description: "Our team is verifying\nyour device condition.",
    status: "inactive",
    showLine: true,
  },
  {
    icon: <TickCircle />,
    title: "Approved",
    description: "Condition verified and your price is now locked.",
    status: "inactive",
    showLine: true,
  },
  {
    icon: <WalletCheck />,
    title: "Paid",
    description: "Your payment has been successfully processed.",
    status: "inactive",
    showLine: false,
  },
];
