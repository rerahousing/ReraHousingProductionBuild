const cloudinary = require("cloudinary");
import { CLOUD_NAME, API_KEY, API_SECRET, API_ENV } from "../config/keys";

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

const uploadToCloudinary = (path, folder) => {
  return cloudinary.v2.uploader
    .upload(path, {
      folder,
    })
    .then((data) => {
      return { url: data.url, public_id: data.public_id };
    })
    .catch((error) => {
      console.log(error, error.message);
    });
};

const removeFromCloudinary = async (public_id) => {
  await cloudinary.v2.uploader.destroy(public_id, function (error, result) {
    console.log(result, error);
  });
};

module.exports = { uploadToCloudinary, removeFromCloudinary };
