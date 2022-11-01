import { Request, Response } from "express";
import { auth } from "express-openid-connect";

const login = (req: Request, res: Response) =>
  res.oidc.login({ returnTo: "/api/v1/users/redirect" });

export { login };