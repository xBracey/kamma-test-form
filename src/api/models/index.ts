import share from "./share";
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { dialect: "mysql", host: "mysql" }
);

const models = {
  share,
};

sequelize.addModels(Object.values(models));

export { models, sequelize };
