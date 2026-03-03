import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AppointmentForm from "@/components/shared/AppointmentForm";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";
import { SITE_CONFIG, WHATSAPP_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "İletişim & Randevu",
  description:
    "Bağcılar Oto Ekspertiz ile iletişime geçin. Hızlı randevu alın, adres ve yol tarifi bilgilerine ulaşın.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/iletisim`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            İletişim & Randevu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Randevu almak veya bilgi edinmek için formu doldurun ya da
            doğrudan bizi arayın. Size en kısa sürede dönüş yapalım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <AppointmentForm />

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-border hover:border-accent transition-colors group"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">Telefon</p>
                  <p className="font-semibold text-primary">
                    {SITE_CONFIG.phone}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-border hover:border-success transition-colors group"
              >
                <div className="h-12 w-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                  <WhatsAppIcon className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted">WhatsApp</p>
                  <p className="font-semibold text-primary">Hemen Yazın</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-border hover:border-accent transition-colors group"
              >
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">E-posta</p>
                  <p className="font-semibold text-primary">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-surface rounded-xl p-5 border border-border">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted">Çalışma Saatleri</p>
                  <p className="font-semibold text-primary">
                    {SITE_CONFIG.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-surface rounded-xl p-5 border border-border">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-primary mb-1">Adres</p>
                  <p className="text-sm text-gray-600">
                    {SITE_CONFIG.address.street},{" "}
                    {SITE_CONFIG.address.district} / {SITE_CONFIG.address.city}
                  </p>
                  <a
                    href={SITE_CONFIG.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark font-medium mt-2 transition-colors"
                    data-gtm-event="directions_click"
                  >
                    Yol Tarifi Al &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-80">
              <iframe
                src={SITE_CONFIG.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bağcılar Oto Ekspertiz Konum"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
