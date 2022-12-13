const cloudinary = require("cloudinary");
import { CLOUD_NAME, API_KEY, API_SECRET, API_ENV } from "./config/keys.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

uploadToCloudinary = (path, folder) => {
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

removeFromCloudinary = async (public_id) => {
  await cloudinary.v2.uploader.destroy(public_id, function (error, result) {
    console.log(result, error);
  });
};
// exports.uploads = (file, folder) => {
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(
//       file,
//       (result) => {
//         resolve({
//           url: result.url,
//           id: result.public_id,
//         });
//       },
//       {
//         resource_type: "auto",
//         folder: folder,
//       }
//     );
//   });
// };

module.exports = { uploadToCloudinary, removeFromCloudinary };
