import { Express, Request } from "express";
import User from "../../models/User";

// declare module "express-serve-static-core" {
//   interface Request {
//     user?: User;
//   }
// }

declare global {
  module Express {
    interface Request {
      user?: User;
    }
  }
}
