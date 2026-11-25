import nodemailer from "nodemailer";
import { env } from "../../config/env.config.js";
import { ApiError } from "../ApiError.js";

interface EmailOption {
  to: string;
  subject: string;
  template?: string;
  data?: Record<string, unknown>;
  html?: string;
  text?: string;
}

export const sendEmail = async (options: EmailOption) => {
  try {
    const transporter = nodemailer.createTransport({
      host: env.smtp_host,
      port: Number(env.smtp_port),
      secure: Number(env.smtp_port) === 465,
      auth: {
        user: env.smtp_user,
        pass: env.smtp_pass,
      },
    });

    const mailOptions = {
      from: env.smtp_from,
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new ApiError(500, "Error sending email");
  }
};
