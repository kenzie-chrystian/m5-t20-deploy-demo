import { Album, AlbumPayloadCreate } from "../interfaces";
import { prisma } from "../database";
import { albumSchema } from "../schemas";
import { AppError, NotFoundError } from "../errors/AppError";
import { status } from "../utils";

export class AlbumService {
  private album = prisma.album;

  public list = async (): Promise<Array<Album>> => {
    const albums = await this.album.findMany();

    return albumSchema.array().parse(albums);
  };

  // public retrieve = async (albumId: number): Promise<Album> => {
  //   const album = await this.album.findFirst({
  //     where: {
  //       id: albumId,
  //     },
  //   });

  //   return albumSchema.parse(album);
  // };

  public create = async (payload: AlbumPayloadCreate): Promise<Album> => {
    const foundBand = await prisma.band.findFirst({
      where: {
        id: payload.bandId,
      },
    });

    if (!foundBand) {
      throw new NotFoundError("Band not found.");
    }

    const newAlbum = await this.album.create({ data: payload });

    return albumSchema.parse(newAlbum);
  };
}

export const albumService = new AlbumService();
