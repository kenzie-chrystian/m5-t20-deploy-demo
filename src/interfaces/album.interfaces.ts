import { z } from "zod";
import { albumSchema, albumPayloadCreateSchema } from "../schemas";

type Album = z.infer<typeof albumSchema>;
type AlbumPayloadCreate = z.infer<typeof albumPayloadCreateSchema>;

interface IAlbumService {
  list(): Promise<Array<Album>>;
  create(payload: AlbumPayloadCreate): Promise<Album>;
}

export { Album, AlbumPayloadCreate, IAlbumService };
