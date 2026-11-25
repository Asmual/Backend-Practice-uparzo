import sharp from "sharp";
import { cloudinary } from "../config/cloudinary.js";
import { UploadOptions, UploadResult } from "./r2Storage.js";

export const uploadToCloudinary = async (
  buffer: Buffer,
  options: UploadOptions
): Promise<UploadResult> => {
  // 1. Optimize & convert image to WebP using Sharp (same as R2 logic)
  const processedBuffer = await sharp(buffer)
    .rotate()
    .resize({
      width: 1200,
      height: 1200,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toBuffer();

  // 2. Upload processed WebP buffer to Cloudinary
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder,
        resource_type: "image",
        format: "webp",
      },
      (error, result) => {
        if (error || !result) {
          return reject(error || new Error("Cloudinary upload failed"));
        }
        resolve({
          key: result.public_id,
          url: result.secure_url,
        });
      }
    );

    uploadStream.end(processedBuffer);
  });
};
