import { Sequelize } from "sequelize";

/*
 *  Responsible for managing all the functionality
 *  that has to do with the database layer
 */
class DatabaseService {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;

  constructor() {
    if (!process.env.DB_DATABASE) {
      throw new Error("DB_DATABASE not found, check the .env file.");
    }

    if (!process.env.DB_USERNAME) {
      throw new Error("DB_USERNAME not found, check the .env file.");
    }

    if (!process.env.DB_PASSWORD) {
      throw new Error("DB_PASSWORD not found, check the .env file.");
    }

    if (!process.env.DB_HOST) {
      throw new Error("DB_HOST not found, check the .env file.");
    }

    if (!process.env.DB_PORT) {
      throw new Error("DB_PORT not found, check the .env file.");
    }

    this.database = process.env.DB_DATABASE;
    this.username = process.env.DB_USERNAME;
    this.password = process.env.DB_PASSWORD;
    this.host = process.env.DB_HOST;
    this.port = Number(process.env.DB_PORT);
  }

  /*
   *
   *  Public Methods
   *
   */

  /* Instantiate sequelize with name of database, username and password */
  instantiateSequelize = () => {
    return new Sequelize(this.database, this.username, this.password, {
      port: this.port,
      host: this.host,
      dialect: "postgres",
    });
  };

  /* Test the connection to the database by trying to authenticate */
  connect = async () => {
    await this.instantiateSequelize().authenticate();
  };
}

export default DatabaseService;
