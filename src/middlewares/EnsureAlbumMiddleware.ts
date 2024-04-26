import { NextFunction, Request, Response } from "express";
import { prisma } from "../database";
import { status } from "../utils";

export class EnsureAlbumMiddleware {
  public paramIdExists = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const foundAlbum = await prisma.album.findFirst({
      where: {
        id: Number(req.params.albumId),
      },
    });

    if (!foundAlbum) {
      return res
        .status(status.HTTP_404_NOT_FOUND)
        .json({ message: "Album not found" });
    }

    res.locals = { foundAlbum };

    return next();
  };
}

export const ensureAlbum = new EnsureAlbumMiddleware();
