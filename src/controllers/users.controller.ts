import { Request, Response } from "express";
import User from "../models/users"
import { auth } from "express-openid-connect";
import logger from "../lib/logger";
import AuthenticationError from "../lib/AuthError";


const authRedirect = async (req: Request, res: Response) => {
  const authedUser = req.oidc?.user;

  if (!authedUser) throw new AuthenticationError("Failed to log in user");

  let user = await User.findOne({ email: authedUser?.email });

  if (!user) {
    user = await User.create({
      email: authedUser?.email,
      firstName: authedUser?.given_name,
      lastName: authedUser?.family_name,
      events: [],
    });

    logger().info(`Created new user with email ${user.email}`);
  }

 
  res.json(JSON.stringify(user));
};

export { authRedirect };