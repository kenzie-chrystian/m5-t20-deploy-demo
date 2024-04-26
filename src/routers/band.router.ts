import { Router } from "express";
import { musicianController, BandController } from "../controllers";
import { ensure } from "../middlewares";
import { bandPayloadCreateSchema } from "../schemas";
import { BandService } from "../services";
import { container } from "tsyringe";

export const bandRouter = Router();
container.registerSingleton("BandService", BandService);

const bandController = container.resolve(BandController);

bandRouter.get("", bandController.list);
bandRouter.post(
  "",
  ensure.bodyIsValid(bandPayloadCreateSchema),
  bandController.create
);

bandRouter.get("/:bandId", bandController.retrieve);

// MUSICIANS
bandRouter.post("/:bandId/musicians", musicianController.create);
// bandRouter.get("/:bandId/musicians");
