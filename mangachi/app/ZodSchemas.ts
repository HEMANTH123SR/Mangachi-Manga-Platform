import { z } from "zod";

export const MangaDetailsSchema = z.object({
  mangaName: z
    .string()
    .max(40, { message: "Manga name must be at most 40 characters." })
    .min(3, { message: "Manga name must be at least 3 characters." }),
  author: z
    .string()
    .max(40, { message: "Author name must be at most 40 characters." })
    .min(3, { message: "Author name must be at least 3 characters." }),
  backgroundImage: z.string().refine((value) => value.trim() !== "", {
    message: "background image is required",
  }),
  coverImage: z.string().refine((value) => value.trim() !== "", {
    message: "cover image is required",
  }),
  tags: z.string().trim().toLowerCase(),
  status: z.enum(["Ongoing", "Completed", "Cancelled"]),
  description: z
    .string()
    .min(400, { message: "Description must be at least 400 characters." })
    .max(600, { message: "Description must be at most 600 characters." }),
});
