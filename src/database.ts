/* Modules */
import mongoose, { connect } from "mongoose";

export async function start_connection() {
  await connect(
    "mongodb://localhost/photo_gallery_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  console.log("Database is connected");
}
