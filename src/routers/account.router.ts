import { Router } from "express";
import { AccountController } from "../controllers";
import { ensure } from "../middlewares";
import { accountPayloadCreateSchema } from "../schemas";
import { auth } from "../middlewares";
import { AccountService } from "../services/AccountService";
import { container } from "tsyringe";

export const accountRouter = Router();
container.registerSingleton("AccountService", AccountService);
const accountController = container.resolve(AccountController);

accountRouter.post(
  "",
  ensure.bodyIsValid(accountPayloadCreateSchema),
  accountController.create
);

accountRouter.get(
  "",
  // auth.isAuthenticated,
  // auth.isAdmin,
  accountController.list
);
accountRouter.get(
  "/:accountId",
  auth.isAuthenticated,
  auth.isAccountOwner,
  accountController.retrieve
);
