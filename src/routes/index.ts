/* Modules */
import { Router } from "express";

/* Controllers */
import { create_photo, get_photo } from "../controllers/photo.controller";

/* Multer */
import multer from "../libs/multer";

/* Init Router */
const router = Router();

/* Routes */
router
  .route("/photos")
  .get(get_photo)
  .post(multer.single("image"), create_photo);

export default router;
