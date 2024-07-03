import { Request, Response } from "express";
import Booking from "../../models/Booking";
import { ValidationError } from "sequelize";

class BookingController {
  /*
   *  Responsible for displaying all booking records
   */
  static index = async (req: Request, res: Response) => {
    try {
      const data = await Booking.findAll();
      return res.status(200).json({ data });
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error });
    }
  };

  /*
   *  Responsible for displaying a single booking record
   */
  static show = async (req: Request, res: Response) => {
    try {
      const booking = await Booking.findByPk(req.params.id);

      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }

      return res.status(200).json({
        message: "The information we have about the booking",
        data: booking,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error });
    }
  };

  /*
   *  Responsible for creating a booking record
   */
  static create = async (req: Request, res: Response) => {
    try {
      const { userId, parkingSpotId, startedAt, endedAt } = req.body;

      const data = await Booking.create({
        userId: userId,
        parkingSpotId: parkingSpotId,
        startedAt: startedAt,
        endedAt: endedAt,
      });

      return res.status(201).json({
        message: "The booking created successfully!",
        data,
      });
    } catch (error) {
      console.error(error);

      if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error });
    }
  };

  /*
   *  Responsible for updating a booking record
   */
  static update = async (req: Request, res: Response) => {
    try {
      const booking = await Booking.findByPk(req.params.id);

      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }

      const { userId, parkingSpotId, startedAt, endedAt } = req.body;

      booking.set({
        userId: userId,
        parkingSpotId: parkingSpotId,
        startedAt: startedAt,
        endedAt: endedAt,
      });

      await booking.save();

      return res
        .status(200)
        .json({ message: "The booking updated successfully!", data: booking });
    } catch (error) {
      console.error(error);

      if (error instanceof ValidationError) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error });
    }
  };

  /*
   *  Responsible for deleting a booking record
   */
  static delete = async (req: Request, res: Response) => {
    try {
      const booking = await Booking.findByPk(req.params.id);

      if (!booking) {
        return res.status(404).json({ message: "Booking not found." });
      }

      booking.destroy();

      return res
        .status(200)
        .json({ message: "The booking deleted successfully!" });
    } catch (error) {
      console.error(error);

      return res.status(500).json({ error });
    }
  };
}

export default BookingController;
