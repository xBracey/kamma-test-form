import { sequelize } from "../src/api/models";

const setup = async () => {
  await sequelize.sync();
};

export default setup;
