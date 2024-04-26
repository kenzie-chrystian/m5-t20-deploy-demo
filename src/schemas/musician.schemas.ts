import { z } from "zod";

const musicianSchema = z.object({
  id: z.number().positive(),
  firstName: z.string().max(255),
  lastName: z.string().max(255),
  birthDate: z.date().nullish(),
});

const musicianBodyCreateSchema = musicianSchema
  .omit({ id: true })
  .extend({ joined: z.number().positive(), left: z.date().nullish() });

const musicianPayloadSchema = musicianBodyCreateSchema.extend({
  bandId: z.number().positive(),
});

export { musicianSchema, musicianBodyCreateSchema, musicianPayloadSchema };
