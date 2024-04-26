import { z } from "zod";

const albumSchema = z.object({
  id: z.number().positive(),
  title: z.string().max(255),
  year: z.number().positive(),
  bandId: z.number().positive(),
});

const albumPayloadCreateSchema = albumSchema.omit({ id: true });

export { albumSchema, albumPayloadCreateSchema };
