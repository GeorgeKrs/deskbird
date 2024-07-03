import UserBusinessLogic from "../businessLogics/UserBusinessLogic";
import { USER_APP_ROLES } from "../enums/UserAppRoles";
import Booking from "../models/Booking";
import User from "../models/User";

class BookingPolicy {
  /**
   * @param user User instance
   */
  static canViewAll = (user: User) => {
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    return false;
  };

  /**
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
   * @param user User instance
   */
  static canCreate = (user: User) => {
    console.log("inside");
    console.log("result: " + user.businessLogic.isAdmin());
    if (user.businessLogic.isAdmin()) {
      return true;
    }

    return false;
  };

  /**
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