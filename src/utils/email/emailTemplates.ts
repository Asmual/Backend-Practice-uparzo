import { env } from "../../config/env.config.js";

export const welcomeEmailTemplate = (name: string): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 8px;">
      <h2 style="color: #18181b; margin-top: 0;">Welcome, ${name}!</h2>
      <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #3f3f46;">
        Thanks for creating an account with <strong>${env.smtp_from || "our platform"}</strong>. Your account is set up and ready to go.
      </p>
      <div style="margin: 24px 0; text-align: center;">
        <span style="display: inline-block; padding: 12px 28px; background-color: #18181b; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; border-radius: 6px;">
          Account Activated
        </span>
      </div>
      <p style="margin: 0; font-size: 13px; color: #71717a;">
        Need help getting started? Just reply to this email—we are happy to help.
      </p>
    </div>
  `;
};
