import express from "express";

import { ordersRouter } from "../routes/orders.routes";

const app = express();

app.use(express.json());

app.use(ordersRouter);

app.listen(3333, () => {
  console.log("Server running in port 3333");
});
