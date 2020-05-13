import share from "./share";
import { Sequelize } from "sequelize-typescript";

/* istanbul ignore next */
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  process.env.NODE_ENV === "test"
    ? { dialect: "sqlite", storage: "./test_database.sqlite" }
    : { dialect: "mysql", host: "mysql" }
);

const models = {
  share,
};

sequelize.addModels(Object.values(models));

export { models, sequelize };
