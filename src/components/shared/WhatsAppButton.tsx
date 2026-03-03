"use client";

import { SITE_CONFIG, WHATSAPP_MESSAGE } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        click_location: "floating_button",
      });
    }
  };

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-20 lg:bottom-6 right-4 z-50 group"
      aria-label="WhatsApp ile iletişime geçin"
    >
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[wa-ping_2s_ease-out_infinite]" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-[wa-ping_2s_ease-out_0.6s_infinite]" />

      {/* Icon */}
      <span className="relative h-[58px] w-[58px] lg:h-[50px] lg:w-[50px] flex items-center justify-center rounded-full bg-[#25D366] shadow-lg group-hover:scale-110 transition-transform duration-300">
        <WhatsAppIcon className="h-8 w-8 lg:h-7 lg:w-7 text-white" colored={false} />
      </span>
    </a>
  );
}
