import UserBusinessLogic from "../../src/businessLogics/UserBusinessLogic";
import { USER_APP_ROLES } from "../../src/enums/UserAppRoles";
import User from "../../src/models/User";

jest.mock("../../src/models/User");

describe("UserBusinessLogic", () => {
  let user: User;
  let userBusinessLogic: UserBusinessLogic;

  beforeEach(() => {
    user = new User();
    userBusinessLogic = new UserBusinessLogic(user);
  });

  test("isAdmin should return true if user role is ADMIN", () => {
    user.role = USER_APP_ROLES.ADMIN;
    expect(userBusinessLogic.isAdmin()).toBe(true);
  });

  test("isAdmin should return false if user role is not ADMIN", () => {
    user.role = USER_APP_ROLES.STANDARD;
    expect(userBusinessLogic.isAdmin()).toBe(false);
  });
});
