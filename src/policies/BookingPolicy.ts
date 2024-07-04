import Booking from "../models/Booking";
import User from "../models/User";

class BookingPolicy {
  /**
   * Decides if the user can view all booking records
   * @param user User instance
   */
  static canViewAll = (user: User) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    return false;
  };

  /**
   * Decides if the user can view a specific booking record
   * @param user User instance
   * @param booking Booking instance
   */
  static canView = (user: User, booking: Booking) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    if (user.id === booking.userId) {
      return true;
    }

    return false;
  };

  /**
   * Decides if the user can create a booking record
   * @param user User instance
   */
  static canCreate = (user: User) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    return false;
  };

  /**
   * Decides if the user can update a specific booking record
   * @param user User instance
   * @param booking Booking instance
   */
  static canUpdate = (user: User, booking: Booking) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    if (user.id === booking.userId) {
      return true;
    }

    return false;
  };

  /**
   * Decides if the user can delete a specific booking record
   * @param user User instance
   * @param booking Booking instance
   */
  static canDelete = (user: User, booking: Booking) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    if (user.id === booking.userId) {
      return true;
    }

    return false;
  };
}

export default BookingPolicy;
