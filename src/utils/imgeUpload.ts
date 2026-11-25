import { processAndUpload, UploadOptions, UploadResult } from "./r2Storage.js";
import { uploadToCloudinary } from "./cloudinaryStorage.js";
import { env } from "../config/env.config.js";

export const uploadImage = async (
  buffer: Buffer,
  options: UploadOptions
): Promise<UploadResult> => {
  // If Cloudinary credentials are provided, upload to Cloudinary
  if (env.cloudinary_cloud_name && env.cloudinary_api_key) {
    return uploadToCloudinary(buffer, options);
  }
  // Otherwise, use Cloudflare R2
  return processAndUpload(buffer, options);
};
