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

export { getPrismaClient, closePrismaConnection };
