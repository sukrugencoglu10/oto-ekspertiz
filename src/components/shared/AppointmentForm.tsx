"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import {
  appointmentSchema,
  type AppointmentFormData,
  CAR_BRANDS,
  TIME_SLOTS,
} from "@/lib/validations";

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      const response = await fetch("/api/randevu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Gönderim başarısız");

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_submit",
          form_type: "appointment",
          vehicle_brand: data.brand,
          vehicle_model: data.model,
        });
      }

      setSubmitted(true);
      reset();
    } catch {
      alert("Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-border">
        <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-primary mb-2">
          Randevunuz Alındı!
        </h3>
        <p className="text-gray-600 mb-4">
          En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-accent hover:text-accent-dark font-medium transition-colors"
        >
          Yeni Randevu Oluştur
        </button>
      </div>
    );
  }

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, i) =>
    String(currentYear - i)
  );

  const today = new Date().toISOString().split("T")[0];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border space-y-4"
    >
      <h3 className="text-xl font-bold text-primary mb-2">Hızlı Randevu Al</h3>
      <p className="text-sm text-muted mb-4">
        Formu doldurun, sizi arayalım.
      </p>

      {/* Ad Soyad */}
      <div>
        <input
          {...register("name")}
          placeholder="Ad Soyad *"
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        />
        {errors.name && (
          <p className="text-danger text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Telefon */}
      <div>
        <input
          {...register("phone")}
          placeholder="Telefon (05XX XXX XX XX) *"
          type="tel"
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm"
        />
        {errors.phone && (
          <p className="text-danger text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Araç bilgileri */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <select
            {...register("brand")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Marka *
            </option>
            {CAR_BRANDS.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          {errors.brand && (
            <p className="text-danger text-xs mt-1">{errors.brand.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("model")}
            placeholder="Model *"
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm"
          />
          {errors.model && (
            <p className="text-danger text-xs mt-1">{errors.model.message}</p>
          )}
        </div>
        <div>
          <select
            {...register("year")}
            className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Yıl *
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.year && (
            <p className="text-danger text-xs mt-1">{errors.year.message}</p>
          )}
        </div>
      </div>

      {/* Tarih ve Saat */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          {...register("date")}
          type="date"
          min={today}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm text-gray-700"
        />
        <select
          {...register("time")}
          className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm text-gray-700"
          defaultValue=""
        >
          <option value="">Saat (opsiyonel)</option>
          {TIME_SLOTS.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

      {/* Mesaj */}
      <textarea
        {...register("message")}
        placeholder="Mesaj / Not (opsiyonel)"
        rows={3}
        className="w-full px-4 py-3 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark disabled:opacity-50 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Randevu Talebi Gönder
          </>
        )}
      </button>
    </form>
  );
}
