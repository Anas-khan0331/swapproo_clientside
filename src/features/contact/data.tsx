import { MessageSquareMoreIcon, MessagesSquareIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const contactCards = [
  {
    icon: <MessageSquareMoreIcon />,
    title: "Chat to Sales",
    description: "Speak to our friendly team",
    ctaText: "sales@gmail.com",
    ctaLink: "mailto:sales@gmail.com",
  },
  {
    icon: <MessagesSquareIcon />,
    title: "Chat to Support",
    description: "We're here to help you",
    ctaText: "johndoe@gmail.com",
    ctaLink: "mailto:johndoe@gmail.com",
  },
  {
    icon: <MapPinIcon />,
    title: "Visit Us",
    description: "Visit our office",
    ctaText: "View on maps",
    ctaLink: "https://maps.google.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Call Us",
    description: "Mon to Fri from 8am to 5pm",
    ctaText: "+124-2589-7854",
    ctaLink: "tel:+12425897854",
  },
];
