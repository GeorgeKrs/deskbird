import { Model, DataTypes } from "sequelize";
import DatabaseService from "../services/DatabaseService";
import UserBusinessLogic from "../businessLogics/UserBusinessLogic";

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public role!: string;
  public token!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public businessLogic!: UserBusinessLogic;
}

const sequelize = new DatabaseService().instantiateSequelize();

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    defaultScope: {
      attributes: { exclude: ["token"] },
    },
  }
);

export default User;
