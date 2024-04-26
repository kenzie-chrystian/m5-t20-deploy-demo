import { z } from "zod";
import {
  accountSchema,
  accountPayloadCreateSchema,
  accountReturnSchema,
} from "../schemas";

type Account = z.infer<typeof accountSchema>;
type AccountPayloadCreate = z.infer<typeof accountPayloadCreateSchema>;
type AccountReturn = z.infer<typeof accountReturnSchema>;

interface IAccountService {
  list(): Promise<Array<AccountReturn>>;
  create(payload: AccountPayloadCreate): Promise<AccountReturn>;
  retrieve(accountId: number): Promise<AccountReturn>;
  isUsernameUnique(username: string): Promise<boolean>;
}

export { Account, AccountPayloadCreate, AccountReturn, IAccountService };
