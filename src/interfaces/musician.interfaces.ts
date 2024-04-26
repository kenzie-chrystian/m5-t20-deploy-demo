import { z } from "zod";
import { musicianSchema, musicianPayloadSchema } from "../schemas";

type Musician = z.infer<typeof musicianSchema>;
type MusicianPayload = z.infer<typeof musicianPayloadSchema>;

export { Musician, MusicianPayload };
