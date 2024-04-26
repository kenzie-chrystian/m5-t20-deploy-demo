import { Request, Response } from "express";
import { SessionService } from "../services";
import { status } from "../utils";

export class SessionController {
  private service = new SessionService();

  // public list = async (req: Request, res: Response): Promise<Response> => {
  //   const albums = await this.service.list();
  //   return res.status(200).json(albums);
  // };

  public login = async (req: Request, res: Response): Promise<Response> => {
    const account = await this.service.login(req.body);
    return res.status(status.HTTP_200_OK).json(account);
  };
}

export const sessionController = new SessionController();
