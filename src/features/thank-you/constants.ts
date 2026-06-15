import { PrepareDeviceIcon } from "@/assets/icons/PrepareDeviceIcon";
import { PrintLabelIcon } from "@/assets/icons/PrintLabelIcon";
import { PackSecurelyIcon } from "@/assets/icons/PackSecurelyIcon";
import { ShipPayoutIcon } from "@/assets/icons/ShipPayoutIcon";

export const ORDER_DATA = {
  orderId: "#12344",
  customerName: "Tim Cook",
  customerEmail: "timcook@gmail.com",
  customerPhone: "+441234567890",
  confirmationMessage: "You'll receive a confirmation email with shipping label shortly.",
};

export const STEPS = [
  {
    icon: PrepareDeviceIcon,
    title: "Prepare Your Device",
    description:
      "Factory reset your device. Most importantly, ensure Find My iPhone/Google Lock is turned off so our team can inspect it.",
  },
  {
    icon: PrintLabelIcon,
    title: "Print Your Shipping Label",
    description:
      "Download your Prepaid Label. If you don't have a printer, just show the QR code at any authorized drop-off point.",
  },
  {
    icon: PackSecurelyIcon,
    title: "Pack It Securely",
    description:
      "Place your device in a sturdy box with bubble wrap or paper padding. A secure fit prevents damage during transit.",
  },
  {
    icon: ShipPayoutIcon,
    title: "Ship & Payout",
    description:
      "Drop your package at nearest location. Once it arrives at our lab, we'll inspect and trigger your payout within 24 hours.",
  },
];

export const SHIPPING_DATA = {
  from: {
    name: "Tim Cook",
    address: ["1 Beehive Road, Bolton", "BL32GD, United kingdom"],
  },
  to: {
    name: "Mobile Direct",
    address: ["85 Bury New Road", "United Kingdom"],
  },
  via: "Royal Mail",
  parcelNumber: "FC12345678900GB",
};

export const BANK_DATA = {
  accountName: "Tim Cook",
  accountNumber: "12345678",
  sortCode: "12-34-56",
};
