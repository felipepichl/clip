import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

function getPrismaClient(): PrismaClient {
  if (!prisma) {
    prisma = new PrismaClient();
  }

  return prisma;
}

function closePrismaConnection(): void {
  if (prisma) {
    prisma.$disconnect();
  }
}

process.on('beforeExit', closePrismaConnection);
process.on('SIGINT', closePrismaConnection);
process.on('SIGTERM', closePrismaConnection);

export { getPrismaClient, closePrismaConnection };
