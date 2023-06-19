import { User } from '@modules/accounts/domain/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByCpf(cpf: string): Promise<User> {
    const user = this.users.find(user => user.cpf === cpf);

    return user;
  }

  async findById(user_id: string): Promise<User> {
    const user = this.users.find(user => user.id.toString() === user_id);

    return user;
  }
}

export { UsersRepositoryInMemory };
