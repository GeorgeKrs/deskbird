import { USER_APP_ROLES } from "../enums/UserAppRoles";
import User from "../models/User";

class UserBusinessLogic {
  user: User;

  constructor(user: User) {
    this.user = user;
  }

  isAdmin = (): boolean => {
    return this.user.role === USER_APP_ROLES.ADMIN;
  };
}

export default UserBusinessLogic;
