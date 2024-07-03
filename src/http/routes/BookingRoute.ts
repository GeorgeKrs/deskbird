import express, { Router } from "express";
import BookingController from "../controllers/BookingController";

const router: Router = express.Router();

router.get("/bookings", BookingController.index);
router.get("/bookings/:id", BookingController.show);
router.post("/bookings/create", BookingController.create);
router.put("/bookings/:id", BookingController.update);
router.delete("/bookings/:id", BookingController.delete);

export { router };
