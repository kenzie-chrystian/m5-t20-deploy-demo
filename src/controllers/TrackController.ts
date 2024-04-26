import { Request, Response } from "express";
import { TrackService } from "../services";
import { status } from "../utils";

export class TrackController {
  private service = new TrackService();

  public list = async (req: Request, res: Response): Promise<Response> => {
    const tracks = await this.service.list();
    return res.status(status.HTTP_200_OK).json(tracks);
  };

  public listByAlbumId = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const albumId = Number(req.params.albumId);
    // const albumId = res.locals.foundAlbum.id
    const tracks = await this.service.listByAlbumId(albumId);

    return res.status(status.HTTP_200_OK).json(tracks);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const payload = { ...req.body, albumId: Number(req.params.albumId) };
    const track = await this.service.create(payload);

    return res.status(status.HTTP_201_CREATED).json(track);
  };

  public retrieve = async (req: Request, res: Response): Promise<Response> => {
    const trackId = Number(req.params.trackId);

    const tracks = await this.service.retrieve(trackId);
    return res.status(status.HTTP_200_OK).json(tracks);
  };
}

export const trackController = new TrackController();
