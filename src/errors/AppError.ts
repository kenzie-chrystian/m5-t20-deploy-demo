import { status } from "../utils";

export class AppError extends Error {
  constructor(public message: string, public statusCode: number = 400) {
    super(message);
  }
}

export class NotFoundError extends AppError {
  constructor(
    public message: string,
    public statusCode: number = status.HTTP_404_NOT_FOUND
  ) {
    super(message);
  }
}
