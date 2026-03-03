import { NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = appointmentSchema.parse(body);

    // TODO: Resend veya Nodemailer ile e-posta gönderimi
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@firmaadi.com.tr',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: `Yeni Randevu Talebi - ${validated.name}`,
    //   html: `...`,
    // });

    console.log("Yeni randevu talebi:", validated);

    return NextResponse.json(
      { success: true, message: "Randevu talebiniz alındı." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Form verilerinde hata var." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: "Bir hata oluştu." },
      { status: 500 }
    );
  }
}
