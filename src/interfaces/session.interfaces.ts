import { z } from "zod";
import { sessionBodyCreateSchema, sessionReturnSchema } from "../schemas";

type SessionBodyCreate = z.infer<typeof sessionBodyCreateSchema>;
type SessionReturn = z.infer<typeof sessionReturnSchema>;

export { SessionBodyCreate, SessionReturn };
