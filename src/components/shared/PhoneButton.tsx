"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  location?: string;
}

export default function PhoneButton({
  variant = "primary",
  className,
  location = "page",
}: PhoneButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        click_location: location,
      });
    }
  };

  return (
    <a
      href={`tel:${SITE_CONFIG.phoneRaw}`}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 font-semibold rounded-lg transition-colors",
        variant === "primary" &&
          "bg-primary hover:bg-primary-dark text-white px-6 py-3",
        variant === "outline" &&
          "border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3",
        variant === "ghost" &&
          "text-primary hover:text-primary-dark",
        className
      )}
    >
      <Phone className="h-4 w-4" />
      Bizi Arayın
    </a>
  );
}
