import express, { Router } from "express";
import BookingController from "../controllers/BookingController";

const router: Router = express.Router();

router.get("/bookings", BookingController.index);
router.get("/bookings/:id", BookingController.show);
router.post("/bookings/create", BookingController.create);
// TODO: Add middleware for policies
router.put("/bookings/:id", BookingController.update);
// TODO: Add middleware for policies
router.delete("/bookings/:id", BookingController.delete);

export { router };
