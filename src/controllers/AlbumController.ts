import { Request, Response } from "express";
import { AlbumService } from "../services";
import { status } from "../utils";
import { IAlbumService } from "../interfaces";

export class AlbumController {
  // private service = new AlbumService();

  constructor(private service: IAlbumService) {
    this.service = service;
  }

  public list = async (req: Request, res: Response): Promise<Response> => {
    const albums = await this.service.list();
    return res.status(status.HTTP_200_OK).json(albums);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const album = await this.service.create(req.body);
    return res.status(status.HTTP_201_CREATED).json(album);
  };
}

// export const albumController = new AlbumController();
