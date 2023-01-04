//falta editar

const express = require("express");
const {
  createPlatform,
  updatePlatformWithoutPoster,
  updatePlatform,
  removePlatform,
 
} = require("../controllers/platform");
const { isAuth, isAdmin } = require("../middlewares/auth");
const { uploadVideo, uploadImage } = require("../middlewares/multer");
const {
  validatePlatform,
  validate,
  validateTrailer,
} = require("../middlewares/validator");
const { parseData } = require("../utils/helper");
const router = express.Router();

router.post(
  "/upload-trailer",
  isAuth,
  isAdmin,
  uploadVideo.single("video"),
  uploadTrailer
);
router.post(
  "/create",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validatePlatform,
  validateTrailer,
  validate,
  createPlatform
);
// router.patch(
//   "/update-Platform-without-poster/:PlatformId",
//   isAuth,
//   isAdmin,
//   // parseData,
//   validatePlatform,
//   validate,
//   updatePlatformWithoutPoster
// );
router.patch(
  "/update/:PlatformId",
  isAuth,
  isAdmin,
  uploadImage.single("poster"),
  parseData,
  validatePlatform,
  validate,
  updatePlatform
);
router.delete("/:PlatformId", isAuth, isAdmin, removePlatform);
router.get("/Platforms", isAuth, isAdmin, getPlatforms);
router.get("/for-update/:PlatformId", isAuth, isAdmin, getPlatformForUpdate);
router.get("/search", isAuth, isAdmin, searchPlatforms);

// for normal users
router.get("/latest-uploads", getLatestUploads);
router.get("/single/:PlatformId", getSinglePlatform);
router.get("/related/:PlatformId", getRelatedPlatforms);
router.get("/top-rated", getTopRatedPlatforms);
router.get("/search-public", searchPublicPlatforms);

module.exports = router;
