import { v4 as uuidV4 } from "uuid";

class Order {
  readonly id: string;

  budget: number;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Order };
