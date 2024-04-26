import { z } from "zod";
import {
  trackSchema,
  trackPayloadSchema,
  trackRetrieveSchema,
} from "../schemas";

type Track = z.infer<typeof trackSchema>;
type TrackPayloadCreate = z.infer<typeof trackPayloadSchema>;
type TrackRetrieve = z.infer<typeof trackRetrieveSchema>;

export { Track, TrackPayloadCreate, TrackRetrieve };
