"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Modules */
const express_1 = require("express");
/* Controllers */
const photo_controller_1 = require("../controllers/photo.controller");
/* Init Router */
const router = express_1.Router();
/* Routes */
router
    .route("/photos")
    .post(photo_controller_1.create_photo)
    .get(photo_controller_1.get_photo);
exports.default = router;
