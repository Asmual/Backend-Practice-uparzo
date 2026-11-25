import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

export const env = {
  port: Number(process.env.PORT) || 5000,
  node_environment: (process.env.NODE_ENVIRONMENT as string) || "development",
  database_url: (process.env.DATABASE_URL as string) || "",

  // Cloudflare R2 configuration
  r2_accountId: (process.env.R2_ACCOUNT_ID as string) || "",
  r2_accessKeyId: (process.env.R2_ACCESS_KEY_ID as string) || "",
  r2_secretAccessKey: (process.env.R2_SECRET_ACCESS_KEY as string) || "",
  r2_bucketName: (process.env.R2_BUCKET_NAME as string) || "",
  r2_publicUrl: (process.env.R2_PUBLIC_URL as string) || "",

  // Cloudinary Configuration
  cloudinary_cloud_name: (process.env.CLOUDINARY_CLOUD_NAME as string) || "",
  cloudinary_api_key: (process.env.CLOUDINARY_API_KEY as string) || "",
  cloudinary_api_secret: (process.env.CLOUDINARY_API_SECRET as string) || "",
  cloudinary_url: (process.env.CLOUDINARY_URL as string) || "",

  // SMTP Email configuration
  smtp_host: (process.env.SMTP_HOST as string) || "",
  smtp_port: Number(process.env.SMTP_PORT) || 587,
  smtp_user: (process.env.SMTP_USER as string) || "",
  smtp_pass: (process.env.SMTP_PASS as string) || "",
  smtp_from: (process.env.SMTP_FROM as string) || "",
};
