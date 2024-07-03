import { Request, Response, NextFunction } from "express";
import User from "../../models/User";

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

    // @ts-ignore
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
