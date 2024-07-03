import { Model, DataTypes } from "sequelize";
import DatabaseService from "../services/DatabaseService";
import Booking from "./Booking";

class ParkingSpot extends Model {
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

const sequelize = new DatabaseService().instantiateSequelize();

ParkingSpot.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "parkingSpots",
  }
);

export default ParkingSpot;
