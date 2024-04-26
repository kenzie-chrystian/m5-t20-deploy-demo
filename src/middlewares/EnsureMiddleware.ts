import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

class EnsureMiddleware {
  public bodyIsValid =
    (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction): void => {
      req.body = schema.parse(req.body);

      return next();

      // next();
      // console.log("PRINTADO APOS O NEXT");
    };
}

export const ensure = new EnsureMiddleware();
