"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Modules */
const mongoose_1 = require("mongoose");
async function start_connection() {
    await mongoose_1.connect("mongodb://localhost/photo_gallery_db", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database is connected");
}
exports.start_connection = start_connection;
