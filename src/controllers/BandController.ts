import { Request, Response } from "express";
import { status } from "../utils";
import { IBandService } from "../interfaces";
import { injectable, inject } from "tsyringe";

@injectable()
export class BandController {
  constructor(@inject("BandService") private service: IBandService) {}

  public list = async (req: Request, res: Response): Promise<Response> => {
    const bands = await this.service.list();
    return res.status(status.HTTP_200_OK).json(bands);
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    const band = await this.service.create(req.body);
    return res.status(status.HTTP_201_CREATED).json(band);
  };

  public retrieve = async (req: Request, res: Response): Promise<Response> => {
    const band = await this.service.retrieve(Number(req.params.bandId));

    return res.status(status.HTTP_200_OK).json(band);
  };
}
