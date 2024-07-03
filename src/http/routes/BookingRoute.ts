import express, { Router } from "express";
import BookingController from "../controllers/BookingController";
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router: Router = express.Router();

router.get("/bookings", AuthMiddleware, BookingController.index);
router.get("/bookings/:id", AuthMiddleware, BookingController.show);
router.post("/bookings/create", AuthMiddleware, BookingController.create);
router.put("/bookings/:id", AuthMiddleware, BookingController.update);
router.delete("/bookings/:id", AuthMiddleware, BookingController.delete);

export { router };
