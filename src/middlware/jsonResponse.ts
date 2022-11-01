import { Request, Response, NextFunction } from "express";

const jsonResponse = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.set("Content-Type", "application/json");
  next();
};

export default jsonResponse;