import { bandRouter } from "./band.router";
import { albumRouter } from "./album.router";
import { trackRouter } from "./track.router";
import { accountRouter } from "./account.router";
import { sessionRouter } from "./session.router";
import { Express } from "express";

export const initRoutes = (app: Express) => {
  app.use("/api/bands", bandRouter);
  app.use("/api/albums", albumRouter);
  app.use("/api/tracks", trackRouter);
  app.use("/api/accounts", accountRouter);
  app.use("/api", sessionRouter);
};
