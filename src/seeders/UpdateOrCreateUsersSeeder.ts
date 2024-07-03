import { USER_APP_ROLES } from "../enums/UserAppRoles";
import User from "../models/User";

async function UpdateOrCreateUsersSeeder() {
  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: USER_APP_ROLES.ADMIN,
      token: "token1",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: USER_APP_ROLES.ADMIN,
      token: "token2",
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice.johnson@example.com",
      role: USER_APP_ROLES.STANDARD,
      token: "token3",
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      email: "bob.brown@example.com",
      role: USER_APP_ROLES.STANDARD,
      token: "token4",
    },
    {
      firstName: "Charlie",
      lastName: "Davis",
      email: "charlie.davis@example.com",
      role: USER_APP_ROLES.STANDARD,
      token: "token5",
    },
  ];

  for (const user of users) {
    await User.upsert(user);
  }
}

export default UpdateOrCreateUsersSeeder;
