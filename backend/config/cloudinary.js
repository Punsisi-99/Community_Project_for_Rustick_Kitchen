// cloudinary.js
import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  // // Log environment variables to verify they're loading
  // console.log("Cloudinary Config:", {
  //   cloud_name: process.env.CLOUDINARY_NAME,
  //   api_key: process.env.CLOUDINARY_API_KEY,
  //   api_secret: process.env.CLOUDINARY_SECRET_KEY,
  // });

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
