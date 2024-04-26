import { z } from "zod";

const accountSchema = z.object({
  id: z.number().positive(),
  username: z.string().max(50),
  password: z.string().max(255),
  favoriteColor: z.string().max(255).nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const accountPayloadCreateSchema = accountSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

const accountReturnSchema = accountSchema.omit({ password: true });

export { accountSchema, accountPayloadCreateSchema, accountReturnSchema };
