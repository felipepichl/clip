import { Router } from "express";

const ordersRouter = Router();

const orders = [];

ordersRouter.post("/orders", (request, response) => {
  const { budget } = request.body();

  orders.push({
    budget,
  });

  return response.status(201).send();
});

export { ordersRouter };
