import { Model, DataTypes, Op } from "sequelize";
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
    async exists(id: number) {
      const parkingSpot = await ParkingSpot.findByPk(id);
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
    async exists(id: number) {
      const user = await User.findByPk(id);
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
    async isNotOverlapping(value: Date) {
      const { userId, parkingSpotId, endedAt } = this as any;
      const overlappingBooking = await Booking.findOne({
        where: {
          userId,
          parkingSpotId,
          [Op.or]: [
            {
              startedAt: {
                [Op.lt]: endedAt,
                [Op.gt]: value,
              },
            },
            {
              endedAt: {
                [Op.gt]: value,
                [Op.lt]: endedAt,
              },
            },
            {
              [Op.and]: [
                {
                  startedAt: {
                    [Op.lte]: value,
                  },
                },
                {
                  endedAt: {
                    [Op.gte]: endedAt,
                  },
                },
              ],
            },
          ],
        },
      });
      if (overlappingBooking) {
        throw new Error("Booking times overlap with an existing booking.");
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
Booking.belongsTo(User, { as: "user", foreignKey: "userId" });
Booking.belongsTo(ParkingSpot, {
  as: "parkingSpot",
  foreignKey: "parkingSpotId",
});

export default Booking;
