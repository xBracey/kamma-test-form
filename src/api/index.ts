import express from "express";
import { share } from "./routes";

import { sequelize } from "./models";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/share", share);

sequelize.sync().then(() => {
  app.listen(port);
});

export default app;
