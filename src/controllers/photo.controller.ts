/* Modules */
import { Request, Response } from "express";

/* Modules */
import Photo from "../models/Photo";

export async function get_photo(
  req: Request,
  res: Response
): Promise<Response> {
  const photos = await Photo.find();
  return res.json(photos);
}

export async function create_photo(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;

  const { path } = req.file;

  const new_photo = {
    title,
    description,
    imagePath: path
  };

  const photo = new Photo(new_photo);

  await photo.save();

  return res.json({
    message: "Photo successfully saved",
    photo
  });
}
