import { v4 as uuid } from 'uuid';

class Issue {
  private readonly id: string;

  description: string;

  latitude: number;

  longitude: number;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Issue };
