import express from "express";
import { share } from "./models";

import { Sequelize } from "sequelize-typescript";

const app = express();
const port = 3000;

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  { dialect: "mysql", host: "mysql" }
);

export const models = {
  share,
};

sequelize.addModels(Object.values(models));

sequelize.sync().then(() => {
  app.listen(port);
});

export default app;
