import { Router } from "express";
import { AlbumController, trackController } from "../controllers";
import { auth, ensure, ensureAlbum } from "../middlewares";
import { albumPayloadCreateSchema, trackBodyCreateSchema } from "../schemas";
import { AlbumService, albumService } from "../services";

export const albumRouter = Router();

const albumController = new AlbumController(albumService);

albumRouter.get("", auth.isAuthenticated, auth.isAdmin, albumController.list);
albumRouter.post(
  "",
  ensure.bodyIsValid(albumPayloadCreateSchema),
  albumController.create
);

albumRouter.use("/:albumId/tracks", ensureAlbum.paramIdExists);

albumRouter.get("/:albumId/tracks", trackController.listByAlbumId);
albumRouter.post(
  "/:albumId/tracks",
  ensure.bodyIsValid(trackBodyCreateSchema),
  trackController.create
);
