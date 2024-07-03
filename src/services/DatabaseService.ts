import { Sequelize } from "sequelize";

class DatabaseService {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;

  constructor() {
    if (!process.env.DB_DATABASE) {
      throw new Error("No database name, check the .env file.");
    }

    if (!process.env.DB_USERNAME) {
      throw new Error("No database user name, check the .env file.");
    }

    if (!process.env.DB_PASSWORD) {
      throw new Error("No database password, check the .env file.");
    }

    if (!process.env.DB_HOST) {
      throw new Error("No database host, check the .env file.");
    }

    if (!process.env.DB_PORT) {
      throw new Error("No database port, check the .env file.");
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
  instantiateSequelize = () => {
    return new Sequelize(this.database, this.username, this.password, {
      host: this.host,
      dialect: "postgres",
    });
  };

  connect = async () => {
    await this.instantiateSequelize().authenticate();
  };
}

export default DatabaseService;
