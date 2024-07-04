import express, { Application } from "express";
import DatabaseService from "./services/DatabaseService";
import "dotenv/config";
import { router as BookingRoutes } from "./http/routes/BookingRoute";

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
