import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const ordersRouter = Router();

const orders = [];

ordersRouter.post("/orders", (request, response) => {
  const { budget } = request.body();

  const order = {
    id: uuidV4(),
    budget,
  };

  orders.push(order);

  return response.status(201).send();
});

export { ordersRouter };
