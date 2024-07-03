import { Model, DataTypes, ValidationError } from "sequelize";
import DatabaseService from "../services/DatabaseService";
import User from "./User";
import ParkingSpot from "./ParkingSpot";

class Booking extends Model {
  public id!: number;
  public userId!: number;
  public parkingSpotId!: number;
  public startedAt!: Date;
  public endedAt!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

/*
 *  ModelValidations
 */
const validations = {
  parkingSpotId: {
    notNull: {
      msg: "Parking spot ID is required",
    },
    isInt: {
      msg: "Parking spot ID must be an integer",
    },
    async exists(value: number) {
      const parkingSpot = await ParkingSpot.findByPk(value);
      if (!parkingSpot) {
        throw new Error("Parking spot does not exist");
      }
    },
  },

  userId: {
    notNull: {
      msg: "User ID is required",
    },
    isInt: {
      msg: "User ID must be an integer",
    },
    async exists(value: number) {
      const user = await User.findByPk(value);
      if (!user) {
        throw new Error("User does not exist");
      }
    },
  },

  startedAt: {
    notNull: {
      msg: "Start date is required",
    },
    isDate: {
      args: true,
      msg: "Start date must be a valid date",
    },
    isBeforeEndDate(value: Date) {
      if (value >= (this as any).endedAt) {
        throw new Error("Start date must be earlier than end date");
      }
    },
  },

  endedAt: {
    notNull: {
      msg: "End date is required",
    },
    isDate: {
      args: true,
      msg: "End date must be a valid date",
    },
    isAfterStartDate(value: Date) {
      if (value <= (this as any).startedAt) {
        throw new Error("End date must be later than start date");
      }
    },
  },
};

const sequelize = new DatabaseService().instantiateSequelize();

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      validate: validations.userId,
    },
    parkingSpotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ParkingSpot,
        key: "id",
      },
      validate: validations.parkingSpotId,
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: validations.startedAt,
    },
    endedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: validations.endedAt,
    },
  },
  {
    sequelize,
    tableName: "bookings",
  }
);

/*
 *  Relationships
 */
Booking.belongsTo(User, { foreignKey: "userId", as: "user" });
Booking.belongsTo(ParkingSpot, {
  foreignKey: "parkingSpotId",
  as: "parkingSpot",
});

export default Booking;
