"use server";

import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import { Resource } from "sst";
import { EMAIL } from "./constants";

interface ContactFormPayload {
  name: string;
  email?: string;
  phone: string;
  message: string;
}

export const sendContactFormEmail = async ({ name, email, phone, message }: ContactFormPayload) => {
  const client = new SESv2Client();

  const htmlContent = `
    <div style="font-family: sans-serif; line-height: 1.5;">
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  await client.send(
    new SendEmailCommand({
      FromEmailAddress: `noreply@${Resource.NextEmail.sender}`,
      Destination: {
        ToAddresses: [EMAIL],
      },
      Content: {
        Simple: {
          Subject: {
            Data: "New Contact Form Submission",
            Charset: "UTF-8",
          },
          Body: {
            Html: {
              Data: htmlContent,
              Charset: "UTF-8",
            },
          },
        },
      },
    }),
  );
};
