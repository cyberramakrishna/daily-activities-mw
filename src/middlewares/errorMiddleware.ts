import { Request, Response } from "express";

export function errorHandler(
  err: undefined,
  req: Request,
  res: Response
) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
}
