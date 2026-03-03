"use client";

import { Phone, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MobileBottomBar() {
  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        click_location: "mobile_bar",
      });
    }
  };

  const handleDirectionsClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "directions_click",
        click_location: "mobile_bar",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 h-14">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          onClick={handlePhoneClick}
          className="flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          <Phone className="h-4 w-4" />
          Hemen Ara
        </a>
        <a
          href={SITE_CONFIG.social.google}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDirectionsClick}
          className="flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors"
        >
          <Navigation className="h-4 w-4" />
          Yol Tarifi Al
        </a>
      </div>
    </div>
  );
}
