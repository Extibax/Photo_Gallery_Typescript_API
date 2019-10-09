"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Modules */
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
/* Import Routes */
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
/* Settings */
app.set("port", process.env.PORT || 4000);
/* Middlewares */
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
/* Routes */
app.use("/api", routes_1.default);
/* This folder for this application will be used to store public files */
app.use("/uploads", express_1.default.static(path_1.default.resolve("uploads")));
exports.default = app;
