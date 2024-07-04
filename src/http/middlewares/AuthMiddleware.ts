import { Request, Response, NextFunction } from "express";
import User from "../../models/User";

/*
 * Responsible for finding and storing the user that is making the
 * request based on the auth token provided in the authorization header
 *
 * If it can not find any users, the middleware will return 401 - unauthorized
 */

const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    const user = await User.findOne({ where: { token: token } });

    if (!user) {
      return res.status(401).json({ message: "unauthorized" });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.error("Failed to validate session token: ", error);

    return res
      .status(500)
      .json({ message: "Failed to validate session token" });
  }
};

export default AuthMiddleware;
