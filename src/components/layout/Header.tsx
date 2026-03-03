"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, WHATSAPP_MESSAGE } from "@/lib/constants";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handlePhoneClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_click",
        click_location: "header",
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        click_location: "header",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:block">{SITE_CONFIG.workingHours}</span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={handlePhoneClick}
              className="flex items-center gap-1 hover:text-accent-light transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-1 hover:text-accent-light transition-colors"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" colored={false} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-primary text-lg block">
                Bağcılar
              </span>
              <span className="text-xs text-muted font-medium tracking-wider uppercase">
                Oto Ekspertiz
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface transition-colors"
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {openDropdown === link.href && (
                    <div className="absolute left-0 top-full pt-1 w-56 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-border py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-surface hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/iletisim"
            className="hidden lg:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Randevu Al
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-surface"
            aria-label="Menüyü aç/kapat"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.href ? null : link.href
                      )
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium text-gray-700"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openDropdown === link.href && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === link.href && (
                    <div className="ml-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-primary hover:bg-surface"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-surface"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/iletisim"
              onClick={() => setMobileOpen(false)}
              className="block mx-3 mt-3 text-center bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Randevu Al
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

function Car(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
