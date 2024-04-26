import {
  Account,
  AccountPayloadCreate,
  AccountReturn,
  IAccountService,
} from "../interfaces";
import { prisma } from "../database";
import { accountReturnSchema } from "../schemas";
import { hash } from "bcryptjs";
import { injectable } from "tsyringe";
import { status } from "../utils";
import { AppError } from "../errors/AppError";

@injectable()
export class AccountService implements IAccountService {
  private account = prisma.account;

  public isUsernameUnique = async (username: string): Promise<boolean> => {
    const foundUser = await this.account.findFirst({ where: { username } });

    // TYPE CAST
    return Boolean(foundUser);
  };

  public list = async (): Promise<Array<AccountReturn>> => {
    const accounts = await this.account.findMany();

    return accountReturnSchema.array().parse(accounts);
  };

  public create = async (
    payload: AccountPayloadCreate
  ): Promise<AccountReturn> => {
    const foundAccount = await this.isUsernameUnique(payload.username);

    if (foundAccount) {
      throw new AppError("Username already exists.", status.HTTP_409_CONFLICT);
    }

    payload.password = await hash(payload.password, 10);

    const newAccount = await this.account.create({ data: payload });

    return accountReturnSchema.parse(newAccount);
  };

  public retrieve = async (accountId: number): Promise<AccountReturn> => {
    const account = await this.account.findFirst({
      where: { id: accountId },
    });

    return accountReturnSchema.parse(account);
  };
}

// export const accountService = new AccountService();
