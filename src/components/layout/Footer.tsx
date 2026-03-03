import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, WHATSAPP_MESSAGE } from "@/lib/constants";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              İstanbul Bağcılar&apos;da profesyonel oto ekspertiz hizmeti.
              Aracınızın gerçek değerini öğrenin, güvenle alın veya satın.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={SITE_CONFIG.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 text-sm hover:text-accent-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetler/oto-ekspertiz"
                  className="text-gray-300 text-sm hover:text-accent-light transition-colors"
                >
                  Oto Ekspertiz
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/boya-kaporta-tespiti"
                  className="text-gray-300 text-sm hover:text-accent-light transition-colors"
                >
                  Boya & Kaporta Tespiti
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/motor-diagnostik"
                  className="text-gray-300 text-sm hover:text-accent-light transition-colors"
                >
                  Motor Diagnostik
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/tramer-sorgulama"
                  className="text-gray-300 text-sm hover:text-accent-light transition-colors"
                >
                  Tramer Sorgulama
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.district} /{" "}
                  {SITE_CONFIG.address.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-light transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-light transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" colored={false} />
                  WhatsApp İletişim
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-accent-light transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.workingHours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm hakları
            saklıdır.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/gizlilik" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="hover:text-white transition-colors">
              KVKK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
