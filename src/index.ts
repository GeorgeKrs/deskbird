import express, { Application } from "express";
import DatabaseService from "./services/DatabaseService";
import "dotenv/config";
import { router as BookingRoutes } from "./http/routes/BookingRoute";
import { APP_ENV } from "./enums/AppEnvironment";
import UpdateOrCreateUsersSeeder from "./seeders/UpdateOrCreateUsersSeeder";
import UpdateOrCreateParkingSpotsSeeder from "./seeders/UpdateOrCreateParkingSpotsSeeder";
import UpdateOrCreateBookingsSeeder from "./seeders/UpdateOrCreateBookingsSeeder";

const app: Application = express();
const PORT = process.env.PORT || 3000;

/*
 *
 *  Helpers
 *
 */
app.use(express.json());

/*
 *
 *  API Routes
 *
 */
app.use("/api", BookingRoutes);

/*
 *
 *  Services
 *
 */
const databaseService = new DatabaseService();
databaseService
  .connect()
  .then(() =>
    console.log("Connection to the database has been established successfully.")
  )
  .catch((error) => console.error("Unable to connect to the database.", error));

/*
 *
 *  Development Seeders
 *
 */
if (process.env.APP_ENV === APP_ENV.DEVELOPMENT) {
  UpdateOrCreateUsersSeeder()
    .then(() => console.log("Users created or updated successfully!"))
    .catch((error: any) =>
      console.error("Error at UpdateOrCreateUsersSeeder.", error)
    );

  UpdateOrCreateParkingSpotsSeeder()
    .then(() => console.log("Parking Spots created or updated successfully!"))
    .catch((error: any) =>
      console.error("Error at UpdateOrCreateParkingSpotsSeeder.", error)
    );

  // UpdateOrCreateBookingsSeeder()
  //   .then(() => console.log("Bookings created or updated successfully!"))
  //   .catch((error: any) =>
  //     console.error("Error at UpdateOrCreateBookingsSeeder.", error)
  //   );
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
