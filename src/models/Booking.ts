import { Model, DataTypes } from "sequelize";
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
    },
    parkingSpotId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ParkingSpot,
        key: "id",
      },
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "bookings",
  }
);

Booking.belongsTo(User, { foreignKey: "userId", as: "user" });
Booking.belongsTo(ParkingSpot, {
  foreignKey: "parkingSpotId",
  as: "parkingSpot",
});

export default Booking;
