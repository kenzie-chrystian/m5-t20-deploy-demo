import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError";
import { JsonWebTokenError } from "jsonwebtoken";
import { status } from "../utils";

class HandleErrorsMiddleware {
  public static execute = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (error instanceof AppError) {
      // console.log("ENTROU NO IF APPERROR");

      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof JsonWebTokenError) {
      return res
        .status(status.HTTP_401_UNAUTHORIZED)
        .json({ message: error.message });
    }

    if (error instanceof ZodError) {
      return res
        .status(status.HTTP_400_BAD_REQUEST)
        .json({ errors: error.errors });
    }

    console.error(error.message);
    return res
      .status(status.HTTP_500_INTERNAL_SERVER_ERROR)
      .json({ message: "Internal Server Error" });
  };
}

export const handleErrors = HandleErrorsMiddleware.execute;
