import { Router } from "express";
import { trackController } from "../controllers";
import { ensure } from "../middlewares";
// import { trackCreateSchema } from "../schemas";

export const trackRouter = Router();

trackRouter.get("", trackController.list);
trackRouter.get("/:trackId", trackController.retrieve);

// trackRouter.post(
//   "",
//   ensure.bodyIsValid(trackCreateSchema),
//   trackController.create
// );
