"use server";

import React from "react"
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { contactFormEmail } from "@/Email/contactFormEmail"

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email!!",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message!!",
    };
  }
  let data
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["Kushwahaashu444@gmail.com"],
      reply_to: senderEmail as string,
      subject: "Message from contact form",
      text: message as string,
      react: React.createElement(contactFormEmail,{
        message: message as string,
        senderEmail: senderEmail as string
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data
  }
};
