import { Router } from "express";

import { addController } from "../controllers/share";

const router = Router();

router.post("/add", async (req, res) => {
  const { status, error, response } = await addController(req.body);

  return error
    ? res.status(status).send({ error })
    : res.status(status).send(response);
});

export default router;
