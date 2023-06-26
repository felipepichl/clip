import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from '@jest/environment';
import { PrismaClient } from '@prisma/client';
import NodeEnvironment from 'jest-environment-node';
import { MongoClient } from 'mongodb';

export default class PrismaTestEnvironment extends NodeEnvironment {
  private connectionString: string;
  private prisma: PrismaClient;

  constructor(config: JestEnvironmentConfig, _context?: EnvironmentContext) {
    super(config, _context);

    this.connectionString = process.env.DATABASE_URL;

    this.prisma = new PrismaClient();
  }

  async teardown() {
    await this.prisma.$disconnect();

    const client = new MongoClient(this.connectionString);
    await client.connect();
    await client.db().dropDatabase();
    await client.close();
  }
}
