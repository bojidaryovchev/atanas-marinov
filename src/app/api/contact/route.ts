import { sendContactFormEmail } from "@/API";
import { contactFormSchema } from "@/lib/validations";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // ✅ Validate request body
    const { name, email, phone, message } = contactFormSchema.parse(body);

    // ✅ Send email using SES
    await sendContactFormEmail({ name, email, phone, message });

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        data: { name, email, phone, message },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 });
  }
}
