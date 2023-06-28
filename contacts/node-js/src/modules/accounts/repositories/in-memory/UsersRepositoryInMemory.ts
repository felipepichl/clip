import { User } from '@modules/accounts/domain/User'

import { IUsersRepository } from '../IUsersRepository'

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = []

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async findByCPF(cpf: string): Promise<User> {
    const user = this.users.find((user) => user.cpf === cpf)

    return user
  }

  async findById(userId: string): Promise<User> {
    const user = this.users.find((user) => user.id.toString() === userId)

    return user
  }
}

export { UsersRepositoryInMemory }
