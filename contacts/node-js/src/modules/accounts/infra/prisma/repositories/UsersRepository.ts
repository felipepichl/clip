import { User } from '@modules/accounts/domain/User'
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository'

import { getPrismaClient } from '@shared/infra/prisma'

import { UserMappers } from '../mappers/UserMappers'

class UsersRepository implements IUsersRepository {
  async create(user: User): Promise<void> {
    const { name, cpf, whatsapp } = UserMappers.getMapper().toPersistence(user)

    await getPrismaClient().user.create({
      data: {
        name,
        cpf,
        whatsapp,
      },
    })
  }

  async findByCpf(cpf: string): Promise<User> {
    const result = await getPrismaClient().user.findUnique({
      where: { cpf },
    })

    if (!result) {
      return null
    }

    return UserMappers.getMapper().toDomain(result)
  }

  async findById(userId: string): Promise<User> {
    const result = await getPrismaClient().user.findUnique({
      where: {
        id: userId,
      },
    })

    return UserMappers.getMapper().toDomain(result)
  }
}

export { UsersRepository }
