import express, { Application } from "express";
import DatabaseService from "./services/DatabaseService";
import "dotenv/config";
import { router as BookingRoutes } from "./http/routes/BookingRoute";
import UpdateOrCreateUsersSeeder from "./seeders/UpdateOrCreateUsersSeeder";
import UpdateOrCreateParkingSpotsSeeder from "./seeders/UpdateOrCreateParkingSpotsSeeder";

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
 *  Seeders
 *
 */
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
