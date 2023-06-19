import { User } from '@modules/accounts/domain/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { PrismaClient } from '@prisma/client';

import { UserMappers } from '../mappers/UserMappers';

class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(user: User): Promise<void> {
    const { name, cpf, whatsapp } = UserMappers.getMapper().toPersistence(user);

    await this.prisma.user.create({
      data: {
        name,
        cpf,
        whatsapp,
      },
    });
  }

  async findByCpf(cpf: string): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: { cpf },
    });

    return UserMappers.getMapper().toDomain(result);
  }

  async findById(user_id: string): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    return UserMappers.getMapper().toDomain(result);
  }
}

export { UsersRepository };
