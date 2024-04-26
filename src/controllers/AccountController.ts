import { Request, Response } from "express";
import { AccountService } from "../services";
import { IAccountService } from "../interfaces";
import { status } from "../utils";
import { injectable, inject } from "tsyringe";

@injectable()
export class AccountController {
  // private service = new AccountService();

  constructor(@inject("AccountService") private service: IAccountService) {}

  public create = async (req: Request, res: Response): Promise<Response> => {
    const account = await this.service.create(req.body);

    return res.status(status.HTTP_201_CREATED).json(account);
  };

  public list = async (req: Request, res: Response): Promise<Response> => {
    const accounts = await this.service.list();
    // console.log(res.locals);
    return res.status(status.HTTP_200_OK).json(accounts);
  };

  public retrieve = async (req: Request, res: Response): Promise<Response> => {
    const account = await this.service.retrieve(Number(req.params.accountId));

    return res.status(status.HTTP_200_OK).json(account);
  };
}
