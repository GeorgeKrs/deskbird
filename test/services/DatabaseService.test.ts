import { Sequelize } from "sequelize";
import DatabaseService from "../../src/services/DatabaseService";

jest.mock("sequelize", () => {
  return {
    Sequelize: jest.fn(() => ({
      authenticate: jest.fn(),
    })),
  };
});

describe("DatabaseService", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("should throw an error if DB_DATABASE is missing", () => {
    delete process.env.DB_DATABASE;
    expect(() => new DatabaseService()).toThrow(
      "DB_DATABASE not found, check the .env file."
    );
  });

  test("should throw an error if DB_USERNAME is missing", () => {
    delete process.env.DB_USERNAME;
    expect(() => new DatabaseService()).toThrow(
      "DB_USERNAME not found, check the .env file."
    );
  });

  test("should throw an error if DB_PASSWORD is missing", () => {
    delete process.env.DB_PASSWORD;
    expect(() => new DatabaseService()).toThrow(
      "DB_PASSWORD not found, check the .env file."
    );
  });

  test("should throw an error if DB_HOST is missing", () => {
    delete process.env.DB_HOST;
    expect(() => new DatabaseService()).toThrow(
      "DB_HOST not found, check the .env file."
    );
  });

  test("should throw an error if DB_PORT is missing", () => {
    delete process.env.DB_PORT;
    expect(() => new DatabaseService()).toThrow(
      "DB_PORT not found, check the .env file."
    );
  });

  test("should instantiate Sequelize with correct parameters", () => {
    process.env.DB_DATABASE = "testdb";
    process.env.DB_USERNAME = "testuser";
    process.env.DB_PASSWORD = "testpass";
    process.env.DB_HOST = "localhost";
    process.env.DB_PORT = "5432";

    const databaseService = new DatabaseService();
    const sequelize = databaseService.instantiateSequelize();

    expect(Sequelize).toHaveBeenCalledWith("testdb", "testuser", "testpass", {
      port: 5432,
      host: "localhost",
      dialect: "postgres",
    });
  });
});
