import { Request, Response } from "express";

class BookingController {
  /*
   *  Responsible for displaying all booking records
   */
  static index = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({ bookings: [] });
    } catch (error) {
      console.error(error);

      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later." });
    }
  };

  /*
   *  Responsible for displaying a single booking record
   */
  static show = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "The information we have about the booking",
        data: {},
      });
    } catch (error) {
      console.error(error);

      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later." });
    }
  };

  /*
   *  Responsible for creating a booking record
   */
  static create = async (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "The booking created successfully!",
        data: {},
      });
    } catch (error) {
      console.error(error);

      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later." });
    }
  };

  /*
   *  Responsible for updating a booking record
   */
  static update = async (req: Request, res: Response) => {
    try {
      return res
        .status(200)
        .json({ message: "The booking updated successfully!", data: {} });
    } catch (error) {
      console.error(error);

      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later." });
    }
  };

  /*
   *  Responsible for deleting a booking record
   */
  static delete = async (req: Request, res: Response) => {
    try {
      return res
        .status(200)
        .json({ message: "The booking deleted successfully!" });
    } catch (error) {
      console.error(error);

      return res
        .status(500)
        .json({ message: "Something went wrong, please try again later." });
    }
  };
}

export default BookingController;
