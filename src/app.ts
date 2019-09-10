/* Modules */
import express from "express";
import morgan from "morgan";
import path from "path";

/* Import Routes */
import index_routes from "./routes";

const app = express();

/* Settings */
app.set("port", process.env.PORT || 3000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Routes */
app.use("/api", index_routes);

/* This folder for this application will be used to store public files */
app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
