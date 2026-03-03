import { z } from "zod";

export const appointmentSchema = z.object({
  name: z.string().min(3, "Ad soyad en az 3 karakter olmalıdır"),
  phone: z
    .string()
    .regex(
      /^05\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
      "Geçerli bir telefon numarası girin (05XX XXX XX XX)"
    ),
  brand: z.string().min(1, "Araç markası seçiniz"),
  model: z.string().min(1, "Araç modeli seçiniz"),
  year: z.string().min(1, "Araç yılı seçiniz"),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().max(500, "Mesaj en fazla 500 karakter olabilir").optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const CAR_BRANDS = [
  "Audi", "BMW", "Chevrolet", "Citroën", "Dacia", "Fiat", "Ford",
  "Honda", "Hyundai", "Kia", "Mercedes-Benz", "Nissan", "Opel",
  "Peugeot", "Renault", "Seat", "Škoda", "Toyota", "Volkswagen", "Volvo",
] as const;

export const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00",
] as const;
